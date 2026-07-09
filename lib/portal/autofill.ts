import {
  OPERATION_STATUSES,
  OPERATION_TYPES,
  type NewOperationInput,
  type OperationStatus,
  type OperationType,
} from "@/lib/portal/types";

/**
 * "Smart Autofill" de la demo: extrae campos de un texto informal
 * (WhatsApp / email) con heurísticas locales. En la fase real este parseo
 * se reemplaza por un LLM; la UI no cambia.
 */

export type AutofillResult = Partial<Omit<NewOperationInput, "code">>;

export const AUTOFILL_EXAMPLES = [
  {
    label: "Importación marítima desde China",
    text: "Javier, confírmame por favor la importación marítima de China para el cliente Textiles del Norte. Origen Shanghai, destino puerto de Montevideo. Contenedor MSCU9988112. El barco tiene un ETA para el 30 de mayo. Próximo paso: esperar liberación de aduana.",
  },
  {
    label: "Courier aéreo desde Miami",
    text: "Hola! Te paso los datos del courier aéreo que mandamos de Miami para Repuestos Express. Nro de guía AWB 778-884422, llega el 22 de mayo. Estado: documentación pendiente. Acordate de pedir la factura comercial original. Origen Miami, destino Montevideo.",
  },
] as const;

const MONTHS: Record<string, number> = {
  enero: 0, febrero: 1, marzo: 2, abril: 3, mayo: 4, junio: 5,
  julio: 6, agosto: 7, setiembre: 8, septiembre: 8, octubre: 9,
  noviembre: 10, diciembre: 11,
};

const KNOWN_PLACES = [
  "Shanghai, China", "Ningbo, China", "Miami, Estados Unidos",
  "Santos, Brasil", "São Paulo, Brasil", "Montevideo, Uruguay",
  "Hamburgo, Alemania", "Buenos Aires, Argentina",
] as const;

const normalize = (value: string): string =>
  value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

function detectType(text: string): OperationType | undefined {
  const plain = normalize(text);
  if (plain.includes("courier")) return "Courier";
  if (plain.includes("consolidad")) return "Carga consolidada";
  if (plain.includes("exportacion")) return "Exportación marítima";
  if (plain.includes("aere") || plain.includes("vuelo") || plain.includes("awb")) {
    return plain.includes("importacion maritima") ? "Importación marítima" : "Aéreo";
  }
  if (plain.includes("importacion") || plain.includes("maritim") || plain.includes("contenedor") || plain.includes("barco")) {
    return "Importación marítima";
  }
  return OPERATION_TYPES.find((type) => plain.includes(normalize(type)));
}

function detectStatus(text: string): OperationStatus | undefined {
  const plain = normalize(text);
  const explicit = OPERATION_STATUSES.find((status) =>
    plain.includes(normalize(status)),
  );
  if (explicit) return explicit;
  if (plain.includes("zarpo") || plain.includes("navegando") || plain.includes("en camino") || plain.includes("barco tiene un eta")) {
    return "En tránsito";
  }
  if (plain.includes("falta") && (plain.includes("factura") || plain.includes("document"))) {
    return "Documentación pendiente";
  }
  return undefined;
}

function detectReference(text: string): string | undefined {
  const container = text.match(/\b([A-Z]{4}\s?\d{7})\b/);
  if (container) return container[1].replace(/\s+/g, "");
  const awb = text.match(/\bAWB[\s-]*(\d{3}[\s-]?\d{6,8})\b/i);
  if (awb) return `AWB ${awb[1].replace(/\s+/g, "-")}`;
  const booking = text.match(/\bbooking\s+([A-Z]{2,4}[-\s]?\d{4,8})\b/i);
  if (booking) return `Booking ${booking[1].toUpperCase()}`;
  return undefined;
}

