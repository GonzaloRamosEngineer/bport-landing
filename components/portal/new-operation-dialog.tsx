"use client";

import * as React from "react";
import { Loader2, Plus, Sparkles } from "lucide-react";

import { Dialog } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/portal/toast-context";
import { AUTOFILL_EXAMPLES, parseAutofillText } from "@/lib/portal/autofill";
import { portalCopy } from "@/lib/portal/copy";
import { fromDateInputValue, toDateInputValue } from "@/lib/portal/format";
import {
  OPERATION_STATUSES,
  OPERATION_TYPES,
  type NewOperationInput,
  type OperationStatus,
  type OperationType,
} from "@/lib/portal/types";
import { cn } from "@/lib/utils";

const copy = portalCopy.newOperation;

type FormState = {
  client: string;
  type: OperationType;
  origin: string;
  destination: string;
  reference: string;
  etaInput: string;
  status: OperationStatus;
  nextStep: string;
};

const emptyForm = (): FormState => ({
  client: "",
  type: "Importación marítima",
  origin: "",
  destination: "Montevideo, Uruguay",
  reference: "",
  etaInput: "",
  status: "Recibido",
  nextStep: "",
});

export function NewOperationDialog({
  open,
  onClose,
  suggestedCode,
  onCreate,
}: {
  open: boolean;
  onClose: () => void;
  suggestedCode: string;
  onCreate: (input: NewOperationInput) => void;
}) {
  const { showToast } = useToast();
  const [form, setForm] = React.useState<FormState>(emptyForm);
  const [autofillText, setAutofillText] = React.useState("");
  const [processing, setProcessing] = React.useState(false);
  const [highlighted, setHighlighted] = React.useState<Set<string>>(new Set());

  React.useEffect(() => {
    if (open) {
      setForm(emptyForm());
      setAutofillText("");
      setHighlighted(new Set());
      setProcessing(false);
    }
  }, [open]);

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((current) => ({ ...current, [key]: value }));

  const runAutofill = () => {
    if (!autofillText.trim()) {
      showToast(copy.autofillEmpty);
      return;
    }
    setProcessing(true);
    // Delay simulado: en la fase real este parseo lo hace un LLM server-side.
    window.setTimeout(() => {
      const parsed = parseAutofillText(autofillText);
      const touched = new Set<string>();
      setForm((current) => {
        const next = { ...current };
        if (parsed.client) { next.client = parsed.client; touched.add("client"); }
        if (parsed.type) { next.type = parsed.type; touched.add("type"); }
        if (parsed.origin) { next.origin = parsed.origin; touched.add("origin"); }
        if (parsed.destination) { next.destination = parsed.destination; touched.add("destination"); }
        if (parsed.reference) { next.reference = parsed.reference; touched.add("reference"); }
        if (parsed.etaISO) { next.etaInput = toDateInputValue(parsed.etaISO); touched.add("eta"); }
        if (parsed.status) { next.status = parsed.status; touched.add("status"); }
        if (parsed.nextStep) { next.nextStep = parsed.nextStep; touched.add("nextStep"); }
        return next;
      });
      setHighlighted(touched);
      setProcessing(false);
      showToast(copy.autofillDone);
      window.setTimeout(() => setHighlighted(new Set()), 2400);
    }, 900);
  };

  const highlight = (key: string) =>
    cn(
      "transition-shadow duration-500",
      highlighted.has(key) && "ring-2 ring-[var(--accent)] ring-offset-1",
    );

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.client.trim() || !form.origin.trim() || !form.destination.trim()) {
      showToast(copy.missingRequired);
      return;
    }
    onCreate({
      code: suggestedCode,
      client: form.client.trim(),
      type: form.type,
      origin: form.origin.trim(),
      destination: form.destination.trim(),
      reference: form.reference.trim() || "A confirmar",
      etaISO: form.etaInput
        ? fromDateInputValue(form.etaInput)
        : new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
      status: form.status,
      nextStep: form.nextStep.trim() || "Confirmar detalles de la operación.",
    });
  };

  return (
    <Dialog open={open} onClose={onClose} title={copy.title} className="sm:max-w-4xl">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        {/* Smart Autofill */}
        <div className="rounded-2xl border border-[rgba(47,143,131,0.3)] bg-[rgba(47,143,131,0.05)] p-4 sm:p-5">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[var(--accent)]" aria-hidden />
            <h3 className="font-display text-sm text-foreground">
              {copy.autofillTitle}
            </h3>
          </div>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
            {copy.autofillSubtitle}
          </p>
          <Textarea
            value={autofillText}
            onChange={(event) => setAutofillText(event.target.value)}
            placeholder={copy.autofillPlaceholder}
            rows={6}
            className="mt-3 bg-card"
          />
          <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
            <span className="text-xs text-muted-foreground">{copy.exampleLabel}</span>
            {AUTOFILL_EXAMPLES.map((example) => (
              <button
                key={example.label}
                type="button"
                onClick={() => setAutofillText(example.text)}
                className="rounded-full border border-border bg-card px-2.5 py-1 text-[0.7rem] font-medium text-primary transition-colors hover:border-primary/30 hover:bg-muted"
              >
                {example.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={runAutofill}
            disabled={processing}
            className="btn-primary mt-4 w-full !py-2.5 text-xs disabled:pointer-events-none disabled:opacity-70"
          >
            {processing ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                {copy.autofillProcessing}
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4" aria-hidden />
                {copy.autofillButton}
              </>
            )}
          </button>
        </div>

        {/* Formulario */}
        <form className="space-y-3.5" onSubmit={submit}>
          <h3 className="font-display text-sm text-foreground">{copy.formTitle}</h3>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="new-code">{copy.fieldCode}</Label>
              <Input id="new-code" value={suggestedCode} readOnly className="bg-muted font-mono" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="new-status">{copy.fieldStatus}</Label>
              <Select
                id="new-status"
                value={form.status}
                onChange={(event) => setField("status", event.target.value as OperationStatus)}
                className={highlight("status")}
              >
                {OPERATION_STATUSES.map((status) => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </Select>
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="new-client">{copy.fieldClient}</Label>
            <Input
              id="new-client"
              value={form.client}
              onChange={(event) => setField("client", event.target.value)}
              placeholder={copy.fieldClientPlaceholder}
              className={highlight("client")}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="new-type">{copy.fieldType}</Label>
              <Select
                id="new-type"
                value={form.type}
                onChange={(event) => setField("type", event.target.value as OperationType)}
                className={highlight("type")}
              >
                {OPERATION_TYPES.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="new-eta">{copy.fieldEta}</Label>
              <Input
                id="new-eta"
                type="date"
                value={form.etaInput}
                onChange={(event) => setField("etaInput", event.target.value)}
                className={highlight("eta")}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="new-origin">{copy.fieldOrigin}</Label>
              <Input
                id="new-origin"
                value={form.origin}
                onChange={(event) => setField("origin", event.target.value)}
                placeholder={copy.fieldOriginPlaceholder}
                className={highlight("origin")}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="new-destination">{copy.fieldDestination}</Label>
              <Input
                id="new-destination"
                value={form.destination}
                onChange={(event) => setField("destination", event.target.value)}
                placeholder={copy.fieldDestinationPlaceholder}
                className={highlight("destination")}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="new-reference">{copy.fieldReference}</Label>
            <Input
              id="new-reference"
              value={form.reference}
              onChange={(event) => setField("reference", event.target.value)}
              placeholder={copy.fieldReferencePlaceholder}
              className={cn("font-mono", highlight("reference"))}
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="new-next-step">{copy.fieldNextStep}</Label>
            <Input
              id="new-next-step"
              value={form.nextStep}
              onChange={(event) => setField("nextStep", event.target.value)}
              placeholder={copy.fieldNextStepPlaceholder}
              className={highlight("nextStep")}
            />
          </div>

          <div className="flex gap-2.5 pt-1">
            <button type="submit" className="btn-primary flex-1 !py-2.5 text-sm">
              <Plus className="h-4 w-4" aria-hidden />
              {copy.create}
            </button>
            <button type="button" onClick={onClose} className="btn-ghost !py-2.5 text-sm">
              {copy.cancel}
            </button>
          </div>
        </form>
      </div>
    </Dialog>
  );
}
