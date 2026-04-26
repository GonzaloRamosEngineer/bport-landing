"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  FileCheck,
  Globe2,
  MapPin,
  Package,
  Star,
  CheckCircle2,
} from "lucide-react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MotionItem, MotionSection } from "@/components/landing/motion";
import { WhatsAppFab } from "@/components/landing/whatsapp-fab";
import { LanguageProvider, useLanguage } from "@/components/i18n/language-context";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { getWhatsAppUrl } from "@/lib/site";
import { ReactLenis } from "lenis/react";
const SERVICE_ICONS = [Package, Globe2, FileCheck, Building2] as const;
const REVIEW_RATINGS = [5, 5, 5] as const;

const fadeEase = [0.22, 1, 0.36, 1] as const;

const stagger = {
  container: {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  },
  item: {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: fadeEase } },
  },
};




/* ─── Hero ────────────────────────────────────────────────────────── */
function LogisticsRoutesBackground() {
  const routes = [
    { id: 1, d: "M-100,150 L300,150 Q350,150 350,200 L350,600 Q350,650 400,650 L1540,650", duration: 15, delay: 0, color: "#d42f7a" },
    { id: 2, d: "M1540,250 L1100,250 Q1050,250 1050,300 L1050,550 Q1050,600 1000,600 L-100,600", duration: 18, delay: 2, color: "#2f8f83" },
    { id: 3, d: "M200,900 L200,500 Q200,450 250,450 L800,450 Q850,450 850,400 L850,-100", duration: 12, delay: 1, color: "#e0603a" },
    { id: 4, d: "M1200,-100 L1200,350 Q1200,400 1250,400 L1540,400", duration: 8, delay: 3, color: "#16324f" },
    { id: 5, d: "M-100,750 L600,750 Q650,750 650,700 L650,-100", duration: 14, delay: 0.5, color: "#d42f7a" }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <svg className="w-full h-full opacity-40" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
        {routes.map((r) => (
          <g key={r.id}>
            {/* Base Track */}
            <path
              d={r.d}
              stroke="currentColor"
              className="text-muted-foreground/20"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Moving Cargo (Pulse) */}
            <motion.path
              d={r.d}
              stroke={r.color}
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength={100}
              strokeDasharray="6 100"
              initial={{ strokeDashoffset: 106 }}
              animate={{ strokeDashoffset: -6 }}
              transition={{
                duration: r.duration,
                repeat: Infinity,
                ease: "linear",
                delay: r.delay,
              }}
            />
          </g>
        ))}
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
    </div>
  );
}

