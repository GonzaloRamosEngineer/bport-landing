"use client";

import { Anchor, Boxes, Plane, Ship, Truck } from "lucide-react";

import { RouteVisual } from "@/components/portal/route-visual";
import { StatusBadge } from "@/components/portal/status-badge";
import { formatDate, formatRelative } from "@/lib/portal/format";
import { portalCopy } from "@/lib/portal/copy";
import type { Operation, OperationType } from "@/lib/portal/types";

const copy = portalCopy.tracking;

const TYPE_ICON: Record<OperationType, typeof Ship> = {
  "Importación marítima": Ship,
  "Exportación marítima": Anchor,
  "Carga consolidada": Boxes,
  Courier: Truck,
  Aéreo: Plane,
};

function Metric({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="rounded-xl border border-border bg-background px-3.5 py-2.5">
      <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p
        className={
          mono
            ? "mt-0.5 truncate font-mono text-sm font-semibold text-foreground"
            : "mt-0.5 truncate text-sm font-semibold text-foreground"
        }
      >
        {value}
      </p>
    </div>
  );
}

export function OperationSummary({ operation }: { operation: Operation }) {
  const TypeIcon = TYPE_ICON[operation.type];

  return (
    <div className="card-elevated p-5 sm:p-7">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="icon-box">
            <TypeIcon className="h-5 w-5" aria-hidden />
          </span>
          <div>
            <h2 className="font-display text-xl text-foreground sm:text-2xl">
              <span className="font-mono">{operation.code}</span>
            </h2>
            <p className="text-sm text-muted-foreground">
              {operation.type} · {operation.client}
            </p>
          </div>
        </div>
        <StatusBadge status={operation.status} className="text-sm" />
      </div>

      <div className="mt-6">
        <RouteVisual origin={operation.origin} destination={operation.destination} />
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
        <Metric label={copy.etaLabel} value={formatDate(operation.etaISO)} />
        <Metric label={copy.referenceLabel} value={operation.reference} mono />
        <Metric
          label={copy.updatedLabel}
          value={formatRelative(operation.updatedISO)}
        />
      </div>

      {operation.publicNote && (
        <p className="mt-4 rounded-xl bg-muted px-4 py-3 text-sm leading-relaxed text-foreground">
          {operation.publicNote}
        </p>
      )}
    </div>
  );
}
