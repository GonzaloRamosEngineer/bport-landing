"use client";

import * as React from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { SAMPLE_CODES } from "@/lib/portal/demo-data";
import { portalCopy } from "@/lib/portal/copy";

const copy = portalCopy.tracking;

export function TrackingSearch({
  initialValue,
  onSearch,
}: {
  initialValue?: string;
  onSearch: (code: string) => void;
}) {
  const [value, setValue] = React.useState(initialValue ?? "");

  React.useEffect(() => {
    if (initialValue) setValue(initialValue);
  }, [initialValue]);

  const submit = (code: string) => {
    const trimmed = code.trim();
    if (!trimmed) return;
    onSearch(trimmed);
  };

  return (
    <div className="card-elevated p-5 sm:p-6">
      <form
        className="flex flex-col gap-3 sm:flex-row"
        onSubmit={(event) => {
          event.preventDefault();
          submit(value);
        }}
      >
        <div className="relative flex-1">
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden
          />
          <Input
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder={copy.searchPlaceholder}
            aria-label={copy.searchLabel}
            className="h-11 pl-10 font-mono uppercase placeholder:font-sans placeholder:normal-case"
            autoCapitalize="characters"
            autoCorrect="off"
            spellCheck={false}
          />
        </div>
        <button type="submit" className="btn-primary !py-2.5 text-sm sm:shrink-0">
          {copy.searchButton}
        </button>
      </form>

      <div className="mt-3.5 flex flex-wrap items-center gap-2">
        <span className="text-xs text-muted-foreground">{copy.tryWith}</span>
        {SAMPLE_CODES.map((code) => (
          <button
            key={code}
            type="button"
            onClick={() => {
              setValue(code);
              submit(code);
            }}
            className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs font-medium text-primary transition-colors hover:border-primary/30 hover:bg-muted"
          >
            {code}
          </button>
        ))}
      </div>
    </div>
  );
}
