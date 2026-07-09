import type { Metadata } from "next";
import { Suspense } from "react";

import { TrackingView } from "@/components/portal/tracking-view";

export const metadata: Metadata = {
  title: "Portal de seguimiento (demo)",
};

function TrackingFallback() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="h-64 max-w-2xl animate-pulse rounded-3xl bg-muted" />
    </div>
  );
}

export default function PortalPage() {
  return (
    <Suspense fallback={<TrackingFallback />}>
      <TrackingView />
    </Suspense>
  );
}
