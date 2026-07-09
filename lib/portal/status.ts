import {
  LINEAR_STATUSES,
  type NewOperationInput,
  type Operation,
  type OperationStatus,
  type OperationUpdate,
  type TimelineEvent,
} from "@/lib/portal/types";

const DEFAULT_DETAILS: Record<OperationStatus, string> = {
  Recibido: "Operación registrada por BPORT.",
  "Documentación pendiente": "A la espera de documentación del embarque.",
  "Coordinando origen": "Coordinando retiro y embarque en origen.",
  "En tránsito": "Carga en tránsito hacia destino.",
  "Arribo estimado": "Arribo estimado próximo a confirmarse.",
  "En puerto": "Carga arribada a puerto / aeropuerto.",
  "En aduana": "Trámite aduanero en curso.",
  Liberado: "Carga liberada por aduana.",
  "Coordinando entrega": "Coordinando entrega final.",
  Entregado: "Carga entregada al cliente.",
  Observado: "La operación presenta una observación. BPORT está gestionando la regularización.",
};

const linearIndex = (status: OperationStatus): number =>
  LINEAR_STATUSES.indexOf(status as (typeof LINEAR_STATUSES)[number]);

/**
 * Recalcula el timeline al cambiar el estado de una operación.
 * - Estados lineales: marca done/current/pending por posición en el flujo,
 *   preservando detalle y fecha de los eventos ya registrados.
 * - "Observado" detiene el flujo: conserva el progreso previo como done y
 *   agrega el evento de observación como current (sin pendientes).
 */
export function applyStatusUpdate(
  operation: Operation,
  update: OperationUpdate,
  nowISO: string,
): Operation {
  const detail = update.publicNote.trim() || DEFAULT_DETAILS[update.status];

  let timeline: TimelineEvent[];

  if (update.status === "Observado") {
    const progress = operation.timeline
      .filter((event) => event.status !== "Observado" && event.state !== "pending")
      .map((event): TimelineEvent =>
        event.state === "current" ? { ...event, state: "done" } : event,
      );
    timeline = [
      ...progress,
      { status: "Observado", detail, state: "current", dateISO: nowISO },
    ];
  } else {
    const targetIndex = linearIndex(update.status);
    const previousByStatus = new Map(
      operation.timeline.map((event) => [event.status, event]),
    );

    timeline = LINEAR_STATUSES.map((status): TimelineEvent => {
      const index = linearIndex(status);
      const previous = previousByStatus.get(status);
      if (index < targetIndex) {
        return {
          status,
          detail: previous?.detail ?? DEFAULT_DETAILS[status],
          state: "done",
          dateISO: previous?.dateISO,
        };
      }
      if (index === targetIndex) {
        return { status, detail, state: "current", dateISO: nowISO };
      }
      return { status, detail: DEFAULT_DETAILS[status], state: "pending" };
    });
  }

  return {
    ...operation,
    status: update.status,
    publicNote: update.publicNote.trim(),
    nextStep: update.nextStep.trim(),
    updatedISO: nowISO,
    timeline,
  };
}

export function buildTimelineForNewOperation(
  status: OperationStatus,
  nowISO: string,
): TimelineEvent[] {
  if (status === "Observado") {
    return [
      { status: "Recibido", detail: DEFAULT_DETAILS.Recibido, state: "done", dateISO: nowISO },
      { status: "Observado", detail: DEFAULT_DETAILS.Observado, state: "current", dateISO: nowISO },
    ];
  }
  const targetIndex = linearIndex(status);
  return LINEAR_STATUSES.map((linearStatus): TimelineEvent => {
    const index = linearIndex(linearStatus);
    if (index < targetIndex) {
      return { status: linearStatus, detail: DEFAULT_DETAILS[linearStatus], state: "done", dateISO: nowISO };
    }
    if (index === targetIndex) {
      return { status: linearStatus, detail: DEFAULT_DETAILS[linearStatus], state: "current", dateISO: nowISO };
    }
    return { status: linearStatus, detail: DEFAULT_DETAILS[linearStatus], state: "pending" };
  });
}

export function createOperation(
  input: NewOperationInput,
  nowISO: string,
): Operation {
  return {
    code: input.code,
    client: input.client,
    type: input.type,
    status: input.status,
    etaISO: input.etaISO,
    origin: input.origin,
    destination: input.destination,
    reference: input.reference,
    updatedISO: nowISO,
    publicNote: "",
    nextStep: input.nextStep,
    documents: [],
    timeline: buildTimelineForNewOperation(input.status, nowISO),
  };
}

export type PortalKpis = {
  active: number;
  inCustoms: number;
  pendingDocs: number;
  etaWithin7Days: number;
};

export function computeKpis(operations: Operation[], now: Date): PortalKpis {
  const in7Days = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  return {
    active: operations.filter((op) => op.status !== "Entregado").length,
    inCustoms: operations.filter((op) => op.status === "En aduana").length,
    pendingDocs: operations.filter(
      (op) =>
        op.status === "Documentación pendiente" ||
        op.documents.some((doc) => doc.kind === "Pendiente"),
    ).length,
    etaWithin7Days: operations.filter((op) => {
      if (op.status === "Entregado") return false;
      const eta = new Date(op.etaISO);
      return eta >= now && eta <= in7Days;
    }).length,
  };
}

export function suggestNextCode(operations: Operation[]): string {
  const max = operations.reduce((acc, op) => {
    const numeric = Number.parseInt(op.code.replace(/\D/g, ""), 10);
    return Number.isFinite(numeric) ? Math.max(acc, numeric) : acc;
  }, 1000);
  return `BP-${max + 1}`;
}

export function normalizeCode(raw: string): string {
  const trimmed = raw.trim().toUpperCase();
  if (!trimmed) return "";
  if (/^\d+$/.test(trimmed)) return `BP-${trimmed}`;
  return trimmed.replace(/\s+/g, "");
}