function detectEta(text: string, now: Date): string | undefined {
  const plain = normalize(text);

  const written = plain.match(/\b(\d{1,2})\s+de\s+([a-z]+)(?:\s+de\s+(\d{4}))?/);
  const slash = plain.match(/\b(\d{1,2})\/(\d{1,2})(?:\/(\d{2,4}))?\b/);

  let candidate: Date | undefined;
  if (written && MONTHS[written[2]] !== undefined) {
    const year = written[3] ? Number(written[3]) : now.getFullYear();
    candidate = new Date(Date.UTC(year, MONTHS[written[2]], Number(written[1]), 12));
  } else if (slash) {
    const year = slash[3]
      ? Number(slash[3].length === 2 ? `20${slash[3]}` : slash[3])
      : now.getFullYear();
    candidate = new Date(Date.UTC(year, Number(slash[2]) - 1, Number(slash[1]), 12));
  }

  if (!candidate || Number.isNaN(candidate.getTime())) return undefined;
  // Sin año explícito y ya pasó → asumimos el próximo año.
  if (candidate.getTime() < now.getTime() - 24 * 60 * 60 * 1000 && !written?.[3] && !slash?.[3]) {
    candidate = new Date(Date.UTC(candidate.getUTCFullYear() + 1, candidate.getUTCMonth(), candidate.getUTCDate(), 12));
  }
  return candidate.toISOString();
}

function detectPlaces(text: string): { origin?: string; destination?: string } {
  const plain = normalize(text);
  const found = KNOWN_PLACES.filter((place) =>
    plain.includes(normalize(place.split(",")[0])),
  );

  const originMatch = plain.match(/origen\s+([a-zà-ü\s]+?)(?:[,.]|$|\s+destino)/);
  const destinationMatch = plain.match(/destino(?:\s+puerto\s+de)?\s+([a-zà-ü\s]+?)(?:[,.]|$)/);

  const resolve = (raw?: string): string | undefined => {
    if (!raw) return undefined;
    const key = raw.trim();
    return KNOWN_PLACES.find((place) => normalize(place).includes(key.split(" ")[0]));
  };

  const origin = resolve(originMatch?.[1]) ?? found.find((place) => !place.startsWith("Montevideo"));
  const destination =
    resolve(destinationMatch?.[1]) ??
    found.find((place) => place !== origin) ??
    "Montevideo, Uruguay";

  return { origin, destination };
}

function detectClient(text: string): string | undefined {
  const match = text.match(
    /(?:cliente|para)\s+(?:el\s+cliente\s+)?([A-ZÁÉÍÓÚÑ][\wÁ-úñ&.]*(?:\s+[A-ZÁÉÍÓÚÑa-z][\wÁ-úñ&.]*){0,3})/,
  );
  if (!match) return undefined;
  // Cortar en fin de oración (". ") para no arrastrar la frase siguiente;
  // conserva puntos internos tipo "S.A.".
  return match[1].split(/\.\s/)[0].replace(/[.,;:]+$/, "").trim();
}

function detectNextStep(text: string): string | undefined {
  const explicit = text.match(/pr[oó]ximo paso:?\s*(.+?)(?:\n|$)/i);
  if (explicit) return explicit[1].trim();
  const reminder = text.match(/acordate de\s+(.+?)(?:\.|\n|$)/i);
  if (reminder) {
    const step = reminder[1].trim();
    return step.charAt(0).toUpperCase() + step.slice(1) + ".";
  }
  return undefined;
}

export function parseAutofillText(text: string, now: Date = new Date()): AutofillResult {
  const { origin, destination } = detectPlaces(text);
  const result: AutofillResult = {
    client: detectClient(text),
    type: detectType(text),
    status: detectStatus(text),
    reference: detectReference(text),
    etaISO: detectEta(text, now),
    origin,
    destination,
    nextStep: detectNextStep(text),
  };
  return Object.fromEntries(
    Object.entries(result).filter(([, value]) => value !== undefined),
  ) as AutofillResult;
}
