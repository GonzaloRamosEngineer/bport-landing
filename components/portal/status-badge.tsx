import { Badge } from "@/components/ui/badge";
import type { OperationStatus } from "@/lib/portal/types";

type BadgeTone = "navy" | "teal" | "amber" | "red";

/** Mapeo explícito estado → tono (Tailwind v4 no compila clases dinámicas). */
const STATUS_TONE: Record<OperationStatus, BadgeTone> = {
  Recibido: "navy",
  "Documentación pendiente": "amber",
  "Coordinando origen": "navy",
  "En tránsito": "navy",
  "Arribo estimado": "amber",
  "En puerto": "navy",
  "En aduana": "navy",
  Liberado: "teal",
  "Coordinando entrega": "navy",
  Entregado: "teal",
  Observado: "red",
};

export function StatusBadge({
  status,
  className,
}: {
  status: OperationStatus;
  className?: string;
}) {
  return (
    <Badge variant={STATUS_TONE[status]} className={className}>
      {status}
    </Badge>
  );
}
