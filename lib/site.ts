import type { Locale } from "@/lib/translations";
import { translations } from "@/lib/translations";

/** Reemplazá el número por el WhatsApp corporativo (código país + número sin +). */
const WHATSAPP_PHONE = "59892330925";

export function getWhatsAppUrl(locale: Locale, customMessage?: string): string {
  const text = customMessage || translations[locale].whatsappPrefill;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

/** Embed src del mapa de Google "Mi Negocio" de BPORT Logistics. */
export const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.171600876026!2d-56.1815785!3d-34.9021429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8536d03bdfc5ff41%3A0x61efc6d0506390a6!2sBPORT%20LOGISTICS!5e0!3m2!1ses-419!2suy!4v1778973243434!5m2!1ses-419!2suy";

/**
 * Shortlink oficial del listing de BPORT en Google Maps.
 * Apunta al lugar correcto (Minas 1543/502 comparte edificio con otros comercios,
 * un link por coords podría desambiguar mal). Desde acá Maps ofrece "Direcciones".
 */
export const GOOGLE_MAPS_DIRECTIONS_URL =
  "https://maps.app.goo.gl/iyt3FGK89qad6aDK9";

/** Shortlink al perfil/listing de BPORT en Google Maps (no "cómo llegar"). */
export const GOOGLE_MAPS_PROFILE_URL =
  "https://maps.app.goo.gl/5d2K1NfQ7CUBeyvN7";

export type ClientLogo = {
  name: string;
  src: string;
  /** Canvas original del SVG. Default 480×160 (proporción 3:1). */
  width?: number;
  height?: number;
};

export const CLIENT_LOGOS: ClientLogo[] = [
  { name: "Craft", src: "/cliente_craft.svg" },
  // { name: "POV", src: "/cliente_pov.svg" },
];

/**
 * Densidad visual del marquee: con pocos logos, repetimos la lista base
 * antes de duplicarla para el loop. Con 8+ logos, repeat = 1.
 *   2 logos → repeat 4 → 8 slots por copia
 *   4 logos → repeat 2 → 8 slots por copia
 *   8 logos → repeat 1 → 8 slots por copia
 */
export const getMarqueeRepeatCount = (n: number): number =>
  Math.max(1, Math.ceil(8 / Math.max(n, 1)));
