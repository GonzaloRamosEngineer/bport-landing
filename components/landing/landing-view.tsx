"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
import { ReactLenis } from "lenis/react";

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
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background/50" />
    </div>
  );
}

function HeroSection() {
  const { t, locale } = useLanguage();

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
        <div className="absolute inset-0 bg-[#0d0d12]/40" />
      </div>

      <div className="relative z-20 mx-auto w-full max-w-4xl px-4 py-24 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          variants={stagger.container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          {/* Trust badge */}
          <motion.div variants={stagger.item} className="mb-6 inline-flex">
            <span className="stat-chip text-white! bg-white/10! border-white/20! backdrop-blur-md">
              {t.hero.trustBadge}
            </span>
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            variants={stagger.item}
            className="eyebrow mb-5 text-white/90! drop-shadow-md justify-center"
          >
            {t.hero.eyebrow}
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={stagger.item}
            className="font-display text-balance text-4xl tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.05] drop-shadow-xl"
          >
            {t.hero.title}{" "}
            <span
              className="block bg-gradient-to-br from-white via-[#2f8f83] to-[#0b1f3a] bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(47,143,131,0.45)]"
            >
              {t.hero.titleHighlight}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={stagger.item}
            className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-white font-medium drop-shadow-md sm:text-lg"
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

            <a
              href="#servicios"
              className="btn-ghost text-white! border-white/40! hover:bg-white/10! hover:text-white! text-sm backdrop-blur-sm"
            >
              {t.hero.ctaServices}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute inset-0 z-10 bg-linear-to-b from-black/60 via-black/30 to-background"
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
              <a href={`tel:${t.contact.subtitlePhone.replace(/\s/g, '')}`} className="text-primary font-semibold underline-offset-4 hover:underline">
                {t.contact.subtitlePhone}
              </a>
              {t.contact.subtitleAfterPhone}
            </p>

            <div className="mt-9 space-y-5 text-sm">
              <div className="flex items-start gap-4">
                <div className="icon-box mt-0.5 size-9 shrink-0">
                  <MapPin className="size-4 stroke-[1.5]" aria-hidden />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {t.contact.officeLabel}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t.contact.officeAddress)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
                  >
                    {t.contact.officeAddress}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="icon-box mt-0.5 size-9 shrink-0">
                  <span className="text-xs font-bold text-primary">@</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {t.contact.emailLabel}
                  </p>
                  <a
                    href="mailto:info@bportlogistics.com"
                    className="mt-0.5 inline-block text-primary underline-offset-4 hover:underline"
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
    </MotionSection>
  );
}

/* ─── Footer ──────────────────────────────────────────────────────── */
function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0d0d12] text-white pt-20 pb-10 px-4 relative overflow-hidden border-t border-white/10">
      
      {/* Círculo decorativo gigante de fondo */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>

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
              <a href="https://www.instagram.com/bportlogistics/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white text-white/40 transition-all duration-300" aria-label="Instagram">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white text-white/40 transition-all duration-300" aria-label="LinkedIn">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white text-white/40 transition-all duration-300" aria-label="Facebook">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
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
                  className="text-white/50 hover:text-white text-sm transition-colors group flex items-center gap-2"
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
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Minas 1543/502, Montevideo, Uruguay')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Minas 1543/502<br />
                  Montevideo, Uruguay
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:info@bportlogistics.com" className="hover:text-white transition-colors">
                  info@bportlogistics.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-white/40 text-xs">
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
                className="rounded-full bg-white/5 border border-white/10 text-white/60 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-lg"
              >
                <ArrowUp size={18} />
              </Button>
          </div>
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
          className="-mx-1 flex gap-1.5 overflow-x-auto pb-3 md:hidden scrollbar-none"
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
              <div className="absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
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
          <p className="text-foreground/80 text-lg sm:text-xl max-w-2xl">{t.process.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.process.items.map((item, i) => (
            <div key={i} className="group relative p-8 rounded-2xl bg-card border border-border/60 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl">
              <div className="text-6xl font-display text-foreground/10 font-bold mb-6 group-hover:text-primary/20 transition-colors">
                {item.step}
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{item.description}</p>
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