"use client";

import { Check, CircleAlert } from "lucide-react";

import { formatDate } from "@/lib/portal/format";
import type { TimelineEvent } from "@/lib/portal/types";

function TimelineDot({ event }: { event: TimelineEvent }) {
  if (event.status === "Observado" && event.state === "current") {
    return (
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-[rgba(185,28,28,0.4)] bg-[rgba(185,28,28,0.1)]">
        <CircleAlert className="h-3.5 w-3.5 text-[#a02222]" aria-hidden />
      </span>
    );
  }
  if (event.state === "done") {
    return (
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]">
        <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} aria-hidden />
      </span>
    );
  }
  if (event.state === "current") {
    return (
      <span className="relative flex h-6 w-6 shrink-0 items-center justify-center">
        <span className="absolute h-6 w-6 animate-ping rounded-full bg-[rgba(22,50,79,0.25)] motion-reduce:animate-none" />
        <span className="relative h-4 w-4 rounded-full border-[3px] border-primary bg-card" />
      </span>
    );
  }
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center">
      <span className="h-3 w-3 rounded-full border-2 border-border bg-card" />
    </span>
  );
}

export function OperationTimeline({ timeline }: { timeline: TimelineEvent[] }) {
  return (
    <ol className="space-y-0">
      {timeline.map((event, index) => {
        const isLast = index === timeline.length - 1;
        const isCurrent = event.state === "current";
        return (
          <li key={`${event.status}-${index}`} className="relative flex gap-3.5">
            <div className="flex flex-col items-center">
              <TimelineDot event={event} />
              {!isLast && (
                <span
                  className={
                    event.state === "done"
                      ? "w-0.5 flex-1 bg-[rgba(47,143,131,0.35)]"
                      : "w-0.5 flex-1 bg-border"
                  }
                  aria-hidden
                />
              )}
            </div>
            <div className={isLast ? "pb-1" : "pb-6"}>
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <p
                  className={
                    isCurrent
                      ? "text-sm font-bold text-primary"
                      : event.state === "done"
                        ? "text-sm font-semibold text-foreground"
                        : "text-sm font-medium text-muted-foreground"
                  }
                >
                  {event.status}
                </p>
                {event.dateISO && event.state !== "pending" && (
                  <span className="font-mono text-[0.7rem] text-muted-foreground">
                    {formatDate(event.dateISO)}
                  </span>
                )}
              </div>
              <p
                className={
                  event.state === "pending"
                    ? "mt-0.5 text-[0.8rem] leading-relaxed text-muted-foreground/70"
                    : "mt-0.5 text-[0.8rem] leading-relaxed text-muted-foreground"
                }
              >
                {event.detail}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
