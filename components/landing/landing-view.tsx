"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  FileCheck,
  Globe2,
  MapPin,
  Package,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MotionItem, MotionSection } from "@/components/landing/motion";
import { WhatsAppFab } from "@/components/landing/whatsapp-fab";
import { WHATSAPP_URL } from "@/lib/site";

const services = [
  {
    title: "Transporte FCL / LCL",
    description:
      "Consolidación y carga completa con seguimiento en cada etapa del circuito internacional.",
    icon: Package,
  },
  {
    title: "Puerta a puerta",
    description:
      "Coordinación integral desde origen hasta destino final, con puntos de control claros.",
    icon: Globe2,
  },
  {
    title: "Asesoramiento aduanero",
    description:
      "Acompañamiento normativo y documentación para operar con predictibilidad.",
    icon: FileCheck,
  },
  {
    title: "Operaciones corporativas",
    description:
      "Estructura pensada para equipos que necesitan reporting y continuidad operativa.",
    icon: Building2,
  },
] as const;

const reviews = [
  {
    quote:
      "Respuesta ágil y criterio claro en cada consulta. El seguimiento nos dio tranquilidad en un envío complejo.",
    name: "María González",
    role: "Importación retail",
    rating: 5,
  },
  {
    quote:
      "Profesionales y transparentes. Destaco el trato cercano sin perder el rigor documental.",
    name: "Andrés Pereira",
    role: "PyME industrial",
    rating: 5,
  },
  {
    quote:
      "Excelente coordinación con proveedores externos. Cumplieron plazos y expectativas.",
    name: "Lucía Fernández",
    role: "E-commerce",
    rating: 5,
  },
] as const;