function HeroSection() {
  const { t, locale } = useLanguage();
  const { scrollY } = useScroll();
  const parallax1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const parallax2 = useTransform(scrollY, [0, 1000], [0, -150]);

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center justify-center border-b border-border/60">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          src="/VideoPresentacion.mov"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#0d0d12]/60" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-24 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          variants={stagger.container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          {/* Trust badge */}
          <motion.div variants={stagger.item} className="mb-6 inline-flex">
            <span className="stat-chip bg-white/10 text-white border-white/20 backdrop-blur-md">
              {t.hero.trustBadge}
            </span>
          </motion.div>

          {/* Eyebrow */}
          <motion.p variants={stagger.item} className="eyebrow mb-5 text-white/90 justify-center">
            {t.hero.eyebrow}
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={stagger.item}
            className="font-display text-balance text-5xl tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[1.05]"
          >
            {t.hero.title}{" "}
            <span className="text-gradient block">{t.hero.titleHighlight}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={stagger.item}
            className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={stagger.item}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
          >
            <motion.a
              href={getWhatsAppUrl(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm shadow-xl shadow-primary/20"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              {t.hero.ctaWhatsApp}
              <ArrowRight className="size-4 ml-2" aria-hidden />
            </motion.a>
            <a href="#proceso" className="btn-ghost text-white border-white/30 hover:bg-white/10 hover:text-white text-sm backdrop-blur-sm">
              {t.hero.ctaServices}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"
        aria-hidden
      />
    </section>
  );
}

/* ─── About ───────────────────────────────────────────────────────── */
function AboutSection() {
  const { t } = useLanguage();

  return (
    <MotionSection
      id="nosotros"
      className="mx-auto max-w-6xl scroll-mt-24 px-4 py-(--section-py) sm:px-6 lg:px-8"
    >
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        {/* Left: copy */}
        <MotionItem>
          <p className="eyebrow">{t.about.kicker}</p>
          <h2 className="font-display mt-5 text-3xl tracking-tight text-foreground sm:text-4xl">
            {t.about.title}
          </h2>
          <div className="section-divider" />
          <p className="mt-7 max-w-prose text-pretty leading-relaxed text-muted-foreground">
            {t.about.lineBeforeHighlight}
            <span className="font-semibold text-foreground">
              {t.about.highlight}
            </span>
            {t.about.lineAfterHighlight}
          </p>
          <ul className="mt-8 space-y-4">
            {[t.about.bullet1, t.about.bullet2].map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <CheckCircle2
                  className="mt-0.5 size-4 shrink-0 text-primary"
                  aria-hidden
                />
                {b}
              </li>
            ))}
          </ul>
        </MotionItem>

        {/* Right: stat card */}
        <MotionItem>
          <div
            className="relative overflow-hidden rounded-2xl border border-border bg-card p-10 shadow-sm"
            style={{
              background:
                "linear-gradient(135deg, rgba(22, 50, 79,0.04) 0%, rgba(255,255,255,1) 50%, rgba(47, 143, 131,0.04) 100%)",
            }}
          >
            {/* Decorative arc */}
            <div
              className="pointer-events-none absolute -right-12 -top-12 size-48 rounded-full opacity-10"
              aria-hidden
              style={{
                background:
                  "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
              }}
            />
            <div
              className="pointer-events-none absolute -bottom-8 -left-8 size-36 rounded-full opacity-8"
              aria-hidden
              style={{
                background:
                  "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
              }}
            />

            <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-12">
              <div className="text-center sm:text-left">
                <p
                  className="font-display text-7xl font-bold tabular-nums text-gradient sm:text-8xl"
                  aria-label={t.about.statValue + " " + t.about.statLabel}
                >
                  {t.about.statValue}
                </p>
                <p className="mt-2 text-sm font-medium text-muted-foreground">
                  {t.about.statLabel}
                </p>
              </div>
              <div className="h-px w-full bg-border sm:h-16 sm:w-px" aria-hidden />
              <div className="text-center sm:text-left">
                <p className="font-display text-5xl font-bold text-foreground sm:text-6xl">
                  2000
                </p>
                <p className="mt-2 text-sm font-medium text-muted-foreground">
                  {t.about.yearLabel}
                </p>
              </div>
            </div>
          </div>
        </MotionItem>
      </div>
    </MotionSection>
  );
}

