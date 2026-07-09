import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";

import { portalCopy } from "@/lib/portal/copy";

const copy = portalCopy.shell;

export function PortalShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <Link href="/" className="shrink-0">
              <Image
                src="/bport-logo.png"
                alt="BPORT Logistics"
                width={140}
                height={48}
                className="h-8 w-auto object-contain sm:h-9"
                priority
              />
            </Link>
            <span className="stat-chip !border-[rgba(180,110,30,0.3)] !bg-[rgba(212,150,60,0.12)] !text-[#8a5a14]">
              {copy.demoBadge}
            </span>
          </div>
          <Link
            href="/"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            <span className="hidden sm:inline">{copy.backToSite}</span>
          </Link>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <p className="text-xs text-muted-foreground">{copy.footerNote}</p>
          <Link
            href="/portal/admin"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground/70 transition-colors hover:text-primary"
          >
            <Lock className="h-3.5 w-3.5" aria-hidden />
            {copy.adminAccess}
          </Link>
        </div>
      </footer>
    </div>
  );
}
