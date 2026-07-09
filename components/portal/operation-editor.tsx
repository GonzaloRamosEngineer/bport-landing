"use client";

import * as React from "react";
import { ExternalLink, Save } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { portalCopy } from "@/lib/portal/copy";
import {
  OPERATION_STATUSES,
  type Operation,
  type OperationStatus,
  type OperationUpdate,
} from "@/lib/portal/types";

const copy = portalCopy.admin;

export function OperationEditor({
  operation,
  onSave,
}: {
  operation: Operation;
  onSave: (code: string, update: OperationUpdate) => void;
}) {
  const [status, setStatus] = React.useState<OperationStatus>(operation.status);
  const [publicNote, setPublicNote] = React.useState("");
  const [nextStep, setNextStep] = React.useState(operation.nextStep);

  React.useEffect(() => {
    setStatus(operation.status);
    setPublicNote("");
    setNextStep(operation.nextStep);
  }, [operation]);

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        onSave(operation.code, { status, publicNote, nextStep });
      }}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-display text-base text-foreground">
          {copy.editorTitle(operation.code)}
        </h3>
        <a
          href={`/portal?tramite=${encodeURIComponent(operation.code)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          {copy.viewAsClient}
        </a>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="editor-status">{copy.editorStatus}</Label>
        <Select
          id="editor-status"
          value={status}
          onChange={(event) => setStatus(event.target.value as OperationStatus)}
        >
          {OPERATION_STATUSES.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="editor-note">{copy.editorNote}</Label>
        <Textarea
          id="editor-note"
          value={publicNote}
          onChange={(event) => setPublicNote(event.target.value)}
          placeholder={copy.editorNotePlaceholder}
          rows={3}
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="editor-next-step">{copy.editorNextStep}</Label>
        <Input
          id="editor-next-step"
          value={nextStep}
          onChange={(event) => setNextStep(event.target.value)}
          placeholder={copy.editorNextStepPlaceholder}
        />
      </div>

      <button type="submit" className="btn-primary w-full !py-2.5 text-sm">
        <Save className="h-4 w-4" aria-hidden />
        {copy.editorSave}
      </button>
    </form>
  );
}
