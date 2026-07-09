import { MapPin, Navigation } from "lucide-react";

export function RouteVisual({
  origin,
  destination,
}: {
  origin: string;
  destination: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex min-w-0 items-center gap-2">
        <span className="icon-box !h-9 !w-9 shrink-0">
          <MapPin className="h-4 w-4" aria-hidden />
        </span>
        <div className="min-w-0">
          <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground">
            Origen
          </p>
          <p className="truncate text-sm font-semibold text-foreground">{origin}</p>
        </div>
      </div>

      <div
        className="h-0.5 min-w-6 flex-1 rounded-full bg-gradient-to-r from-[var(--primary)] via-[var(--accent-magenta)] to-[var(--accent)]"
        aria-hidden
      />

      <div className="flex min-w-0 items-center gap-2">
        <span className="icon-box !h-9 !w-9 shrink-0">
          <Navigation className="h-4 w-4" aria-hidden />
        </span>
        <div className="min-w-0">
          <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground">
            Destino
          </p>
          <p className="truncate text-sm font-semibold text-foreground">{destination}</p>
        </div>
      </div>
    </div>
  );
}
