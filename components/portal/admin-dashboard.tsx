"use client";

import * as React from "react";
import { LogOut, Plus, RotateCcw } from "lucide-react";

import { KpiCards } from "@/components/portal/kpi-cards";
import { NewOperationDialog } from "@/components/portal/new-operation-dialog";
import { OperationEditor } from "@/components/portal/operation-editor";
import { OperationsTable } from "@/components/portal/operations-table";
import { useToast } from "@/components/portal/toast-context";
import { portalCopy } from "@/lib/portal/copy";
import { computeKpis, suggestNextCode } from "@/lib/portal/status";
import { usePortalOperations } from "@/lib/portal/use-portal-operations";
import type { NewOperationInput, OperationUpdate } from "@/lib/portal/types";

const copy = portalCopy.admin;

export function AdminDashboard({ onLogout }: { onLogout: () => void }) {
  const { showToast } = useToast();
  const {
    operations,
    isReady,
    updateOperation,
    createOperation,
    resetDemo,
  } = usePortalOperations();

  const [selectedCode, setSelectedCode] = React.useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const editorRef = React.useRef<HTMLDivElement>(null);

  const selected = operations.find((op) => op.code === selectedCode) ?? null;
  const kpis = React.useMemo(
    () => computeKpis(operations, new Date()),
    [operations],
  );

  const handleSelect = (code: string) => {
    setSelectedCode(code);
    // En mobile el editor queda debajo de la tabla: lo traemos a la vista.
    window.setTimeout(() => {
      if (window.innerWidth < 1024) {
        editorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 60);
  };

  const handleSave = (code: string, update: OperationUpdate) => {
    updateOperation(code, update);
    showToast(copy.editorSaved(code));
  };

  const handleCreate = (input: NewOperationInput) => {
    createOperation(input);
    setDialogOpen(false);
    setSelectedCode(input.code);
    showToast(portalCopy.newOperation.created(input.code));
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-xl">
          <span className="eyebrow">{copy.eyebrow}</span>
          <h1 className="font-display mt-2 text-2xl text-foreground sm:text-3xl">
            {copy.dashboardTitle}
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {copy.dashboardSubtitle}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setDialogOpen(true)}
            className="btn-primary !px-4 !py-2 text-xs"
          >
            <Plus className="h-4 w-4" aria-hidden />
            {copy.newOperation}
          </button>
          <button
            type="button"
            onClick={() => {
              resetDemo();
              setSelectedCode(null);
              showToast(copy.resetDone);
            }}
            className="btn-ghost !px-4 !py-2 text-xs"
            title={copy.resetDemo}
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden />
            <span className="hidden sm:inline">{copy.resetDemo}</span>
          </button>
          <button
            type="button"
            onClick={onLogout}
            className="btn-ghost !px-4 !py-2 text-xs"
            aria-label={copy.logout}
          >
            <LogOut className="h-3.5 w-3.5" aria-hidden />
            <span className="hidden sm:inline">{copy.logout}</span>
          </button>
        </div>
      </div>

      <div className="mt-7">
        <KpiCards kpis={kpis} />
      </div>

      <div className="mt-6 grid items-start gap-6 lg:grid-cols-[1.7fr_1fr]">
        <div className="card-elevated min-w-0 p-4 sm:p-6">
          <h2 className="font-display mb-4 text-base text-foreground">
            {copy.tableTitle}
          </h2>
          {isReady && (
            <OperationsTable
              operations={operations}
              selectedCode={selectedCode}
              onSelect={handleSelect}
            />
          )}
        </div>

        <div ref={editorRef} className="min-w-0 scroll-mt-24 lg:sticky lg:top-24">
          <div className="card-elevated p-5 sm:p-6">
            {selected ? (
              <OperationEditor operation={selected} onSave={handleSave} />
            ) : (
              <p className="py-6 text-center text-sm text-muted-foreground">
                Seleccioná una operación de la lista para actualizarla.
              </p>
            )}
          </div>
        </div>
      </div>

      <NewOperationDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        suggestedCode={suggestNextCode(operations)}
        onCreate={handleCreate}
      />
    </div>
  );
}
