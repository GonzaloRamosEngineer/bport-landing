"use client";

import { Globe } from "lucide-react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/translations";
import { useLanguage } from "@/components/i18n/language-context";

const options: { value: Locale; label: string }[] = [
  { value: "es", label: "ES" },
  { value: "en", label: "EN" },
];

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 p-0.5 shadow-sm",
        className,
      )}
      role="group"
      aria-label={
        locale === "es" ? "Seleccionar idioma" : "Select language"
      }
    >
      <span className="pl-2 text-muted-foreground" aria-hidden>
        <Globe className="size-3.5 shrink-0" />
      </span>
      {options.map(({ value, label }) => {
        const active = locale === value;
        return (
          <motion.button
            key={value}
            type="button"
            onClick={() => setLocale(value)}
            className={cn(
              "relative z-10 min-w-[2.25rem] rounded-full px-2 py-1 text-[11px] font-semibold tracking-wide transition-colors",
              active
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
            aria-pressed={active}
            aria-label={
              value === "es" ? "Español" : "English"
            }
          >
            {active ? (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 rounded-full bg-primary shadow-sm"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            ) : null}
            <span className="relative">{label}</span>
          </motion.button>
        );
      })}
    </div>
  );
}
