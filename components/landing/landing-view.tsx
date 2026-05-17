"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  FileCheck,
  Globe2,
  MapPin,
  Package,
  Star,
  CheckCircle2,
  Ship,
  Briefcase,
  X,
  ArrowLeft,
  Zap,
  ArrowUp,
  Mail,
  Loader2,
  Rocket,
  ShoppingCart,
  Lock,
  Phone,
  Clock,
  MessageCircle,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MotionItem, MotionSection } from "@/components/landing/motion";
import { WhatsAppFab } from "@/components/landing/whatsapp-fab";
import { LanguageProvider, useLanguage } from "@/components/i18n/language-context";
import { getWhatsAppUrl, GOOGLE_MAPS_EMBED_URL, GOOGLE_MAPS_DIRECTIONS_URL, GOOGLE_MAPS_PROFILE_URL, CONTACT, SOCIAL_LINKS } from "@/lib/site";
import { ReactLenis } from "lenis/react";
import { HeroSection } from "@/components/landing/sections/hero";
import { Header } from "@/components/landing/sections/header";
import { ProcessSection } from "@/components/landing/sections/process";
import { ClientsMarquee } from "@/components/landing/sections/clients-marquee";

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
const ICON_MAP: Record<string, any> = {
  Globe2,
  Ship,
  FileCheck,
  Briefcase
};

