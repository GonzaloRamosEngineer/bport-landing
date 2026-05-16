"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { useLanguage } from "@/components/i18n/language-context";
import { MotionItem, MotionSection } from "@/components/landing/motion";
import { LogisticsRoutesBackground } from "@/components/landing/visuals/logistics-routes-background";
import { usePrefersReducedMotion } from "@/lib/hooks/use-prefers-reduced-motion";

export function ProcessSection() {
  const { t } = useLanguage();
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <MotionSection
      id="proceso"
      className="relative overflow-hidden border-b border-border/50 bg-background py-24"
    >
      <LogisticsRoutesBackground />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionItem className="mb-16 max-w-3xl">
          <span className="eyebrow mb-4">{t.process.kicker}</span>
          <h2 className="text-3xl md:text-5xl font-display tracking-tight text-foreground mb-6">
            {t.process.title}
          </h2>
          <p className="text-foreground/80 text-lg sm:text-xl max-w-2xl">
            {t.process.subtitle}
          </p>
        </MotionItem>

        <div className="relative">
          {/* Route connector — desktop only */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-20 hidden h-px w-full lg:block"
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
          >
            <motion.line
              x1="2"
              y1="0.5"
              x2="98"
              y2="0.5"
              stroke="currentColor"
              strokeWidth="0.8"
              strokeDasharray="2 1.3"
              strokeLinecap="round"
              pathLength={1}
              className="text-primary/70"
              initial={{ pathLength: prefersReducedMotion ? 1 : 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { duration: 1.1, ease: [0.22, 1, 0.36, 1] }
              }
            />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.process.items.map((item, i) => (
              <MotionItem
                key={i}
                className="group relative p-8 rounded-2xl bg-card border border-border/60 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl"
              >
                <div className="text-6xl font-display text-foreground/10 font-bold mb-6 group-hover:text-primary/25 transition-colors">
                  {item.step}
                </div>
                <h3 className="text-xl font-medium text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{item.description}</p>
                <div className="absolute top-8 right-8 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </MotionItem>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom atmospheric fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-b from-transparent to-background"
      />
    </MotionSection>
  );
}