/* ─── Services ────────────────────────────────────────────────────── */
function ServicesSection() {
  const { t, locale } = useLanguage();

  return (
    <MotionSection
      id="servicios"
      className="border-y border-border/80"
      style={{ background: "var(--muted)" }}
    >
      <div className="mx-auto max-w-6xl px-4 py-(--section-py) sm:px-6 lg:px-8">
        <MotionItem className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">{t.services.kicker}</p>
          <h2 className="font-display mt-5 text-3xl tracking-tight text-foreground sm:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            {t.services.subtitle}
          </p>
        </MotionItem>

        <motion.div
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          variants={stagger.container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {t.services.items.map((s, i) => {
            const Icon = SERVICE_ICONS[i];
            const indexFormatted = String(i + 1).padStart(2, "0");
            return (
              <motion.div
                key={`${locale}-svc-${i}`}
                variants={stagger.item}
                className="card-elevated group relative overflow-hidden p-6"
              >
                {/* Numeric Watermark */}
                <div className="absolute -top-4 -right-2 font-display text-8xl text-primary/5 pointer-events-none select-none transition-all duration-500 group-hover:scale-110 group-hover:text-primary/10">
                  {indexFormatted}
                </div>

                <div className="relative z-10 flex flex-col gap-5 h-full">
                  <div className="icon-box">
                    <Icon className="size-5 stroke-[1.5]" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </MotionSection>
  );
}

/* ─── Reviews ─────────────────────────────────────────────────────── */
function ReviewsSection() {
  const { t, locale } = useLanguage();

  return (
    <MotionSection id="resenas" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-(--section-py) sm:px-6 lg:px-8">
        <MotionItem className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">{t.reviews.kicker}</p>
          <h2 className="font-display mt-5 text-3xl tracking-tight text-foreground sm:text-4xl">
            {t.reviews.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{t.reviews.subtitle}</p>
        </MotionItem>

        <motion.div
          className="mt-12 grid gap-5 md:grid-cols-3"
          variants={stagger.container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {t.reviews.items.map((r, i) => {
            const rating = REVIEW_RATINGS[i];
            return (
              <motion.div
                key={`${locale}-rev-${i}`}
                variants={stagger.item}
                className="card-elevated flex flex-col gap-0 overflow-hidden p-6"
              >
                {/* Quote mark */}
                <div className="review-quote-mark leading-none">&quot;</div>

                {/* Stars + badge */}
                <div className="mt-1 flex items-center justify-between gap-2">
                  <div
                    className="flex gap-0.5"
                    aria-label={t.reviews.starsAria(rating)}
                  >
                    {Array.from({ length: rating }).map((_, si) => (
                      <Star
                        key={si}
                        className="size-3.5 fill-amber-400 text-amber-400"
                        aria-hidden
                      />
                    ))}
                  </div>
                  <span
                    className="rounded-full border border-border bg-muted/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    {t.reviews.googleBadge}
                  </span>
                </div>

                {/* Quote text */}
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                  {r.quote}
                </blockquote>

                {/* Author */}
                <div className="mt-6 border-t border-border pt-4">
                  <p className="font-display text-sm font-semibold text-foreground">
                    {r.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <MotionItem className="mt-10 text-center">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            {t.reviews.viewMaps}
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </MotionItem>
      </div>
    </MotionSection>
  );
}

/* ─── Contact ─────────────────────────────────────────────────────── */
function ContactSection() {
  const { t, locale } = useLanguage();

  return (
    <MotionSection
      id="contacto"
      className="border-t border-border/80 scroll-mt-24"
      style={{ background: "var(--muted)" }}
    >
      <div className="mx-auto max-w-6xl px-4 py-(--section-py) sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left: info */}
          <MotionItem>
            <p className="eyebrow">{t.contact.kicker}</p>
            <h2 className="font-display mt-5 text-3xl tracking-tight text-foreground sm:text-4xl">
              {t.contact.title}
            </h2>
            <div className="section-divider" />
            <p className="mt-7 max-w-prose text-pretty text-muted-foreground">
              {t.contact.subtitle}
            </p>

            <div className="mt-9 space-y-5 text-sm">
              <div className="flex items-start gap-4">
                <div className="icon-box mt-0.5 size-9">
                  <MapPin className="size-4 stroke-[1.5]" aria-hidden />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {t.contact.officeLabel}
                  </p>
                  <p className="mt-0.5 text-muted-foreground">
                    {t.contact.officeAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="icon-box mt-0.5 size-9">
                  <span className="text-xs font-bold text-primary">@</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {t.contact.emailLabel}
                  </p>
                  <a
                    href="mailto:info@bportlogistics.com"
                    className="mt-0.5 text-primary underline-offset-4 hover:underline"
                  >
                    info@bportlogistics.com
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp shortcut */}
            <div className="mt-10">
              <a
                href={getWhatsAppUrl(locale)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex text-sm"
                style={{ maxWidth: "fit-content" }}
              >
                {t.hero.ctaWhatsApp}
                <ArrowRight className="size-4" aria-hidden />
              </a>
            </div>
          </MotionItem>

          {/* Right: form */}
          <MotionItem>
            <div className="card-elevated p-7 sm:p-8">
              <h3 className="font-display text-lg font-semibold text-foreground">
                {t.contact.formTitle}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {t.contact.formDescription}
              </p>

              <form
                className="mt-7 space-y-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                  >
                    {t.contact.labelName}
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder={t.contact.placeholderName}
                    className="rounded-xl border-border bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                  >
                    {t.contact.labelEmail}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={t.contact.placeholderEmail}
                    className="rounded-xl border-border bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                  >
                    {t.contact.labelMessage}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder={t.contact.placeholderMessage}
                    className="min-h-[120px] resize-none rounded-xl border-border bg-background"
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center sm:w-auto">
                  {t.contact.submit}
                  <ArrowRight className="size-4" aria-hidden />
                </button>
              </form>
            </div>
          </MotionItem>
        </div>
      </div>
    </MotionSection>
  );
}

/* ─── Footer ──────────────────────────────────────────────────────── */
function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-border/40"
      style={{ background: "#0d0d12", color: "#a1a09e" }}
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="/bport-logo.png"
              alt=""
              width={120}
              height={40}
              className="h-8 w-auto object-contain brightness-0 invert opacity-80"
            />
            <p className="text-sm leading-relaxed" style={{ color: "#6b6966" }}>
              {t.footer.tagline}
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation" className="flex flex-col gap-2 text-sm">
            {[
              ["#nosotros", t.nav.about],
              ["#servicios", t.nav.services],
              ["#resenas", t.nav.reviews],
              ["#contacto", t.nav.contact],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="transition-colors hover:text-white"
                style={{ color: "#a1a09e" }}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <div className="space-y-2 text-sm" style={{ color: "#6b6966" }}>
            <p>Minas 1543/502</p>
            <p>Montevideo, Uruguay</p>
            <a
              href="mailto:info@bportlogistics.com"
              className="block transition-colors hover:text-white"
              style={{ color: "#a1a09e" }}
            >
              info@bportlogistics.com
            </a>
            <a
              href="https://bportlogistics.com"
              className="block transition-colors hover:text-white"
              style={{ color: "#a1a09e" }}
            >
              bportlogistics.com
            </a>
          </div>
        </div>

        <div
          className="mt-12 border-t pt-8 text-xs"
          style={{ borderColor: "#1f1e1c", color: "#4a4845" }}
        >
          {t.footer.rights(year)}
        </div>
      </div>
    </footer>
  );
}

/* ─── Header ──────────────────────────────────────────────────────── */
function Header() {
  const { t, locale } = useLanguage();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-3.5">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <Image
              src="/bport-logo.png"
              alt={t.logoAlt}
              width={140}
              height={48}
              className="h-8 w-auto object-contain sm:h-9"
              priority
            />
          </Link>

          <div className="flex flex-1 items-center justify-end gap-3 md:gap-5">
            <nav
              className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex"
              aria-label={t.nav.primary}
            >
              {[
                ["#nosotros", t.nav.about],
                ["#servicios", t.nav.services],
                ["#proceso", t.nav.process],
                ["#paraquien", t.nav.forWhom],
                ["#resenas", t.nav.reviews],
                ["#contacto", t.nav.contact],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="relative transition-colors hover:text-foreground after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
                >
                  {label}
                </a>
              ))}
            </nav>

            <LanguageSwitcher className="shrink-0" />

            <a
              href={getWhatsAppUrl(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden shrink-0 text-xs sm:inline-flex"
              style={{ padding: "0.5rem 1.125rem" }}
            >
              {t.nav.whatsapp}
            </a>
          </div>
        </div>

        {/* Mobile nav pills */}
        <nav
          className="-mx-1 flex gap-1.5 overflow-x-auto pb-3 md:hidden"
          aria-label={t.nav.sections}
        >
          {[
            ["#nosotros", t.nav.about],
            ["#servicios", t.nav.services],
            ["#proceso", t.nav.process],
            ["#paraquien", t.nav.forWhom],
            ["#resenas", t.nav.reviews],
            ["#contacto", t.nav.contact],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="shrink-0 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:bg-muted hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}


/* ─── Trust Section (Counters) ────────────────────────────────────── */
function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const duration = 2000;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = progress * (2 - progress);
            setCount(Math.floor(easeProgress * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [target]);
  return (
    <span ref={ref} className="text-4xl md:text-5xl font-display font-semibold text-foreground tracking-tight">
      {count}{suffix}
    </span>
  );
}

function TrustSection() {
  const { t } = useLanguage();
  return (
    <MotionSection id="confianza" className="py-24 bg-card border-b border-border/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="eyebrow mb-4 justify-center">{t.trust.kicker}</span>
          <h2 className="text-3xl md:text-4xl font-display tracking-tight text-foreground mb-4">
            {t.trust.title}
          </h2>
          <p className="text-muted-foreground text-lg">{t.trust.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {t.trust.stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-2 p-6 rounded-2xl border border-border/60 bg-background/50 hover:bg-muted/30 transition-colors shadow-sm relative overflow-hidden group">
              <Counter target={stat.target} suffix={stat.suffix} />
              <span className="text-sm text-muted-foreground max-w-[140px] leading-snug">{stat.label}</span>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

/* ─── Process Section ─────────────────────────────────────────────── */
function ProcessSection() {
  const { t } = useLanguage();
  return (
    <MotionSection id="proceso" className="py-24 bg-background border-b border-border/50 overflow-hidden relative">
      <LogisticsRoutesBackground />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 max-w-3xl">
          <span className="eyebrow mb-4">{t.process.kicker}</span>
          <h2 className="text-3xl md:text-5xl font-display tracking-tight text-foreground mb-6">
            {t.process.title}
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl">{t.process.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.process.items.map((item, i) => (
            <div key={i} className="group relative p-8 rounded-2xl bg-card border border-border/60 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl">
              <div className="text-6xl font-display text-muted/20 font-bold mb-6 group-hover:text-primary/20 transition-colors">
                {item.step}
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              <div className="absolute top-8 right-8 text-primary opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

/* ─── For Whom Section ────────────────────────────────────────────── */
function ForWhomSection() {
  const { t } = useLanguage();
  return (
    <MotionSection id="paraquien" className="py-24 bg-card border-b border-border/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          <div className="flex flex-col justify-center space-y-10 py-8">
            <div>
              <span className="eyebrow mb-4">{t.forWhom.kickerTarget}</span>
              <h2 className="text-4xl md:text-5xl font-display tracking-tight text-foreground max-w-md">{t.forWhom.targetTitle}</h2>
            </div>
            <div className="space-y-8">
              {t.forWhom.targetItems.map((item, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="mt-1 bg-primary/10 p-3 rounded-xl text-primary shrink-0 shadow-sm border border-primary/20">
                    <CheckCircle2 className="size-6" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg mb-1">{item.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="dark-feature flex flex-col justify-center relative overflow-hidden group">
            {/* abstract glow effect */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />
            
            <div className="relative z-10">
              <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-6">
                {t.forWhom.kickerDiff}
              </span>
              <h2 className="text-4xl font-display font-medium text-white mb-10 tracking-tight">{t.forWhom.diffTitle}</h2>
              <div className="space-y-8">
                {t.forWhom.diffItems.map((item, i) => (
                  <div key={i} className="border-l-2 border-primary/50 pl-6 hover:border-accent transition-colors">
                    <h4 className="font-semibold text-white text-lg mb-2">{item.title}</h4>
                    <p className="text-white/70 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

/* ─── Body ────────────────────────────────────────────────────────── */
function LandingBody() {
  const { locale } = useLanguage();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={locale}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: fadeEase }}
        className="flex min-h-0 w-full flex-col"
      >
        <main>
          <HeroSection />
          <TrustSection />
          <ProcessSection />
          <AboutSection />
          <ForWhomSection />
          <ServicesSection />
          <ReviewsSection />
          <ContactSection />
        </main>
        <Footer />
        <WhatsAppFab />
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── Root ────────────────────────────────────────────────────────── */
export function LandingView() {
  return (
    <ReactLenis root options={{ lerp: 0.07, duration: 1.2 }}>
      <LanguageProvider>
        <Header />
        <LandingBody />
      </LanguageProvider>
    </ReactLenis>
  );
}