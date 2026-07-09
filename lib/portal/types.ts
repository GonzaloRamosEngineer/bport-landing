/**
 * Modelo del portal de seguimiento (demo).
 * Estados y tipos según el análisis operativo de BPORT (BPORT_Main/docs).
 * "Observado" es un estado especial fuera del flujo lineal: marca una
 * detención (p. ej. observación de aduana) sin avanzar el timeline.
 */

export const OPERATION_STATUSES = [
  "Recibido",
  "Documentación pendiente",
  "Coordinando origen",
  "En tránsito",
  "Arribo estimado",
  "En puerto",
  "En aduana",
  "Liberado",
  "Coordinando entrega",
  "Entregado",
  "Observado",
] as const;

export type OperationStatus = (typeof OPERATION_STATUSES)[number];

/** Flujo lineal del timeline (excluye "Observado"). */
export const LINEAR_STATUSES = OPERATION_STATUSES.filter(
  (status) => status !== "Observado",
) as readonly Exclude<OperationStatus, "Observado">[];

export const OPERATION_TYPES = [
  "Importación marítima",
  "Exportación marítima",
  "Carga consolidada",
  "Courier",
  "Aéreo",
] as const;

export type OperationType = (typeof OPERATION_TYPES)[number];

export type TimelineState = "done" | "current" | "pending";

export type TimelineEvent = {
  status: OperationStatus;
  /** Descripción visible para el cliente. */
  detail: string;
  state: TimelineState;
  dateISO?: string;
};

export type DocumentKind = "PDF" | "Imagen" | "Pendiente";

export type DocumentItem = {
  name: string;
  kind: DocumentKind;
};

export type Operation = {
  /** Código público del trámite, p. ej. "BP-1234". */
  code: string;
  client: string;
  type: OperationType;
  status: OperationStatus;
  etaISO: string;
  origin: string;
  destination: string;
  /** Contenedor, booking o guía aérea (AWB). */
  reference: string;
  /** Última novedad registrada. */
  updatedISO: string;
  /** Nota visible para el cliente. */
  publicNote: string;
  nextStep: string;
  documents: DocumentItem[];
  timeline: TimelineEvent[];
};

export type OperationUpdate = {
  status: OperationStatus;
  publicNote: string;
  nextStep: string;
};

export type NewOperationInput = {
  code: string;
  client: string;
  type: OperationType;
  origin: string;
  destination: string;
  reference: string;
  etaISO: string;
  status: OperationStatus;
  nextStep: string;
};
