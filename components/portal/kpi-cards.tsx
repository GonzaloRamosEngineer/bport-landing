import { CalendarClock, FileWarning, Landmark, PackageCheck } from "lucide-react";

import { portalCopy } from "@/lib/portal/copy";
import type { PortalKpis } from "@/lib/portal/status";

const copy = portalCopy.admin;

export function KpiCards({ kpis }: { kpis: PortalKpis }) {
  const items = [
    { label: copy.kpiActive, value: kpis.active, Icon: PackageCheck },
    { label: copy.kpiInCustoms, value: kpis.inCustoms, Icon: Landmark },
    { label: copy.kpiPendingDocs, value: kpis.pendingDocs, Icon: FileWarning },
    { label: copy.kpiEtaSoon, value: kpis.etaWithin7Days, Icon: CalendarClock },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {items.map(({ label, value, Icon }) => (
        <div key={label} className="card-elevated flex items-center gap-3.5 p-4">
          <span className="icon-box !h-10 !w-10 shrink-0">
            <Icon className="h-4.5 w-4.5" aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="font-display text-2xl leading-none text-foreground">
              {value}
            </p>
            <p className="mt-1 truncate text-xs font-medium text-muted-foreground">
              {label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
