import { MessageCircle, Zap } from "lucide-react";

import { getWhatsAppUrl } from "@/lib/site";
import { portalCopy } from "@/lib/portal/copy";

const copy = portalCopy.tracking;

export function NextStepCard({
  code,
  nextStep,
}: {
  code: string;
  nextStep: string;
}) {
  return (
    <div className="dark-feature !rounded-3xl !p-6">
      <div className="flex items-center gap-2.5">
        <Zap className="h-4.5 w-4.5 text-[var(--accent)]" aria-hidden />
        <h3 className="font-display text-base text-white">{copy.nextStepTitle}</h3>
      </div>
      <p className="mt-2.5 text-sm leading-relaxed text-white/80">{nextStep}</p>
      <a
        href={getWhatsAppUrl("es", copy.whatsappMessage(code))}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary mt-5 w-full !py-2.5 text-xs"
      >
        <MessageCircle className="h-4 w-4" aria-hidden />
        {copy.whatsappCta}
      </a>
    </div>
  );
}
