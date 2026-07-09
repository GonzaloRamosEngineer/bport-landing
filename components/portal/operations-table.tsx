"use client";

import { Pencil } from "lucide-react";

import { StatusBadge } from "@/components/portal/status-badge";
import { formatDate } from "@/lib/portal/format";
import { portalCopy } from "@/lib/portal/copy";
import { cn } from "@/lib/utils";
import type { Operation } from "@/lib/portal/types";

const copy = portalCopy.admin;

export function OperationsTable({
  operations,
  selectedCode,
  onSelect,
}: {
  operations: Operation[];
  selectedCode: string | null;
  onSelect: (code: string) => void;
}) {
  return (
    <>
      {/* Desktop */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
              <th className="px-3 py-2.5 font-semibold">{copy.tableCode}</th>
              <th className="px-3 py-2.5 font-semibold">{copy.tableClient}</th>
              <th className="px-3 py-2.5 font-semibold">{copy.tableStatus}</th>
              <th className="px-3 py-2.5 font-semibold">{copy.tableEta}</th>
              <th className="px-3 py-2.5 text-right font-semibold">
                {copy.tableAction}
              </th>
            </tr>
          </thead>
          <tbody>
            {operations.map((op) => (
              <tr
                key={op.code}
                className={cn(
                  "cursor-pointer border-b border-border/60 transition-colors hover:bg-muted/60",
                  selectedCode === op.code && "bg-[rgba(22,50,79,0.05)]",
                )}
                onClick={() => onSelect(op.code)}
              >
                <td className="px-3 py-3 font-mono font-semibold text-primary">
                  {op.code}
                </td>
                <td className="px-3 py-3 text-foreground">{op.client}</td>
                <td className="px-3 py-3">
                  <StatusBadge status={op.status} />
                </td>
                <td className="px-3 py-3 text-muted-foreground">
                  {formatDate(op.etaISO)}
                </td>
                <td className="px-3 py-3 text-right">
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      onSelect(op.code);
                    }}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:border-primary/30 hover:bg-muted"
                  >
                    <Pencil className="h-3.5 w-3.5" aria-hidden />
                    {copy.edit}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile */}
      <ul className="space-y-2.5 md:hidden">
        {operations.map((op) => (
          <li key={op.code}>
            <button
              type="button"
              onClick={() => onSelect(op.code)}
              className={cn(
                "w-full rounded-xl border border-border bg-background p-3.5 text-left transition-colors",
                selectedCode === op.code
                  ? "border-primary/40 bg-[rgba(22,50,79,0.05)]"
                  : "hover:bg-muted/60",
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-sm font-bold text-primary">
                  {op.code}
                </span>
                <StatusBadge status={op.status} />
              </div>
              <p className="mt-1.5 truncate text-sm font-medium text-foreground">
                {op.client}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {copy.tableEta}: {formatDate(op.etaISO)} · {op.type}
              </p>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
