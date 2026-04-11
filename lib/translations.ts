export type Locale = "es" | "en";

export const locales: Locale[] = ["es", "en"];

export const defaultLocale: Locale = "es";

export type ServiceCopy = {
  title: string;
  description: string;
};

export type ReviewCopy = {
  quote: string;
  name: string;
  role: string;
};

export type Messages = {
  meta: {
    title: string;
    description: string;
  };
  logoAlt: string;
  nav: {
    primary: string;
    sections: string;
    about: string;
    services: string;
    reviews: string;
    contact: string;
    whatsapp: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaWhatsApp: string;
    ctaServices: string;
  };
  about: {
    kicker: string;
    title: string;
    lineBeforeHighlight: string;
    highlight: string;
    lineAfterHighlight: string;
    bullet1: string;
    bullet2: string;
    yearLabel: string;
  };
  services: {
    kicker: string;
    title: string;
    subtitle: string;
    items: [ServiceCopy, ServiceCopy, ServiceCopy, ServiceCopy];
  };
  reviews: {
    kicker: string;
    title: string;
    subtitle: string;
    googleBadge: string;
    starsAria: (rating: number) => string;
    viewMaps: string;
    items: [ReviewCopy, ReviewCopy, ReviewCopy];
  };
  contact: {
    kicker: string;
    title: string;
    subtitle: string;
    officeLabel: string;
    officeAddress: string;
    emailLabel: string;
    formTitle: string;
    formDescription: string;
    labelName: string;
    placeholderName: string;
    labelEmail: string;
    placeholderEmail: string;
    labelMessage: string;
    placeholderMessage: string;
    submit: string;
  };
  footer: {
    rights: (year: number) => string;
    location: string;
  };
  fab: {
    label: string;
    labelShort: string;
  };
  whatsappPrefill: string;
};

