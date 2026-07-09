import type { Metadata } from "next";

import { PortalShell } from "@/components/portal/portal-shell";
import { ToastProvider } from "@/components/portal/toast-context";

export const metadata: Metadata = {
  title: {
    default: "Portal de seguimiento (demo) | BPORT Logistics",
    template: "%s | BPORT Logistics",
  },
  description:
    "Demostración del portal de seguimiento de operaciones de BPORT Logistics. Datos de ejemplo.",
  // Demo con datos ficticios: fuera de los índices hasta la fase real.
  robots: { index: false, follow: false },
};

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ToastProvider>
      <PortalShell>{children}</PortalShell>
    </ToastProvider>
  );
}
