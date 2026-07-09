import type { Operation, TimelineEvent } from "@/lib/portal/types";

/**
 * Datos de ejemplo del portal (demo). Las fechas se generan como offsets
 * del momento de siembra para que la demo nunca se vea vencida.
 */

const daysFrom = (now: Date, days: number): string =>
  new Date(now.getTime() + days * 24 * 60 * 60 * 1000).toISOString();

const hoursAgo = (now: Date, hours: number): string =>
  new Date(now.getTime() - hours * 60 * 60 * 1000).toISOString();

const event = (
  status: TimelineEvent["status"],
  detail: string,
  state: TimelineEvent["state"],
  dateISO?: string,
): TimelineEvent => ({ status, detail, state, dateISO });

export function seedOperations(now: Date = new Date()): Operation[] {
  return [
    {
      code: "BP-1234",
      client: "Importadora Norte S.A.",
      type: "Importación marítima",
      status: "En tránsito",
      etaISO: daysFrom(now, 9),
      origin: "Ningbo, China",
      destination: "Montevideo, Uruguay",
      reference: "MSCU7654321",
      updatedISO: hoursAgo(now, 3),
      publicNote: "El buque zarpó en fecha. Navegación sin novedades.",
      nextStep: "Confirmar arribo al puerto de Montevideo y coordinar descarga.",
      documents: [
        { name: "Packing list", kind: "PDF" },
        { name: "Bill of Lading", kind: "PDF" },
        { name: "Factura comercial", kind: "Pendiente" },
      ],
      timeline: [
        event("Recibido", "Operación registrada por BPORT.", "done", daysFrom(now, -21)),
        event("Documentación pendiente", "Documentos de embarque en revisión.", "done", daysFrom(now, -18)),
        event("Coordinando origen", "Booking confirmado con la naviera.", "done", daysFrom(now, -14)),
        event("En tránsito", "El buque zarpó de Ningbo. Navegación sin novedades.", "current", hoursAgo(now, 3)),
        event("Arribo estimado", "Arribo estimado al puerto de Montevideo.", "pending"),
        event("En puerto", "Descarga y disposición en puerto.", "pending"),
        event("En aduana", "Despacho aduanero de importación.", "pending"),
        event("Liberado", "Carga liberada por aduana.", "pending"),
        event("Coordinando entrega", "Entrega final en depósito del cliente.", "pending"),
        event("Entregado", "Carga entregada al cliente.", "pending"),
      ],
    },
    {
      code: "BP-1288",
      client: "Textiles Prado",
      type: "Carga consolidada",
      status: "En aduana",
      etaISO: daysFrom(now, 2),
      origin: "Santos, Brasil",
      destination: "Montevideo, Uruguay",
      reference: "TCLU8831002",
      updatedISO: hoursAgo(now, 26),
      publicNote: "DUA presentado. A la espera del canal de verificación.",
      nextStep: "Seguimiento del despacho y pago de tributos.",
      documents: [
        { name: "Packing list", kind: "PDF" },
        { name: "Bill of Lading", kind: "PDF" },
        { name: "Factura comercial", kind: "PDF" },
        { name: "DUA borrador", kind: "PDF" },
      ],
      timeline: [
        event("Recibido", "Operación registrada por BPORT.", "done", daysFrom(now, -16)),
        event("Coordinando origen", "Consolidado confirmado en Santos.", "done", daysFrom(now, -12)),
        event("En tránsito", "Tránsito marítimo Santos → Montevideo.", "done", daysFrom(now, -8)),
        event("En puerto", "Contenedor descargado en el puerto de Montevideo.", "done", daysFrom(now, -3)),
        event("En aduana", "DUA presentado. A la espera del canal de verificación.", "current", hoursAgo(now, 26)),
        event("Liberado", "Carga liberada por aduana.", "pending"),
        event("Coordinando entrega", "Entrega final en depósito del cliente.", "pending"),
        event("Entregado", "Carga entregada al cliente.", "pending"),
      ],
    },
    {
      code: "BP-1301",
      client: "Repuestos Sur SRL",
      type: "Courier",
      status: "Documentación pendiente",
      etaISO: daysFrom(now, 5),
      origin: "Miami, Estados Unidos",
      destination: "Montevideo, Uruguay",
      reference: "AWB 045-99881234",
      updatedISO: hoursAgo(now, 6),
      publicNote: "Falta la factura comercial original para avanzar con el embarque.",
      nextStep: "El cliente debe enviar la factura comercial original.",
      documents: [
        { name: "Guía aérea (AWB)", kind: "PDF" },
        { name: "Factura comercial", kind: "Pendiente" },
      ],
      timeline: [
        event("Recibido", "Operación registrada por BPORT.", "done", daysFrom(now, -4)),
        event("Documentación pendiente", "Falta la factura comercial original para avanzar.", "current", hoursAgo(now, 6)),
        event("Coordinando origen", "Retiro y consolidación en Miami.", "pending"),
        event("En tránsito", "Vuelo hacia Montevideo.", "pending"),
        event("En aduana", "Despacho courier.", "pending"),
        event("Entregado", "Entrega a domicilio.", "pending"),
      ],
    },
    {
      code: "BP-1296",
      client: "Laboratorio Delta",
      type: "Aéreo",
      status: "Liberado",
      etaISO: daysFrom(now, 1),
      origin: "São Paulo, Brasil",
      destination: "Montevideo, Uruguay",
      reference: "AWB 957-44120033",
      updatedISO: hoursAgo(now, 1),
      publicNote: "Carga liberada. Coordinamos entrega para las próximas 48 horas.",
      nextStep: "Coordinar ventana de entrega con el depósito del cliente.",
      documents: [
        { name: "Guía aérea (AWB)", kind: "PDF" },
        { name: "Factura comercial", kind: "PDF" },
        { name: "Certificado sanitario", kind: "PDF" },
      ],
      timeline: [
        event("Recibido", "Operación registrada por BPORT.", "done", daysFrom(now, -7)),
        event("Coordinando origen", "Reserva aérea confirmada.", "done", daysFrom(now, -5)),
        event("En tránsito", "Vuelo GRU → MVD realizado.", "done", daysFrom(now, -2)),
        event("En aduana", "Despacho aéreo presentado.", "done", daysFrom(now, -1)),
        event("Liberado", "Carga liberada. Coordinamos entrega.", "current", hoursAgo(now, 1)),
        event("Coordinando entrega", "Entrega en depósito del cliente.", "pending"),
        event("Entregado", "Carga entregada al cliente.", "pending"),
      ],
    },
    {
      code: "BP-1310",
      client: "Frigorífico Las Piedras",
      type: "Exportación marítima",
      status: "Coordinando origen",
      etaISO: daysFrom(now, 24),
      origin: "Montevideo, Uruguay",
      destination: "Hamburgo, Alemania",
      reference: "Booking MAEU-220518",
      updatedISO: hoursAgo(now, 12),
      publicNote: "Booking confirmado. Contenedor reefer asignado para consolidar.",
      nextStep: "Coordinar carga en planta y precintado del contenedor.",
      documents: [
        { name: "Booking confirmation", kind: "PDF" },
        { name: "Certificado sanitario", kind: "Pendiente" },
        { name: "Factura de exportación", kind: "Pendiente" },
      ],
      timeline: [
        event("Recibido", "Operación registrada por BPORT.", "done", daysFrom(now, -5)),
        event("Documentación pendiente", "Documentos de exportación en preparación.", "done", daysFrom(now, -3)),
        event("Coordinando origen", "Booking confirmado. Contenedor reefer asignado.", "current", hoursAgo(now, 12)),
        event("En tránsito", "Navegación Montevideo → Hamburgo.", "pending"),
        event("En puerto", "Arribo al puerto de Hamburgo.", "pending"),
        event("Entregado", "Entrega al consignatario.", "pending"),
      ],
    },
    {
      code: "BP-1275",
      client: "Importadora Norte S.A.",
      type: "Importación marítima",
      status: "Entregado",
      etaISO: daysFrom(now, -12),
      origin: "Shanghai, China",
      destination: "Montevideo, Uruguay",
      reference: "MSCU9911223",
      updatedISO: daysFrom(now, -10),
      publicNote: "Operación finalizada. Carga entregada en depósito del cliente.",
      nextStep: "Operación cerrada.",
      documents: [
        { name: "Packing list", kind: "PDF" },
        { name: "Bill of Lading", kind: "PDF" },
        { name: "Factura comercial", kind: "PDF" },
        { name: "Remito de entrega", kind: "Imagen" },
      ],
      timeline: [
        event("Recibido", "Operación registrada por BPORT.", "done", daysFrom(now, -48)),
        event("Coordinando origen", "Embarque confirmado en Shanghai.", "done", daysFrom(now, -40)),
        event("En tránsito", "Navegación Shanghai → Montevideo.", "done", daysFrom(now, -33)),
        event("En puerto", "Descarga en el puerto de Montevideo.", "done", daysFrom(now, -14)),
        event("En aduana", "Despacho de importación.", "done", daysFrom(now, -13)),
        event("Liberado", "Carga liberada por aduana.", "done", daysFrom(now, -12)),
        event("Coordinando entrega", "Entrega coordinada con el depósito.", "done", daysFrom(now, -11)),
        event("Entregado", "Carga entregada en depósito del cliente.", "done", daysFrom(now, -10)),
      ],
    },
  ];
}

/** Códigos sugeridos como chips de prueba en la búsqueda pública. */
export const SAMPLE_CODES = ["BP-1234", "BP-1288", "BP-1301"] as const;
