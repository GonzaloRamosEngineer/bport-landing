import type { Locale } from "@/lib/translations";
import { translations } from "@/lib/translations";

/** Reemplazá el número por el WhatsApp corporativo (código país + número sin +). */
const WHATSAPP_PHONE = "59892330925";

export function getWhatsAppUrl(locale: Locale, customMessage?: string): string {
  const text = customMessage || translations[locale].whatsappPrefill;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}