export function LandingView() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-4">
            <Link href="/" className="flex min-w-0 items-center gap-3">
              <Image
                src="/bport-logo.png"
                alt="BPORT Logistics"
                width={140}
                height={48}
                className="h-9 w-auto object-contain sm:h-10"
                priority
              />
            </Link>
            <nav
              className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex"
              aria-label="Principal"
            >
              <a href="#nosotros" className="transition-colors hover:text-foreground">
                Nosotros
              </a>
              <a href="#servicios" className="transition-colors hover:text-foreground">
                Servicios
              </a>
              <a href="#resenas" className="transition-colors hover:text-foreground">
                Reseñas
              </a>
              <a href="#contacto" className="transition-colors hover:text-foreground">
                Contacto
              </a>
            </nav>
            <Button asChild size="sm" className="hidden shrink-0 sm:inline-flex">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>
          <nav
            className="-mx-1 flex gap-1 overflow-x-auto pb-3 md:hidden"
            aria-label="Secciones"
          >
            {[
              ["#nosotros", "Nosotros"],
              ["#servicios", "Servicios"],
              ["#resenas", "Reseñas"],
              ["#contacto", "Contacto"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="shrink-0 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/60">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(109,40,217,0.12),transparent)]"
            aria-hidden
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e7e5e4_1px,transparent_1px),linear-gradient(to_bottom,#e7e5e4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_40%,transparent)] opacity-40" />
          <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-20 sm:px-6 sm:pb-32 sm:pt-28 lg:px-8">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary/90">
                BPORT Logistics
              </p>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
                Conectamos tu carga con el mundo
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                Operaciones internacionales con foco en claridad, tiempos y un
                equipo que acompaña cada envío con criterio profesional.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
                <motion.a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 text-sm font-semibold text-white shadow-lg shadow-stone-900/10 transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 24 }}
                >
                  Escribinos por WhatsApp
                  <ArrowRight className="size-4" aria-hidden />
                </motion.a>
                <Button variant="secondary" size="lg" asChild>
                  <a href="#servicios">Ver servicios</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sobre nosotros */}
        <MotionSection
          id="nosotros"
          className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <MotionItem>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Sobre nosotros
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Trayectoria y acompañamiento cercano
              </h2>
              <p className="mt-5 max-w-prose text-pretty leading-relaxed text-muted-foreground">
                Desde el año{" "}
                <span className="font-semibold text-foreground">2000</span>{" "}
                impulsamos operaciones de comercio exterior con un enfoque
                sobrio y orientado a resultados. Trabajamos con emprendedores y
                equipos que necesitan{" "}
                <span className="text-foreground">
                  asesoramiento personalizado
                </span>
                : menos ruido, más criterio y procesos que se entienden.
              </p>
              <ul className="mt-8 space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  Modelo consultivo: priorizamos tu contexto antes que el volumen.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  Comunicación directa con especialistas, sin capas innecesarias.
                </li>
              </ul>
            </MotionItem>
            <MotionItem>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/[0.07] via-background to-muted shadow-sm">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center">
                    <p className="font-mono text-5xl font-semibold tabular-nums text-primary sm:text-6xl">
                      2000
                    </p>
                    <p className="mt-2 text-sm font-medium text-muted-foreground">
                      Año de inicio
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none absolute -right-8 bottom-0 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
              </div>
            </MotionItem>
          </div>
        </MotionSection>

        {/* Servicios */}
        <MotionSection
          id="servicios"
          className="border-y border-border/80 bg-muted/40"
        >
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <MotionItem className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Servicios
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Lo esencial, bien ejecutado
              </h2>
              <p className="mt-4 text-pretty text-muted-foreground">
                Soluciones modulares para importar y exportar con visibilidad
                en cada etapa.
              </p>
            </MotionItem>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <MotionItem key={s.title}>
                  <Card className="h-full border-border/80 bg-card transition-shadow hover:shadow-md">
                    <CardHeader className="space-y-4">
                      <div className="flex size-11 items-center justify-center rounded-lg border border-border bg-background text-primary">
                        <s.icon className="size-5 stroke-[1.5]" aria-hidden />
                      </div>
                      <CardTitle className="text-base">{s.title}</CardTitle>
                      <CardDescription className="leading-relaxed">
                        {s.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </MotionItem>
              ))}
            </div>
          </div>
        </MotionSection>

        {/* Reseñas Google */}
        <MotionSection id="resenas" className="scroll-mt-24">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <MotionItem className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Confianza verificada
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Lo que dicen en Google Maps
              </h2>
              <p className="mt-4 text-muted-foreground">
                Reseñas públicas que reflejan nuestra forma de trabajar.
              </p>
            </MotionItem>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {reviews.map((r) => (
                <MotionItem key={r.name}>
                  <Card className="h-full border-border/80 bg-card">
                    <CardContent className="flex h-full flex-col pt-6">
                      <div className="mb-4 flex items-center justify-between gap-2">
                        <div className="flex gap-0.5" aria-label={`${r.rating} de 5 estrellas`}>
                          {Array.from({ length: r.rating }).map((_, i) => (
                            <Star
                              key={i}
                              className="size-4 fill-amber-400 text-amber-400"
                              aria-hidden
                            />
                          ))}
                        </div>
                        <span className="rounded border border-border bg-muted/50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                          Google
                        </span>
                      </div>
                      <blockquote className="flex-1 text-sm leading-relaxed text-foreground">
                        “{r.quote}”
                      </blockquote>
                      <div className="mt-6 border-t border-border pt-4">
                        <p className="text-sm font-medium text-foreground">
                          {r.name}
                        </p>
                        <p className="text-xs text-muted-foreground">{r.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </MotionItem>
              ))}
            </div>
            <MotionItem className="mt-10 text-center">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                Ver perfil en Google Maps
                <ArrowRight className="size-4" aria-hidden />
              </a>
            </MotionItem>
          </div>
        </MotionSection>

        {/* Contacto */}
        <MotionSection
          id="contacto"
          className="border-t border-border/80 bg-muted/30 scroll-mt-24"
        >
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <MotionItem>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Contacto
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Hablemos de tu próximo movimiento
                </h2>
                <p className="mt-4 max-w-prose text-pretty text-muted-foreground">
                  Completá el formulario o escribinos por WhatsApp. Respondemos
                  con prioridad a consultas comerciales y operativas.
                </p>
                <div className="mt-8 space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    <div>
                      <p className="font-medium text-foreground">Oficina</p>
                      <p className="text-muted-foreground">
                        Zona Puerto / Ciudad Vieja, Montevideo, Uruguay
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 size-4 shrink-0 text-center text-xs font-bold text-primary">
                      @
                    </span>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a
                        href="mailto:info@bport.com"
                        className="text-primary underline-offset-4 hover:underline"
                      >
                        info@bport.com
                      </a>
                    </div>
                  </div>
                </div>
              </MotionItem>
              <MotionItem>
                <Card className="border-border/80 bg-card shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">Enviar mensaje</CardTitle>
                    <CardDescription>
                      Campos obligatorios marcados según uso interno.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form
                      className="space-y-5"
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <div className="space-y-2">
                        <Label htmlFor="name">Nombre y empresa</Label>
                        <Input id="name" name="name" required placeholder="Tu nombre" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="nombre@empresa.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Mensaje</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          placeholder="Contanos origen, destino y tipo de carga (si aplica)."
                        />
                      </div>
                      <Button type="submit" className="w-full sm:w-auto">
                        Enviar consulta
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </MotionItem>
            </div>
          </div>
        </MotionSection>
      </main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <Image
              src="/bport-logo.png"
              alt=""
              width={120}
              height={40}
              className="h-9 w-auto object-contain opacity-90"
            />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} BPORT Logistics. Todos los derechos
              reservados.
            </p>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>info@bport.com</p>
            <p className="mt-1">Montevideo, Uruguay</p>
          </div>
        </div>
      </footer>

      <WhatsAppFab />
    </>
  );
}
