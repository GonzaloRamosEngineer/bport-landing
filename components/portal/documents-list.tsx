import { Clock, FileText, Image as ImageIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { portalCopy } from "@/lib/portal/copy";
import type { DocumentItem } from "@/lib/portal/types";

export function DocumentsList({ documents }: { documents: DocumentItem[] }) {
  if (documents.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        Aún no hay documentos cargados.
      </p>
    );
  }
  return (
    <ul className="space-y-2.5">
      {documents.map((doc) => {
        const pending = doc.kind === "Pendiente";
        const Icon = pending ? Clock : doc.kind === "Imagen" ? ImageIcon : FileText;
        return (
          <li
            key={doc.name}
            className="flex items-center justify-between gap-3 rounded-xl border border-border bg-background px-3.5 py-2.5"
          >
            <span className="flex min-w-0 items-center gap-2.5">
              <Icon
                className={
                  pending
                    ? "h-4 w-4 shrink-0 text-[#8a5a14]"
                    : "h-4 w-4 shrink-0 text-primary"
                }
                aria-hidden
              />
              <span className="truncate text-sm font-medium text-foreground">
                {doc.name}
              </span>
            </span>
            {pending ? (
              <Badge variant="amber">{portalCopy.tracking.documentPending}</Badge>
            ) : (
              <Badge variant="outline">{doc.kind}</Badge>
            )}
          </li>
        );
      })}
    </ul>
  );
}
