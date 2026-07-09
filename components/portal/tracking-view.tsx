"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { PackageSearch } from "lucide-react";

import { DocumentsList } from "@/components/portal/documents-list";
import { NextStepCard } from "@/components/portal/next-step-card";
import { OperationSummary } from "@/components/portal/operation-summary";
import { OperationTimeline } from "@/components/portal/operation-timeline";
import { TrackingSearch } from "@/components/portal/tracking-search";
import { portalCopy } from "@/lib/portal/copy";
import { normalizeCode } from "@/lib/portal/status";
import { usePortalOperations } from "@/lib/portal/use-portal-operations";

const copy = portalCopy.tracking;

export function TrackingView() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isReady, getByCode } = usePortalOperations();
  const [searchedCode, setSearchedCode] = React.useState<string | null>(null);

  // Deep-link: /portal?tramite=BP-1234
  React.useEffect(() => {
    const fromUrl = searchParams.get("tramite");
    if (fromUrl) setSearchedCode(normalizeCode(fromUrl));
  }, [searchParams]);

  const handleSearch = (raw: string) => {
    const code = normalizeCode(raw);
    setSearchedCode(code);
    router.replace(`/portal?tramite=${encodeURIComponent(code)}`, { scroll: false });
  };

  const operation = searchedCode && isReady ? getByCode(searchedCode) : undefined;
  const notFound = Boolean(searchedCode) && isReady && !operation;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="max-w-2xl">
        <span className="eyebrow">{copy.eyebrow}</span>
        <h1 className="font-display mt-3 text-3xl text-foreground sm:text-4xl">
          {copy.title}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {copy.subtitle}
        </p>
      </div>

      <div className="mt-7 max-w-2xl">
        <TrackingSearch
          initialValue={searchedCode ?? undefined}
          onSearch={handleSearch}
        />
      </div>

      {notFound && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="card-elevated mt-8 flex max-w-2xl items-start gap-4 p-6"
        >
          <span className="icon-box shrink-0">
            <PackageSearch className="h-5 w-5" aria-hidden />
          </span>
          <div>
            <h2 className="font-display text-base text-foreground">
              {copy.notFoundTitle}
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {copy.notFoundBody}
            </p>
          </div>
        </motion.div>
      )}

      {operation && (
        <motion.div
          key={operation.code}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mt-8 grid gap-6 lg:grid-cols-[1.6fr_1fr]"
        >
          <div className="min-w-0 space-y-6">
            <OperationSummary operation={operation} />
            <div className="card-elevated p-5 sm:p-7">
              <h3 className="font-display mb-5 text-base text-foreground">
                {copy.timelineTitle}
              </h3>
              <OperationTimeline timeline={operation.timeline} />
            </div>
          </div>

          <div className="min-w-0 space-y-6 lg:sticky lg:top-24 lg:self-start">
            <NextStepCard code={operation.code} nextStep={operation.nextStep} />
            <div className="card-elevated p-5 sm:p-6">
              <h3 className="font-display mb-4 text-base text-foreground">
                {copy.documentsTitle}
              </h3>
              <DocumentsList documents={operation.documents} />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