export const translations: Record<Locale, Messages> = {
  es: {
    meta: {
      title: "BPORT Logistics | Conectamos tu carga con el mundo",
      description:
        "Logística internacional desde 2000. Transporte FCL/LCL, puerta a puerta y asesoramiento aduanero. Montevideo, Uruguay.",
    },
    logoAlt: "BPORT Logistics",
    nav: {
      primary: "Principal",
      sections: "Secciones",
      about: "Nosotros",
      services: "Servicios",
      reviews: "Reseñas",
      contact: "Contacto",
      whatsapp: "WhatsApp",
    },
    hero: {
      eyebrow: "BPORT Logistics",
      title: "Conectamos tu carga con el mundo",
      subtitle:
        "Operaciones internacionales con foco en claridad, tiempos y un equipo que acompaña cada envío con criterio profesional.",
      ctaWhatsApp: "Escribinos por WhatsApp",
      ctaServices: "Ver servicios",
    },
    about: {
      kicker: "Sobre nosotros",
      title: "Trayectoria y acompañamiento cercano",
      lineBeforeHighlight:
        "Desde el año 2000 impulsamos operaciones de comercio exterior con un enfoque sobrio y orientado a resultados. Trabajamos con emprendedores y equipos que necesitan ",
      highlight: "asesoramiento personalizado",
      lineAfterHighlight:
        ": menos ruido, más criterio y procesos que se entienden.",
      bullet1:
        "Modelo consultivo: priorizamos tu contexto antes que el volumen.",
      bullet2:
        "Comunicación directa con especialistas, sin capas innecesarias.",
      yearLabel: "Año de inicio",
    },
    services: {
      kicker: "Servicios",
      title: "Lo esencial, bien ejecutado",
      subtitle:
        "Soluciones modulares para importar y exportar con visibilidad en cada etapa.",
      items: [
        {
          title: "Transporte FCL / LCL",
          description:
            "Consolidación y carga completa con seguimiento en cada etapa del circuito internacional.",
        },
        {
          title: "Puerta a puerta",
          description:
            "Coordinación integral desde origen hasta destino final, con puntos de control claros.",
        },
        {
          title: "Asesoramiento aduanero",
          description:
            "Acompañamiento normativo y documentación para operar con predictibilidad.",
        },
        {
          title: "Operaciones corporativas",
          description:
            "Estructura pensada para equipos que necesitan reporting y continuidad operativa.",
        },
      ],
    },
    reviews: {
      kicker: "Confianza verificada",
      title: "Lo que dicen en Google Maps",
      subtitle: "Reseñas públicas que reflejan nuestra forma de trabajar.",
      googleBadge: "Google",
      starsAria: (rating) => `${rating} de 5 estrellas`,
      viewMaps: "Ver perfil en Google Maps",
      items: [
        {
          quote:
            "Respuesta ágil y criterio claro en cada consulta. El seguimiento nos dio tranquilidad en un envío complejo.",
          name: "María González",
          role: "Importación retail",
        },
        {
          quote:
            "Profesionales y transparentes. Destaco el trato cercano sin perder el rigor documental.",
          name: "Andrés Pereira",
          role: "PyME industrial",
        },
        {
          quote:
            "Excelente coordinación con proveedores externos. Cumplieron plazos y expectativas.",
          name: "Lucía Fernández",
          role: "E-commerce",
        },
      ],
    },
    contact: {
      kicker: "Contacto",
      title: "Hablemos de tu próximo movimiento",
      subtitle:
        "Completá el formulario o escribinos por WhatsApp. Respondemos con prioridad a consultas comerciales y operativas.",
      officeLabel: "Oficina",
      officeAddress: "Zona Puerto / Ciudad Vieja, Montevideo, Uruguay",
      emailLabel: "Email",
      formTitle: "Enviar mensaje",
      formDescription: "Campos obligatorios marcados según uso interno.",
      labelName: "Nombre y empresa",
      placeholderName: "Tu nombre",
      labelEmail: "Email",
      placeholderEmail: "nombre@empresa.com",
      labelMessage: "Mensaje",
      placeholderMessage:
        "Contanos origen, destino y tipo de carga (si aplica).",
      submit: "Enviar consulta",
    },
    footer: {
      rights: (year) =>
        `© ${year} BPORT Logistics. Todos los derechos reservados.`,
      location: "Montevideo, Uruguay",
    },
    fab: {
      label: "WhatsApp",
      labelShort: "WhatsApp",
    },
    whatsappPrefill:
      "Hola BPORT Logistics, quiero consultar por mis envíos.",
  },
  en: {
    meta: {
      title: "BPORT Logistics | We connect your cargo to the world",
      description:
        "International logistics since 2000. FCL/LCL transport, door-to-door service, and customs advisory. Montevideo, Uruguay.",
    },
    logoAlt: "BPORT Logistics",
    nav: {
      primary: "Primary",
      sections: "Sections",
      about: "About",
      services: "Services",
      reviews: "Reviews",
      contact: "Contact",
      whatsapp: "WhatsApp",
    },
    hero: {
      eyebrow: "BPORT Logistics",
      title: "We connect your cargo to the world",
      subtitle:
        "International operations focused on clarity, timing, and a team that supports every shipment with professional judgment.",
      ctaWhatsApp: "Message us on WhatsApp",
      ctaServices: "View services",
    },
    about: {
      kicker: "About us",
      title: "Track record and hands-on guidance",
      lineBeforeHighlight:
        "Since 2000 we have driven foreign trade operations with a sober, results-oriented approach. We work with entrepreneurs and teams that need ",
      highlight: "personalized advisory",
      lineAfterHighlight:
        ": less noise, more judgment, and processes that are easy to understand.",
      bullet1:
        "Consultative model: we prioritize your context before volume.",
      bullet2:
        "Direct communication with specialists—no unnecessary layers.",
      yearLabel: "Year founded",
    },
    services: {
      kicker: "Services",
      title: "The essentials, executed well",
      subtitle:
        "Modular solutions to import and export with visibility at every stage.",
      items: [
        {
          title: "FCL / LCL shipping",
          description:
            "Consolidation and full-container loads with tracking at each step of the international flow.",
        },
        {
          title: "Door to door",
          description:
            "End-to-end coordination from origin to final destination, with clear checkpoints.",
        },
        {
          title: "Customs advisory",
          description:
            "Regulatory support and documentation to operate with predictability.",
        },
        {
          title: "Corporate operations",
          description:
            "A structure built for teams that need reporting and operational continuity.",
        },
      ],
    },
    reviews: {
      kicker: "Verified trust",
      title: "What people say on Google Maps",
      subtitle: "Public reviews that reflect how we work.",
      googleBadge: "Google",
      starsAria: (rating) => `${rating} out of 5 stars`,
      viewMaps: "View profile on Google Maps",
      items: [
        {
          quote:
            "Fast responses and clear judgment on every question. Tracking gave us peace of mind on a complex shipment.",
          name: "María González",
          role: "Retail imports",
        },
        {
          quote:
            "Professional and transparent. I value the close approach without sacrificing documentation rigor.",
          name: "Andrés Pereira",
          role: "Industrial SME",
        },
        {
          quote:
            "Excellent coordination with external vendors. They met deadlines and expectations.",
          name: "Lucía Fernández",
          role: "E-commerce",
        },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Let’s talk about your next move",
      subtitle:
        "Fill out the form or reach us on WhatsApp. We prioritize commercial and operational inquiries.",
      officeLabel: "Office",
      officeAddress: "Port area / Ciudad Vieja, Montevideo, Uruguay",
      emailLabel: "Email",
      formTitle: "Send a message",
      formDescription: "Required fields as used internally.",
      labelName: "Name and company",
      placeholderName: "Your name",
      labelEmail: "Email",
      placeholderEmail: "name@company.com",
      labelMessage: "Message",
      placeholderMessage:
        "Tell us origin, destination, and cargo type (if applicable).",
      submit: "Send inquiry",
    },
    footer: {
      rights: (year) => `© ${year} BPORT Logistics. All rights reserved.`,
      location: "Montevideo, Uruguay",
    },
    fab: {
      label: "WhatsApp",
      labelShort: "WhatsApp",
    },
    whatsappPrefill:
      "Hello BPORT Logistics, I would like to inquire about my shipments.",
  },
};

export function getMessages(locale: Locale): Messages {
  return translations[locale];
}
