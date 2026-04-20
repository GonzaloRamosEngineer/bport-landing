"use client";

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
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MotionItem, MotionSection } from "@/components/landing/motion";
import { WhatsAppFab } from "@/components/landing/whatsapp-fab";
import { LanguageProvider, useLanguage } from "@/components/i18n/language-context";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { getWhatsAppUrl } from "@/lib/site";

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
function HeroSection() {
  const { t, locale } = useLanguage();

  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-background">
      {/* Mesh gradient backdrop */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -5%, rgba(90,45,140,0.10) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 85% 60%, rgba(45,184,176,0.07) 0%, transparent 60%)",
        }}
      />
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(to right, #e3e0db 1px, transparent 1px), linear-gradient(to bottom, #e3e0db 1px, transparent 1px)",
          backgroundSize: "3.5rem 3.5rem",
          maskImage:
            "radial-gradient(ellipse 70% 55% at 50% 0%, #000 30%, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-28 pt-24 sm:px-6 sm:pb-36 sm:pt-32 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={stagger.container}
          initial="hidden"
          animate="show"
        >
          {/* Trust badge */}
          <motion.div variants={stagger.item} className="mb-6 inline-flex">
            <span className="stat-chip">
              {t.hero.trustBadge}
            </span>
          </motion.div>

          {/* Eyebrow */}
          <motion.p variants={stagger.item} className="eyebrow justify-center mb-5">
            {t.hero.eyebrow}
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={stagger.item}
            className="font-display text-balance text-5xl tracking-tight text-foreground sm:text-6xl lg:text-[4rem] lg:leading-[1.05]"
          >
            {t.hero.title}{" "}
            <span className="text-gradient">{t.hero.titleHighlight}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={stagger.item}
            className="mx-auto mt-7 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={stagger.item}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-4"
          >
            <motion.a
              href={getWhatsAppUrl(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              {t.hero.ctaWhatsApp}
              <ArrowRight className="size-4" aria-hidden />
            </motion.a>
            <a href="#servicios" className="btn-ghost text-sm">
              {t.hero.ctaServices}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-background to-transparent"
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
                "linear-gradient(135deg, rgba(90,45,140,0.04) 0%, rgba(255,255,255,1) 50%, rgba(45,184,176,0.04) 100%)",
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
            return (
              <motion.div
                key={`${locale}-svc-${i}`}
                variants={stagger.item}
                className="card-elevated flex flex-col gap-5 p-6"
              >
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
                <div className="review-quote-mark leading-none">"</div>

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
          <AboutSection />
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
    <LanguageProvider>
      <Header />
      <LandingBody />
    </LanguageProvider>
  );
}