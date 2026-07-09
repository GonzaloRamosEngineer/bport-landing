import type { Metadata } from "next";

import { AdminView } from "@/components/portal/admin-view";

export const metadata: Metadata = {
  title: "Panel de operaciones (demo)",
  robots: { index: false, follow: false },
};

export default function PortalAdminPage() {
  return <AdminView />;
}