function ServicesSection() {
  const { t, locale } = useLanguage();
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    setFlippedCard(prev => prev === id ? null : id);
  };

  return (
    <MotionSection
      id="servicios"
      className="relative py-24 border-y border-border/80 overflow-hidden"
      style={{ background: "var(--muted)" }}
    >
      <style>{`
        .perspective-1000 { 
          perspective: 1000px; 
          -webkit-perspective: 1000px; 
        }
        .transform-style-3d { 
          transform-style: preserve-3d; 
          -webkit-transform-style: preserve-3d; 
        }
        .backface-hidden { 
          backface-visibility: hidden; 
          -webkit-backface-visibility: hidden; 
        }
        .rotate-y-180 { 
          transform: rotateY(180deg); 
          -webkit-transform: rotateY(180deg); 
        }
        .rotate-y-0 {
          transform: rotateY(0deg); 
          -webkit-transform: rotateY(0deg);
        }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); border-radius: 4px; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionItem className="text-center mb-16 space-y-4">
          <p className="eyebrow justify-center">{t.services.kicker}</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-5xl text-foreground">
            {t.services.title}
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </MotionItem>

        {/* CONTENEDOR DE PLANES - 2 COLUMNAS */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={stagger.container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {t.services.items.map((plan, i) => {
            const isFlipped = flippedCard === plan.id;
            const IconComp = ICON_MAP[plan.icon] || Package;
            const indexFormatted = String(i + 1).padStart(2, "0");

            return (
              <motion.div
                variants={stagger.item}
                key={`${locale}-svc-${i}`}
                className="perspective-1000 w-full h-[600px] cursor-pointer group"
                onClick={() => handleCardClick(plan.id)}
              >
                {/* Inner Container que gira */}
                <div 
                  className={`relative w-full h-full transition-transform duration-700 transform-style-3d shadow-card hover:shadow-card-hover rounded-3xl ${isFlipped ? 'rotate-y-180' : ''}`}
                >
                  
                  {/* === FRENTE DE LA TARJETA (FRONT) === */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-0 z-20 bg-card border border-border rounded-3xl p-8 flex flex-col overflow-hidden transition-colors group-hover:border-primary/20">
                     {/* Fondo decorativo sutil */}
                     <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                     
                     {/* Numeric Watermark */}
                     <div className="absolute -top-4 -right-2 font-display text-8xl text-primary/5 pointer-events-none select-none transition-all duration-500 group-hover:scale-110 group-hover:text-primary/10">
                       {indexFormatted}
                     </div>

                     <div className="relative z-10 flex flex-col h-full">
                       {/* Icono */}
                       <div className="icon-box shrink-0">
                          <IconComp className="size-6 stroke-[1.5]" aria-hidden />
                       </div>

                       {/* Títulos */}
                       <h3 className="font-display font-bold text-2xl text-foreground mb-2">{plan.title}</h3>
                       <p className="font-semibold text-xs text-primary uppercase tracking-widest mb-6">{plan.subtitle}</p>

                       {/* Descripción Corta */}
                       <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                         {plan.description}
                       </p>

                       {/* Features Principales */}
                       <ul className="space-y-4 mb-auto">
                          {plan.mainFeatures?.map((feat, idx) => (
                            <li key={idx} className="flex items-center space-x-3">
                               <CheckCircle2 size={18} className="text-primary shrink-0" />
                               <span className="text-sm font-medium text-foreground">{feat}</span>
                            </li>
                          ))}
                       </ul>

                       {/* Call to Action Visual (Indicador de giro) */}
                       <div className="mt-8 flex justify-center items-center text-primary text-sm font-semibold uppercase border border-primary/20 rounded-full py-2.5 px-4 bg-primary/5 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                          <span className="mr-2">Ver Detalles Operativos</span>
                          <ArrowRight size={16} />
                       </div>
                     </div>
                  </div>

                  {/* === DORSO DE LA TARJETA (BACK) === */}
                  <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 z-10 bg-foreground border border-primary/30 rounded-3xl p-8 flex flex-col overflow-hidden shadow-2xl`}>
                      {/* Título Dorso + Botón Cerrar Superior */}
                      <div className="flex items-center justify-between mb-4 border-b border-white/15 pb-4">
                         <h3 className="font-display font-bold text-lg text-white">FICHA OPERATIVA</h3>
                         <button className="text-white/60 hover:text-white p-1 transition-colors">
                            <span className="sr-only">Cerrar</span>
                            <X size={22} />
                         </button>
                      </div>

                      {/* Contenido Detallado Scrollable */}
                      <div className="space-y-6 flex-1 overflow-y-auto custom-scrollbar pr-3">
                         
                         {/* Para Quién */}
                         <div>
                            <h4 className="font-semibold text-white text-xs uppercase mb-2 bg-white/10 inline-block px-2.5 py-1 rounded">Perfil Objetivo</h4>
                            <p className="text-sm text-white/85 leading-relaxed">
                                {plan.targetAudience}
                            </p>
                         </div>

                         {plan.details?.map((detail, idx) => (
                           <div key={idx}>
                              <h4 className="font-bold text-accent text-sm uppercase mb-2 tracking-wide">{detail.title}</h4>
                              <ul className="list-disc list-inside space-y-1.5">
                                 {detail.items.map((item, j) => (
                                   <li key={j} className="text-sm text-white/80 leading-relaxed pl-1">
                                     {item}
                                   </li>
                                 ))}
                              </ul>
                           </div>
                         ))}

                         {plan.importantNote && (
                           <div className="bg-accent/10 border border-accent/25 p-3.5 rounded-xl mt-4">
                             <p className="text-xs text-white/90 leading-relaxed">
                               <span className="font-bold text-accent">NOTA:</span> {plan.importantNote}
                             </p>
                           </div>
                         )}
                      </div>

                      {/* --- ZONA DE BOTONES INFERIOR --- */}
                      <div className="mt-6 pt-5 border-t border-white/15 z-20 flex flex-col sm:flex-row gap-3">
                          
                          {/* 1. Botón Volver (Secundario) */}
                          <button
                              className="w-full sm:w-auto px-4 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold uppercase tracking-wide transition-all text-sm flex items-center justify-center"
                          >
                              <ArrowLeft size={16} className="mr-2" />
                              Volver
                          </button>

                          {/* 2. Botón Inscribirme (Principal) */}
                          <a
                              href={getWhatsAppUrl(locale, t.whatsappServicePrefill(plan.title))}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()} 
                              className="flex-1 flex justify-center items-center py-3 sm:py-3.5 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold uppercase tracking-wide transition-all hover:-translate-y-0.5 shadow-xl shadow-primary/20 text-sm"
                          >
                              Cotizar Servicio
                          </a>
                      </div>
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
          className="mx-auto mt-12 grid max-w-2xl gap-5"
          variants={stagger.container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {t.reviews.items.map((r, i) => {
            const rating = r.rating;
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
                  {r.role ? (
                    <p className="text-xs text-muted-foreground">{r.role}</p>
                  ) : null}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <MotionItem className="mt-10 text-center">
          <a
            href={GOOGLE_MAPS_PROFILE_URL}
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validateForm = (formData: FormData) => {
    const errors: Record<string, string> = {};
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || name.trim() === "") {
      errors.name = t.contact.errors.required;
    }
    
    if (!email || email.trim() === "") {
      errors.email = t.contact.errors.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = t.contact.errors.email;
    }

    if (!message || message.trim().length < 10) {
      errors.message = t.contact.errors.minLength;
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");
    setFieldErrors({});

    const formData = new FormData(e.currentTarget);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    const payload = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setErrorMsg("Ocurrió un error al enviar el mensaje. Intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MotionSection
      id="contacto"
      className="border-t border-border/80 scroll-mt-24"
      style={{ background: "var(--muted)" }}
    >
      <div className="mx-auto max-w-6xl px-4 pt-(--section-py) sm:px-6 lg:px-8">
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
              <a href={`tel:${t.contact.subtitlePhone.replace(/\s/g, '')}`} className="text-primary font-semibold underline-offset-4 hover:underline">
                {t.contact.subtitlePhone}
              </a>
              {t.contact.subtitleAfterPhone}
            </p>

            <ul className="mt-9 space-y-5">
              {t.contact.emails.map((entry) => (
                <li key={entry.address}>
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {entry.description}
                  </p>
                  <a
                    href={`mailto:${entry.address}`}
                    className="mt-1 inline-block text-base text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                  >
                    {entry.address}
                  </a>
                </li>
              ))}
            </ul>

            {/* WhatsApp shortcut */}
            <div className="mt-10">
              <a
                href={getWhatsAppUrl(locale)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex text-sm"
                style={{ maxWidth: "fit-content" }}
              >
                {t.contact.ctaWhatsAppAlt}
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

              {isSuccess ? (
                <div className="mt-7 flex flex-col items-center justify-center rounded-2xl bg-primary/10 p-8 text-center border border-primary/20">
                  <CheckCircle2 className="size-12 text-primary mb-4" />
                  <h4 className="text-lg font-semibold text-foreground">¡Mensaje enviado!</h4>
                  <p className="mt-2 text-sm text-muted-foreground font-medium">{t.contact.successMessage}</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 text-sm font-medium text-primary hover:underline underline-offset-4"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form
                  className="mt-7 space-y-5"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  {/* Row 1: Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                      >
                        {t.contact.labelName} <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder={t.contact.placeholderName}
                        className={`rounded-xl bg-background transition-all focus-visible:ring-2 focus-visible:ring-primary ${
                          fieldErrors.name ? "border-red-500 ring-1 ring-red-500" : "border-border"
                        }`}
                      />
                      {fieldErrors.name && (
                        <p className="text-xs text-red-500 font-medium animate-in fade-in">{fieldErrors.name}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="company"
                        className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                      >
                        {t.contact.labelCompany}
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder={t.contact.placeholderCompany}
                        className="rounded-xl border-border bg-background transition-all focus-visible:ring-2 focus-visible:ring-primary"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                      >
                        {t.contact.labelEmail} <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder={t.contact.placeholderEmail}
                        className={`rounded-xl bg-background transition-all focus-visible:ring-2 focus-visible:ring-primary ${
                          fieldErrors.email ? "border-red-500 ring-1 ring-red-500" : "border-border"
                        }`}
                      />
                      {fieldErrors.email && (
                        <p className="text-xs text-red-500 font-medium animate-in fade-in">{fieldErrors.email}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                      >
                        {t.contact.labelPhone}
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder={t.contact.placeholderPhone}
                        className="rounded-xl border-border bg-background transition-all focus-visible:ring-2 focus-visible:ring-primary"
                      />
                    </div>
                  </div>

                  {/* Row 3: Service */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="service"
                      className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                    >
                      {t.contact.labelService}
                    </Label>
                    <select
                      id="service"
                      name="service"
                      className="flex h-10 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                      defaultValue=""
                    >
                      <option value="" disabled>Seleccionar...</option>
                      {Object.entries((t.contact.serviceOptions as Record<string, string>) || {}).map(([key, label]) => (
                        <option key={key} value={label}>{label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Row 4: Message */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                    >
                      {t.contact.labelMessage} <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder={t.contact.placeholderMessage}
                      className={`min-h-[120px] resize-none rounded-xl bg-background transition-all focus-visible:ring-2 focus-visible:ring-primary ${
                        fieldErrors.message ? "border-red-500 ring-1 ring-red-500" : "border-border"
                      }`}
                    />
                    {fieldErrors.message && (
                      <p className="text-xs text-red-500 font-medium animate-in fade-in">{fieldErrors.message}</p>
                    )}
                  </div>
                  
                  {errorMsg && (
                    <p className="text-sm text-red-500 font-medium">{errorMsg}</p>
                  )}

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        Enviando...
                        <Loader2 className="size-4 animate-spin" aria-hidden />
                      </>
                    ) : (
                      <>
                        {t.contact.submit}
                        <ArrowRight className="size-4" aria-hidden />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </MotionItem>
        </div>

      </div>

      {/* Map band — full-bleed on desktop, contained on mobile */}
      <ContactMapBand />
    </MotionSection>
  );
}

/* ─── Contact › Map band ──────────────────────────────────────────── */
function ContactMapBand() {
  const { t } = useLanguage();
  const [pinOpen, setPinOpen] = useState(false);
  const pinWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pinOpen) return;
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (pinWrapRef.current && !pinWrapRef.current.contains(e.target as Node)) {
        setPinOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPinOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown, { passive: true });
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [pinOpen]);

  return (
    <MotionItem className="mt-16 pb-(--section-py) sm:mt-20">
      <div className="mx-auto mb-8 max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <p className="eyebrow justify-center">{t.contact.mapKicker}</p>
        <h3 className="font-display mt-4 text-2xl tracking-tight text-foreground sm:text-3xl">
          {t.contact.mapTitle}
        </h3>
        <p className="mt-3 text-sm text-muted-foreground">
          {t.contact.mapSubtitle}
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:max-w-none lg:px-0">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm lg:rounded-none lg:border-x-0">
          <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]">
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              title={t.contact.mapAriaLabel}
              aria-label={t.contact.mapAriaLabel}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="pointer-events-none absolute inset-0 h-full w-full border-0 grayscale-[15%] contrast-[1.02]"
            />

            {/* Interactive pin — anchored at map's visual center; hover (desktop) or tap (any) reveals address */}
            <div
              ref={pinWrapRef}
              className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-full"
            >
              <div className="group relative flex flex-col items-center">
                {/* Address tooltip (above pin) */}
                <div
                  role="tooltip"
                  className={`
                    absolute bottom-full left-1/2 mb-4 w-max max-w-[min(280px,72vw)] -translate-x-1/2
                    rounded-xl bg-foreground px-4 py-3 text-left text-white shadow-2xl ring-1 ring-white/10
                    transition-all duration-200 ease-out
                    ${pinOpen
                      ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                      : "pointer-events-none translate-y-1 scale-95 opacity-0"
                    }
                    group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100
                  `}
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                    BPORT Logistics
                  </p>
                  <p className="mt-1 text-sm font-medium leading-snug">
                    {t.contact.officeAddress}
                  </p>
                  {/* Pointer triangle */}
                  <span
                    className="absolute left-1/2 top-full size-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-foreground ring-1 ring-white/10"
                    aria-hidden
                  />
                </div>

                {/* Pin button */}
                <button
                  type="button"
                  onClick={() => setPinOpen((prev) => !prev)}
                  aria-label={t.contact.pinSrLabel}
                  aria-expanded={pinOpen}
                  className="relative flex flex-col items-center outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-full"
                >
                  <span
                    className="pointer-events-none absolute bottom-0 left-1/2 size-12 -translate-x-1/2 translate-y-1/2 animate-ping rounded-full bg-primary/40"
                    aria-hidden
                  />
                  <div className="relative flex size-12 items-center justify-center rounded-full bg-primary text-white shadow-2xl ring-[3px] ring-white transition-transform duration-300 hover:scale-110">
                    <MapPin className="size-5" strokeWidth={2.5} fill="currentColor" />
                  </div>
                  <span
                    className="-mt-1.5 size-3 rotate-45 bg-primary ring-[3px] ring-white"
                    aria-hidden
                  />
                </button>
              </div>
            </div>

            {/* Bottom gradient for CTA legibility */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black/55 via-black/15 to-transparent"
              aria-hidden
            />
          </div>

          {/* Floating "Cómo llegar" CTA */}
          <a
            href={GOOGLE_MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary/90 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8"
          >
            {t.contact.mapCta}
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </div>
      </div>
    </MotionItem>
  );
}

/* ─── Footer ──────────────────────────────────────────────────────── */
function Footer() {
  const { t, locale } = useLanguage();
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-[#0b1424] via-[#080f1a] to-[#05080f] text-white pt-20 pb-24 md:pb-28 px-4 relative overflow-hidden">

      {/* Hairline superior con gradiente corporativo */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
      />

      {/* Glow primary top-right */}
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"
      />

      {/* Glow accent bottom-left (eco teal corporativo) */}
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="mx-auto max-w-6xl relative z-10">
        
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* Columna 1: Marca y Descripción */}
          <div className="space-y-6 md:col-span-2">
            <Image
              src="/bport-logo.png"
              alt="BPORT Logistics Logo"
              width={160}
              height={50}
              className="h-10 w-auto object-contain brightness-0 invert opacity-90"
            />
            <p className="text-white/60 text-sm leading-relaxed max-w-sm font-body">
              {t.footer.tagline}
            </p>
            
            {/* Redes Sociales */}
            <div className="flex items-center space-x-3 pt-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white text-white/70 transition-all duration-300"
                  aria-label={social.ariaLabel}
                >
                  {social.name === "Instagram" && (
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-white mb-4">{t.nav.sections}</h3>
            <nav className="flex flex-col gap-3">
              {[
                ["#nosotros", t.nav.about],
                ["#servicios", t.nav.services],
                ["#resenas", t.nav.reviews],
                ["#contacto", t.nav.contact],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="text-white/65 hover:text-white text-sm transition-colors group flex items-center gap-2"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300 rounded-full"></span>
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Columna 3: Contacto Directo */}
          <div className="space-y-4">
            <h3 className="font-bold text-white text-lg mb-4">{t.nav.contact}</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
                <a
                  href={GOOGLE_MAPS_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {CONTACT.address.line1}<br />
                  {CONTACT.address.line2}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary shrink-0" aria-hidden="true" />
                <a href={CONTACT.phoneHref} className="hover:text-white transition-colors">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MessageCircle size={18} className="text-primary shrink-0" aria-hidden="true" />
                <a
                  href={getWhatsAppUrl(locale)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary shrink-0" aria-hidden="true" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
                <span>
                  <span className="block text-primary/80 text-xs uppercase tracking-wider">
                    {t.footer.hoursLabel}
                  </span>
                  {t.footer.hoursValue}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-white/60 text-xs">
              {t.footer.rights(year)}
            </p>
            
            {/* --- FIRMA DIGITAL MATCH GLOBAL --- */}
            <a 
              href="https://www.digitalmatchglobal.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#2563EB]/50 transition-all duration-500 overflow-hidden"
            >
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#2563EB]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <span className="text-[10px] text-white/40 uppercase tracking-wider font-medium group-hover:text-white/70 transition-colors">Made by</span>
                
                <span className="text-xs font-bold bg-linear-to-r from-[#2563EB] to-[#6D5DFE] bg-clip-text text-transparent transition-all duration-300 group-hover:brightness-125">
                    DigitalMatchGlobal
                </span>
                
                <Zap size={10} className="text-white/30 group-hover:text-[#6D5DFE] transition-all duration-300" />
            </a>
          </div>
          
          <div className="flex items-center gap-4 sm:gap-6">
              {/* Admin Login - Camuflado */}
              <a 
                href="https://www.spacemail.com/login/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/0 hover:bg-white/5 text-white/20 hover:text-white/60 transition-all duration-300"
                aria-label="Webmail Login"
                title="Webmail"
              >
                <Lock size={15} strokeWidth={1.5} />
              </a>

              <Button
                onClick={scrollToTop}
                variant="ghost"
                size="icon"
                aria-label={t.footer.backToTop}
                title={t.footer.backToTop}
                className="rounded-full bg-primary/10 border border-primary/20 text-white/70 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-lg"
              >
                <ArrowUp size={18} aria-hidden="true" />
              </Button>
          </div>
        </div>
      </div>
    </footer>
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
              <div className="absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

/* ─── For Whom Section ────────────────────────────────────────────── */
function ForWhomSection() {
  const { t, locale } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const tabIcons = [Ship, ShoppingCart, Rocket];
  const tabAccents = [
    "from-primary to-primary-light",
    "from-accent to-[#3db8a9]",
    "from-[#d42f7a] to-[#e0603a]",
  ];

  // Reset tab when locale changes
  useEffect(() => {
    setActiveTab(0);
  }, [locale]);

  return (
    <MotionSection id="paraquien" className="py-24 bg-card border-b border-border/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

          {/* Left: Interactive Tabs */}
          <div className="flex flex-col justify-center space-y-8 py-8">
            <MotionItem>
              <span className="eyebrow mb-4">{t.forWhom.kickerTarget}</span>
              <h2 className="text-3xl md:text-4xl font-display tracking-tight text-foreground max-w-lg">
                {t.forWhom.targetTitle}
              </h2>
            </MotionItem>

            {/* Tab Buttons */}
            <MotionItem>
              <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
                {t.forWhom.targetItems.map((item, i) => {
                  const Icon = tabIcons[i];
                  const isActive = activeTab === i;
                  return (
                    <button
                      key={i}
                      onClick={() => setActiveTab(i)}
                      className={`
                        group relative flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer w-full sm:w-auto
                        ${isActive
                          ? "bg-primary text-white shadow-lg shadow-primary/25"
                          : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground border border-border/60"
                        }
                      `}
                    >
                      <Icon className={`size-4 shrink-0 transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`} />
                      <span>{item.title.replace(".", "")}</span>
                    </button>
                  );
                })}
              </div>
            </MotionItem>

            {/* Tab Content with Animation */}
            <div className="relative min-h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${locale}-${activeTab}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="space-y-6"
                >
                  {/* Large icon + content card */}
                  <div className="rounded-2xl border border-border/60 bg-background p-6 sm:p-8 shadow-sm">
                    <div className="flex items-start gap-5">
                      <div className={`shrink-0 rounded-xl bg-linear-to-br ${tabAccents[activeTab]} p-4 text-white shadow-lg`}>
                        {(() => {
                          const Icon = tabIcons[activeTab];
                          return <Icon className="size-7" strokeWidth={1.8} />;
                        })()}
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-xl font-semibold text-foreground">
                          {t.forWhom.targetItems[activeTab].title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed text-[15px]">
                          {t.forWhom.targetItems[activeTab].description}
                        </p>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-6 pt-5 border-t border-border/50">
                      <a
                        href="#contacto"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/cta"
                      >
                        {t.contact.formTitle}
                        <ArrowRight className="size-4 transition-transform group-hover/cta:translate-x-1" />
                      </a>
                    </div>
                  </div>

                  {/* Progress indicator */}
                  <div className="flex gap-2">
                    {t.forWhom.targetItems.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveTab(i)}
                        className="group/dot flex-1 cursor-pointer"
                        aria-label={`Tab ${i + 1}`}
                      >
                        <div className="h-1 rounded-full overflow-hidden bg-border">
                          <motion.div
                            className="h-full rounded-full bg-primary"
                            initial={{ width: "0%" }}
                            animate={{ width: activeTab === i ? "100%" : "0%" }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                          />
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
          {/* Right: Differentials with scroll-reveal stagger */}
          <div className="dark-feature flex flex-col justify-center relative overflow-hidden">
            {/* abstract glow effects */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-accent/25 rounded-full blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary/30 rounded-full blur-[100px]" />
            
            <div className="relative z-10">
              {/* Kicker badge - improved contrast */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4 }}
                className="inline-flex rounded-full border border-accent/40 bg-accent/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent mb-7"
              >
                {t.forWhom.kickerDiff}
              </motion.span>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl font-display font-medium text-white mb-12 tracking-tight leading-tight"
              >
                {t.forWhom.diffTitle}
              </motion.h2>

              {/* Staggered differential items */}
              <div className="space-y-8">
                {t.forWhom.diffItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                    whileHover={{ x: 6 }}
                    className="group/diff flex gap-5 items-start cursor-default"
                  >
                    {/* Numbered accent circle */}
                    <div className="shrink-0 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-sm font-bold text-accent transition-all duration-300 group-hover/diff:bg-accent/20 group-hover/diff:border-accent/40 group-hover/diff:scale-110">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-lg mb-1.5 transition-colors duration-300 group-hover/diff:text-accent">
                        {item.title}
                      </h4>
                      <p className="text-white/65 leading-relaxed text-[15px] transition-colors duration-300 group-hover/diff:text-white/85">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Persuasive CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-12 pt-8 border-t border-white/10"
              >
                <p className="text-white/50 text-sm mb-5 italic">
                  {t.hero.trustBadge}
                </p>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg shadow-black/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/30 hover:scale-[1.03] active:scale-[0.98]"
                >
                  {t.contact.ctaDiff}
                  <ArrowRight className="size-4" />
                </a>
              </motion.div>
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
          <ClientsMarquee />
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