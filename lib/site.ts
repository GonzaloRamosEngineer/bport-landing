import type { Locale } from "@/lib/translations";
import { translations } from "@/lib/translations";

/** Reemplazá el número por el WhatsApp corporativo (código país + número sin +). */
const WHATSAPP_PHONE = "59892330925";

export function getWhatsAppUrl(locale: Locale): string {
  const text = translations[locale].whatsappPrefill;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}
