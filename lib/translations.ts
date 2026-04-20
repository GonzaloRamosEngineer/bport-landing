export type Locale = "es" | "en" | "pt";

export const locales: Locale[] = ["es", "en", "pt"];

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
    titleHighlight: string;   // portion of title rendered as gradient
    subtitle: string;
    ctaWhatsApp: string;
    ctaServices: string;
    trustBadge: string;
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
    statLabel: string;
    statValue: string;
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
    successMessage: string;
  };
  footer: {
    rights: (year: number) => string;
    location: string;
    tagline: string;
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
      eyebrow: "Logística Internacional",
      title: "Conectamos tu carga",
      titleHighlight: "con el mundo",
      subtitle:
        "Más de 20 años de experiencia operativa. Asesoramiento personalizado para pequeños y medianos emprendedores que quieren operar a escala global.",
      ctaWhatsApp: "Cotiza tu carga hoy",
      ctaServices: "Explorar servicios",
      trustBadge: "Desde el año 2000 · Montevideo, Uruguay",
    },
    about: {
      kicker: "Sobre nosotros",
      title: "Trayectoria y acompañamiento cercano",
      lineBeforeHighlight:
        "Base en Uruguay con operaciones regionales y una red global de agentes confiables en China y mercados clave. Proveemos ",
      highlight: "asesoramiento personalizado",
      lineAfterHighlight:
        " con el compromiso de eficiencia y trazabilidad que las grandes corporaciones no ofrecen a escala humana.",
      bullet1:
        "Modelo consultivo: tu contexto primero, el volumen después.",
      bullet2:
        "Comunicación directa con especialistas — sin burocracia.",
      yearLabel: "Año de inicio",
      statLabel: "Años de experiencia",
      statValue: "+25",
    },
    services: {
      kicker: "Servicios",
      title: "Lo esencial, bien ejecutado",
      subtitle:
        "Soluciones modulares para importar y exportar con visibilidad en cada etapa del proceso.",
      items: [
        {
          title: "Importación & Exportación",
          description:
            "Trading y soluciones B2B a medida para PyMEs y emprendedores.",
        },
        {
          title: "Transporte Internacional",
          description:
            "FCL / LCL, Aéreo y Terrestre con seguimiento en tiempo real.",
        },
        {
          title: "Gestión Aduanera",
          description:
            "Asesoramiento ágil en normativas y documentación de comercio exterior.",
        },
        {
          title: "Servicios Integrales",
          description:
            "Coordinación puerta a puerta, consolidación de cargas y seguros de carga.",
        },
      ],
    },
    reviews: {
      kicker: "Confianza verificada",
      title: "Lo que dicen nuestros clientes",
      subtitle: "Reseñas públicas de Google Maps que reflejan nuestra forma de trabajar.",
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
            "Excelente coordinación con proveedores externos. Cumplieron plazos y expectativas al pie de la letra.",
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
      officeAddress: "Minas 1543/502 – Zona Puerto, Montevideo, Uruguay",
      emailLabel: "Email",
      formTitle: "Cotiza sin compromiso",
      formDescription:
        "Contanos tu operación y te respondemos en menos de 24 hs.",
      labelName: "Nombre y empresa",
      placeholderName: "Tu nombre",
      labelEmail: "Email",
      placeholderEmail: "nombre@empresa.com",
      labelMessage: "Mensaje",
      placeholderMessage:
        "Origen, destino y tipo de carga (si aplica).",
      submit: "Enviar consulta",
      successMessage: "¡Consulta enviada! Te respondemos a la brevedad.",
    },
    footer: {
      rights: (year) =>
        `© ${year} BPORT Logistics. Todos los derechos reservados.`,
      location: "Montevideo, Uruguay",
      tagline: "Conectamos tu carga con el mundo.",
    },
    fab: {
      label: "Consultar por WhatsApp",
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
      eyebrow: "International Logistics",
      title: "We connect your cargo",
      titleHighlight: "to the world",
      subtitle:
        "Over 20 years of operational experience. Personalized advisory for small and medium-sized entrepreneurs looking to operate at a global scale.",
      ctaWhatsApp: "Quote your cargo today",
      ctaServices: "Explore services",
      trustBadge: "Since 2000 · Montevideo, Uruguay",
    },
    about: {
      kicker: "About us",
      title: "Track record and hands-on guidance",
      lineBeforeHighlight:
        "Based in Uruguay with regional operations and a global network of reliable agents in China and key markets. We provide ",
      highlight: "personalized advisory",
      lineAfterHighlight:
        " with the commitment to efficiency and traceability that large corporations do not offer at a human scale.",
      bullet1:
        "Consultative model: your context first, volume second.",
      bullet2:
        "Direct communication with specialists — no bureaucracy.",
      yearLabel: "Year founded",
      statLabel: "Years of experience",
      statValue: "+25",
    },
    services: {
      kicker: "Services",
      title: "The essentials, executed well",
      subtitle:
        "Modular solutions to import and export with visibility at every stage of the process.",
      items: [
        {
          title: "Import & Export Solutions",
          description:
            "Trading and tailored B2B solutions for SMEs and entrepreneurs.",
        },
        {
          title: "International Transport",
          description:
            "FCL / LCL, Air and Road freight with real-time tracking.",
        },
        {
          title: "Customs Management",
          description:
            "Agile advisory on regulations and foreign trade documentation.",
        },
        {
          title: "Comprehensive Services",
          description:
            "Door-to-door coordination, cargo consolidation, and cargo insurance.",
        },
      ],
    },
    reviews: {
      kicker: "Verified trust",
      title: "What our clients say",
      subtitle: "Public Google Maps reviews that reflect the way we work.",
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
            "Excellent coordination with external vendors. They met every deadline and expectation.",
          name: "Lucía Fernández",
          role: "E-commerce",
        },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Let's talk about your next move",
      subtitle:
        "Fill out the form or reach us on WhatsApp. We prioritize commercial and operational inquiries.",
      officeLabel: "Office",
      officeAddress: "Minas 1543/502 – Port area, Montevideo, Uruguay",
      emailLabel: "Email",
      formTitle: "Quote with no commitment",
      formDescription:
        "Tell us about your operation and we'll get back to you within 24 hours.",
      labelName: "Name and company",
      placeholderName: "Your name",
      labelEmail: "Email",
      placeholderEmail: "name@company.com",
      labelMessage: "Message",
      placeholderMessage:
        "Origin, destination, and cargo type (if applicable).",
      submit: "Send inquiry",
      successMessage: "Inquiry sent! We'll get back to you shortly.",
    },
    footer: {
      rights: (year) => `© ${year} BPORT Logistics. All rights reserved.`,
      location: "Montevideo, Uruguay",
      tagline: "Connecting your cargo to the world.",
    },
    fab: {
      label: "Chat on WhatsApp",
      labelShort: "WhatsApp",
    },
    whatsappPrefill:
      "Hello BPORT Logistics, I would like to inquire about my shipments.",
  },

  pt: {
    meta: {
      title: "BPORT Logistics | Conectamos sua carga ao mundo",
      description:
        "Logística internacional desde 2000. Transporte FCL/LCL, porta a porta e assessoria aduaneira. Montevidéu, Uruguai.",
    },
    logoAlt: "BPORT Logistics",
    nav: {
      primary: "Principal",
      sections: "Seções",
      about: "Sobre nós",
      services: "Serviços",
      reviews: "Avaliações",
      contact: "Contato",
      whatsapp: "WhatsApp",
    },
    hero: {
      eyebrow: "Logística Internacional",
      title: "Conectamos sua carga",
      titleHighlight: "ao mundo",
      subtitle:
        "Mais de 20 anos de experiência operacional. Assessoria personalizada para pequenas e médias empresas que querem operar em escala global.",
      ctaWhatsApp: "Cotar sua carga hoje",
      ctaServices: "Ver serviços",
      trustBadge: "Desde 2000 · Montevidéu, Uruguai",
    },
    about: {
      kicker: "Sobre nós",
      title: "Trajetória e acompanhamento próximo",
      lineBeforeHighlight:
        "Baseados no Uruguai com operações regionais e uma rede global de agentes confiáveis na China e mercados-chave. Oferecemos ",
      highlight: "assessoria personalizada",
      lineAfterHighlight:
        " com compromisso de eficiência e rastreabilidade que as grandes corporações não oferecem em escala humana.",
      bullet1:
        "Modelo consultivo: seu contexto em primeiro lugar.",
      bullet2:
        "Comunicação direta com especialistas — sem burocracia.",
      yearLabel: "Ano de fundação",
      statLabel: "Anos de experiência",
      statValue: "+25",
    },
    services: {
      kicker: "Serviços",
      title: "O essencial, bem executado",
      subtitle:
        "Soluções modulares para importar e exportar com visibilidade em cada etapa.",
      items: [
        {
          title: "Importação & Exportação",
          description:
            "Trading e soluções B2B sob medida para PMEs e empreendedores.",
        },
        {
          title: "Transporte Internacional",
          description:
            "FCL / LCL, Aéreo e Rodoviário com rastreamento em tempo real.",
        },
        {
          title: "Gestão Aduaneira",
          description:
            "Assessoria ágil em normas e documentação de comércio exterior.",
        },
        {
          title: "Serviços Integrais",
          description:
            "Coordenação porta a porta, consolidação de cargas e seguro de carga.",
        },
      ],
    },
    reviews: {
      kicker: "Confiança verificada",
      title: "O que nossos clientes dizem",
      subtitle: "Avaliações públicas do Google Maps que refletem como trabalhamos.",
      googleBadge: "Google",
      starsAria: (rating) => `${rating} de 5 estrelas`,
      viewMaps: "Ver perfil no Google Maps",
      items: [
        {
          quote:
            "Respostas ágeis e critério claro em cada consulta. O acompanhamento nos deu tranquilidade em um envio complexo.",
          name: "María González",
          role: "Importação varejo",
        },
        {
          quote:
            "Profissionais e transparentes. Destaco o atendimento próximo sem abrir mão do rigor documental.",
          name: "Andrés Pereira",
          role: "PME industrial",
        },
        {
          quote:
            "Excelente coordenação com fornecedores externos. Cumpriram prazos e expectativas.",
          name: "Lucía Fernández",
          role: "E-commerce",
        },
      ],
    },
    contact: {
      kicker: "Contato",
      title: "Vamos falar sobre sua próxima operação",
      subtitle:
        "Preencha o formulário ou fale conosco pelo WhatsApp. Priorizamos consultas comerciais e operacionais.",
      officeLabel: "Escritório",
      officeAddress: "Minas 1543/502 – Zona Portuária, Montevidéu, Uruguai",
      emailLabel: "E-mail",
      formTitle: "Cotar sem compromisso",
      formDescription:
        "Conte-nos sobre sua operação e responderemos em até 24 horas.",
      labelName: "Nome e empresa",
      placeholderName: "Seu nome",
      labelEmail: "E-mail",
      placeholderEmail: "nome@empresa.com",
      labelMessage: "Mensagem",
      placeholderMessage:
        "Origem, destino e tipo de carga (se aplicável).",
      submit: "Enviar consulta",
      successMessage: "Consulta enviada! Retornaremos em breve.",
    },
    footer: {
      rights: (year) =>
        `© ${year} BPORT Logistics. Todos os direitos reservados.`,
      location: "Montevidéu, Uruguai",
      tagline: "Conectando sua carga ao mundo.",
    },
    fab: {
      label: "Falar no WhatsApp",
      labelShort: "WhatsApp",
    },
    whatsappPrefill:
      "Olá BPORT Logistics, gostaria de consultar sobre meus envios.",
  },
};

export function getMessages(locale: Locale): Messages {
  return translations[locale];
}