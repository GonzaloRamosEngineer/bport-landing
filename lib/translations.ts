export type Locale = "es" | "en" | "pt";

export const locales: Locale[] = ["es", "en", "pt"];

export const defaultLocale: Locale = "es";

export type PlanDetail = {
  title: string;
  items: string[];
};

export type ServiceCopy = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  mainFeatures: string[];
  targetAudience: string;
  details: PlanDetail[];
  importantNote?: string;
};

export type ReviewCopy = {
  quote: string;
  name: string;
  rating: number;
  role?: string;
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
    process: string;
    forWhom: string;
    tracking: string;
  };
  trust: {
    kicker: string;
    title: string;
    subtitle: string;
    stats: { target: number; suffix: string; label: string; }[];
  };
  process: {
    kicker: string;
    title: string;
    subtitle: string;
    items: { step: string; title: string; description: string; }[];
  };
  forWhom: {
    kickerTarget: string;
    targetTitle: string;
    targetItems: { title: string; description: string; }[];
    kickerDiff: string;
    diffTitle: string;
    diffItems: { title: string; description: string; }[];
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
  clients: {
    kicker: string;
    title: string;
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
    items: ReviewCopy[];
  };
  contact: {
    kicker: string;
    title: string;
    subtitle: string;
    subtitlePhone: string;
    subtitleAfterPhone: string;
    officeLabel: string;
    officeAddress: string;
    phoneLabel: string;
    phoneNumber: string;
    emailLabel: string;
    emails: { address: string; description: string }[];
    formTitle: string;
    formDescription: string;
    ctaWhatsAppAlt: string;
    ctaDiff: string;
    labelName: string;
    placeholderName: string;
    labelCompany: string;
    placeholderCompany: string;
    labelEmail: string;
    placeholderEmail: string;
    labelPhone: string;
    placeholderPhone: string;
    labelService: string;
    serviceOptions: Record<string, string>;
    labelMessage: string;
    placeholderMessage: string;
    privacyNoticeBefore: string;
    privacyNoticeLink: string;
    privacyNoticeAfter: string;
    submit: string;
    successMessage: string;
    errors: {
      required: string;
      email: string;
      minLength: string;
    };
    mapKicker: string;
    mapTitle: string;
    mapSubtitle: string;
    mapCta: string;
    mapAriaLabel: string;
    pinSrLabel: string;
  };
  footer: {
    rights: (year: number) => string;
    location: string;
    tagline: string;
    hoursLabel: string;
    hoursValue: string;
    backToTop: string;
    privacyPolicy: string;
    terms: string;
    trackingPortal: string;
  };
  fab: {
    label: string;
    labelShort: string;
  };
  whatsappPrefill: string;
  whatsappServicePrefill: (serviceName: string) => string;
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
      process: "Proceso",
      forWhom: "Para quién",
      tracking: "Seguimiento",
    },
    trust: {
      kicker: "Confianza",
      title: "La solidez y confianza que tu negocio necesita.",
      subtitle: "Te brindamos el respaldo logístico y la experiencia operativa que necesitás para que tu empresa opere a escala global con total seguridad.",
      stats: [
        { target: 20, suffix: "+", label: "años de experiencia operativa" },
        { target: 500, suffix: "+", label: "cargas gestionadas" },
        { target: 18, suffix: "+", label: "mercados y rutas conectadas" },
        { target: 24, suffix: "/7", label: "seguimiento y acompañamiento" },
      ],
    },
    process: {
      kicker: "Proceso",
      title: "Una operación clara, ordenada y sin sorpresas para vos.",
      subtitle: "Diseñamos un método de trabajo claro y ágil para simplificar cada etapa de tu importación y darte mayor tranquilidad.",
      items: [
        { step: "01", title: "Nos contás qué querés importar", description: "Entendemos tu producto, origen, volumen y el contexto de tu negocio." },
        { step: "02", title: "Diseñamos tu estrategia logística ideal", description: "Buscamos la solución más conveniente para tus tiempos y costos." },
        { step: "03", title: "Coordinamos tu carga de punta a punta", description: "Cuidamos la documentación y te acompañamos durante todo el proceso." },
        { step: "04", title: "Recibí tu carga con total tranquilidad", description: "Llevamos el control para que vos tengas menos incertidumbre y la mejor experiencia." },
      ],
    },
    forWhom: {
      kickerTarget: "Para quién es",
      targetTitle: "Diseñado para tu empresa: si necesitás respaldo grande, estamos para vos.",
      targetItems: [
        { title: "Si vas a importar por primera vez.", description: "Te brindamos acompañamiento claro y una guía confiable." },
        { title: "Si tu e-commerce está creciendo.", description: "Importá mejor, sin perder tiempo ni plata en errores evitables." },
        { title: "Si buscás escalar tu operación.", description: "Logramos una logística ordenada, previsible y profesional para tu PYME." }
      ],
      kickerDiff: "Diferencial",
      diffTitle: "Por qué elegirnos como tu partner",
      diffItems: [
        { title: "Atención 100% personalizada.", description: "Para nosotros, no sos un número ni una operación más." },
        { title: "Experiencia operativa real.", description: "Entendemos tu ejecución, tus tiempos y tus riesgos." },
        { title: "Nos enfocamos en simplificarte la vida.", description: "Menos complejidad para vos, más claridad y mejores decisiones de negocio." }
      ],
    },
    hero: {
      eyebrow: "Logística Internacional",
      title: "Conectamos tu carga",
      titleHighlight: "con el mundo",
      subtitle:
        "Más de 20 años de experiencia operativa real. Te asesoramos personalmente para que operes a escala global sin complicaciones.",
      ctaWhatsApp: "Cotizá tu carga hoy",
      ctaServices: "Conocé nuestros servicios",
      trustBadge: "Desde el año 2000 · Montevideo, Uruguay",
    },
    about: {
      kicker: "Sobre nosotros",
      title: "Nuestra trayectoria y acompañamiento cercano a vos",
      lineBeforeHighlight:
        "Con base en Uruguay y una red global de agentes confiables, te proveemos ",
      highlight: "asesoramiento personalizado",
      lineAfterHighlight:
        " con la eficiencia y trazabilidad que necesitás. Nuestra filosofía es 'B Fast, B Smart': aplicamos nuestra agilidad mental y operativa para resolver los desafíos de tu negocio.",
      bullet1:
        "Entendemos tu contexto primero, el volumen después.",
      bullet2:
        "Comunicate directo con nuestros especialistas.",
      yearLabel: "Año de inicio",
      statLabel: "Años de experiencia",
      statValue: "+25",
    },
    clients: {
      kicker: "Confían en nosotros",
      title: "Empresas que ya operan con BPORT",
    },
    services: {
      kicker: "Servicios",
      title: "Tus operaciones, ejecutadas a la perfección",
      subtitle:
        "Soluciones modulares para que importes y exportes con total visibilidad en cada etapa de tu proceso.",
      items: [
        {
          id: "import-export",
          title: "Importación & Exportación",
          subtitle: "TRADING & B2B",
          description: "Trading y soluciones B2B a medida para PyMEs y emprendedores.",
          icon: "Globe2",
          mainFeatures: ["Búsqueda de proveedores", "Negociación internacional", "Análisis de viabilidad"],
          targetAudience: "Emprendedores o empresas que buscan importar por primera vez o mejorar sus condiciones de compra.",
          details: [
            {
              title: "¿Qué resolvemos?",
              items: ["Evitamos intermediarios innecesarios.", "Validamos fábricas en origen (ej. China)."]
            },
            {
              title: "Metodología",
              items: ["Estudio de costos integrales (puerta a puerta).", "Gestión de muestras y certificaciones."]
            }
          ],
          importantNote: "Evaluamos el costo total antes de realizar cualquier compra en origen."
        },
        {
          id: "transporte",
          title: "Transporte Internacional",
          subtitle: "FCL / LCL & MULTIMODAL",
          description: "FCL / LCL, Aéreo y Terrestre con seguimiento en tiempo real.",
          icon: "Ship",
          mainFeatures: ["Flete Marítimo (FCL/LCL)", "Flete Aéreo Urgente", "Transporte Terrestre"],
          targetAudience: "Empresas que necesitan mover carga con tarifas competitivas y rutas eficientes.",
          details: [
            {
              title: "Opciones de transporte",
              items: ["Consolidación de carga LCL para volúmenes menores.", "Contenedores exclusivos FCL.", "Vuelos directos o con escalas estratégicas."]
            },
            {
              title: "Acompañamiento",
              items: ["Trazabilidad de tu embarque.", "Gestión de documentación de transporte (BL, AWB, CRT)."]
            }
          ],
          importantNote: "Cotizaciones sujetas a disponibilidad de espacio y tarifas vigentes."
        },
        {
          id: "aduanas",
          title: "Gestión Aduanera",
          subtitle: "DESPACHOS & NORMATIVAS",
          description: "Asesoramiento ágil en normativas y documentación de comercio exterior.",
          icon: "FileCheck",
          mainFeatures: ["Clasificación Arancelaria", "Despachos Import/Export", "Certificados de Origen"],
          targetAudience: "Empresas que buscan evitar multas, demoras y sobrecostos en la Aduana.",
          details: [
            {
              title: "¿Qué trabajamos?",
              items: ["Anticipamos los requisitos legales antes del embarque.", "Coordinación de inspecciones físicas."]
            },
            {
              title: "Minimización de riesgos",
              items: ["Análisis técnico aduanero para correcta tributación.", "Liberación ágil de la mercadería."]
            }
          ],
          importantNote: "Recomendamos consultar normativas antes de confirmar cualquier compra."
        },
        {
          id: "integrales",
          title: "Servicios Integrales",
          subtitle: "PUERTA A PUERTA",
          description: "Coordinación puerta a puerta, consolidación de cargas y seguros de carga.",
          icon: "Briefcase",
          mainFeatures: ["Logística Door-to-Door", "Seguros Internacionales", "Almacenaje en destino"],
          targetAudience: "Clientes que prefieren delegar toda la operativa logística en un solo proveedor de confianza.",
          details: [
            {
              title: "Solución Llave en Mano",
              items: ["Retiramos en fábrica del proveedor y entregamos en tu depósito.", "Cobertura de riesgos con seguros Todo Riesgo."]
            },
            {
              title: "Beneficios",
              items: ["Un único punto de contacto.", "Control total sin tener que coordinar múltiples actores."]
            }
          ],
          importantNote: "Servicio altamente personalizado según las necesidades de tu supply chain."
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
            "Excelente experiencia. Ya importamos varias veces con BPORT Logistics y siempre recibimos un trato profesional, atento y claro. Javier nos ayudó a resolver dudas durante todo el proceso. Muy recomendable.",
          name: "Gonzalo Ramos",
          rating: 5,
        },
      ],
    },
    contact: {
      kicker: "Contacto",
      title: "Hablemos de tu próximo movimiento",
      subtitle:
        "Completá el formulario o llamanos al ",
      subtitlePhone: "+598 92 330925",
      subtitleAfterPhone:
        ". Respondemos con prioridad a consultas comerciales y operativas.",
      officeLabel: "Oficina",
      officeAddress: "Minas 1543/502 – Zona Centro, Montevideo, Uruguay",
      phoneLabel: "Teléfono",
      phoneNumber: "+598 92 330925",
      emailLabel: "Email",
      emails: [
        { address: "info@bportlogistics.com", description: "Consultas generales" },
        { address: "ventas@bportlogistics.com", description: "Nuevos negocios" },
        { address: "cotizaciones@bportlogistics.com", description: "Tarifas y fletes" },
        { address: "administracion@bportlogistics.com", description: "Facturación y pagos" },
      ],
      formTitle: "Cotiza sin compromiso",
      formDescription:
        "Cuéntanos sobre tu operación y nos comunicaremos en menos de 24 horas.",
      ctaWhatsAppAlt: "Prefiero escribir por WhatsApp",
      ctaDiff: "Empezá tu consulta ahora",
      labelName: "Nombre y Apellido",
      placeholderName: "Tu nombre completo",
      labelCompany: "Empresa (Opcional)",
      placeholderCompany: "Tu empresa",
      labelEmail: "Email",
      placeholderEmail: "nombre@empresa.com",
      labelPhone: "Teléfono / WhatsApp (Opcional)",
      placeholderPhone: "+598 99 123 456",
      labelService: "Servicio de interés",
      serviceOptions: {
        import: "Importación",
        export: "Exportación",
        transport: "Transporte Internacional",
        customs: "Despacho de Aduanas",
        other: "Otro / Asesoramiento",
      },
      labelMessage: "Mensaje",
      placeholderMessage:
        "Origen, destino y tipo de carga (si aplica).",
      privacyNoticeBefore: "Al enviar este formulario aceptás nuestra ",
      privacyNoticeLink: "Política de privacidad",
      privacyNoticeAfter: ".",
      submit: "Enviar consulta",
      successMessage: "¡Consulta enviada! Nos pondremos en contacto a la brevedad.",
      errors: {
        required: "Este campo es obligatorio",
        email: "Ingresa un email válido",
        minLength: "El mensaje debe ser más largo",
      },
      mapKicker: "Visitanos",
      mapTitle: "Encontranos en Montevideo",
      mapSubtitle: "Estamos por la zona céntrica para que nos visites con mayor facilidad.",
      mapCta: "Cómo llegar",
      mapAriaLabel: "Mapa de ubicación de BPORT Logistics",
      pinSrLabel: "Ver dirección exacta",
    },
    footer: {
      rights: (year) =>
        `© ${year} BPORT Logistics. Todos los derechos reservados.`,
      location: "Montevideo, Uruguay",
      tagline: "Conectamos tu carga con el mundo.",
      hoursLabel: "Horario",
      hoursValue: "Lunes a viernes, 9:00 a 18:00",
      backToTop: "Volver arriba",
      privacyPolicy: "Política de privacidad",
      terms: "Términos y condiciones",
      trackingPortal: "Portal de seguimiento",
    },
    fab: {
      label: "Consultar por WhatsApp",
      labelShort: "WhatsApp",
    },
    whatsappPrefill:
      "Hola BPORT Logistics, vengo desde la web y tengo una consulta.",
    whatsappServicePrefill: (serviceName) =>
      `Hola BPORT Logistics, vengo desde la web y estoy interesado en el servicio de ${serviceName}. Quisiera más información.`,
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
      process: "Process",
      forWhom: "For whom",
      tracking: "Tracking",
    },
    trust: {
      kicker: "Trust",
      title: "The solidity and trust your business needs.",
      subtitle: "We provide the logistical backing and operational experience you need for your company to operate on a global scale with total security.",
      stats: [
        { target: 20, suffix: "+", label: "years of operational experience" },
        { target: 500, suffix: "+", label: "shipments managed" },
        { target: 18, suffix: "+", label: "markets and routes connected" },
        { target: 24, suffix: "/7", label: "tracking and support" },
      ],
    },
    process: {
      kicker: "Process",
      title: "A clear, organized operation with no surprises for you.",
      subtitle: "We design a clear, agile, and bureaucracy-free workflow to simplify every stage of your import and give you greater peace of mind.",
      items: [
        { step: "01", title: "Tell us what you want to import", description: "We understand your product, origin, volume, and business context." },
        { step: "02", title: "We design your ideal logistics strategy", description: "We find the most convenient solution tailored to your timing and costs." },
        { step: "03", title: "We coordinate your cargo end-to-end", description: "We handle the documentation and support you throughout the entire process." },
        { step: "04", title: "Receive your cargo with peace of mind", description: "We maintain control so you experience less uncertainty and a better operation." },
      ],
    },
    forWhom: {
      kickerTarget: "For whom",
      targetTitle: "Designed for your business: if you need big backing, we are here for you.",
      targetItems: [
        { title: "If you are importing for the first time.", description: "We provide clear guidance and reliable support." },
        { title: "If your e-commerce is growing.", description: "Import better, without wasting your time or money on avoidable mistakes." },
        { title: "If you want to scale your operation.", description: "We achieve orderly, predictable, and professional logistics for your SME." }
      ],
      kickerDiff: "Differentiator",
      diffTitle: "Why choose us as your partner",
      diffItems: [
        { title: "100% personalized attention.", description: "To us, you are not just a number or another operation." },
        { title: "Real operational experience.", description: "No empty promises: we understand your execution, your timing, and your risks." },
        { title: "We focus on simplifying your life.", description: "Less complexity for you, more clarity, and better business decisions." }
      ],
    },
    hero: {
      eyebrow: "International Logistics",
      title: "We connect your cargo",
      titleHighlight: "to the world",
      subtitle:
        "Over 20 years of real operational experience. We personally advise you so you can operate at a global scale without complications.",
      ctaWhatsApp: "Quote your cargo today",
      ctaServices: "Explore our services",
      trustBadge: "Since 2000 · Montevideo, Uruguay",
    },
    about: {
      kicker: "About us",
      title: "Our track record and hands-on guidance for you",
      lineBeforeHighlight:
        "Based in Uruguay and backed by a global network of reliable agents, we provide you with ",
      highlight: "personalized advisory",
      lineAfterHighlight:
        " with the efficiency and traceability you need. Our philosophy is 'B Fast, B Smart': we apply our mental and operational agility to solve your business challenges.",
      bullet1:
        "We understand your context first, your volume second.",
      bullet2:
        "Communicate directly with our specialists.",
      yearLabel: "Year founded",
      statLabel: "Years of experience",
      statValue: "+25",
    },
    clients: {
      kicker: "Trusted by",
      title: "Companies already operating with BPORT",
    },
    services: {
      kicker: "Services",
      title: "Your operations, executed to perfection",
      subtitle:
        "Modular solutions so you can import and export with total visibility at every stage of your process.",
      items: [
        {
          id: "import-export",
          title: "Import & Export",
          subtitle: "TRADING & B2B",
          description: "Trading and tailored B2B solutions for SMEs and entrepreneurs.",
          icon: "Globe2",
          mainFeatures: ["Supplier Sourcing", "International Negotiation", "Feasibility Analysis"],
          targetAudience: "Entrepreneurs or companies looking to import for the first time or improve purchasing conditions.",
          details: [
            {
              title: "What we solve",
              items: ["We avoid unnecessary intermediaries.", "We validate factories at origin (e.g., China)."]
            },
            {
              title: "Methodology",
              items: ["Comprehensive cost study (door-to-door).", "Sample and certification management."]
            }
          ],
          importantNote: "We evaluate the total cost before making any purchase at origin."
        },
        {
          id: "transporte",
          title: "International Transport",
          subtitle: "FCL / LCL & MULTIMODAL",
          description: "FCL / LCL, Air and Road freight with real-time tracking.",
          icon: "Ship",
          mainFeatures: ["Sea Freight (FCL/LCL)", "Urgent Air Freight", "Regional Road Freight"],
          targetAudience: "Companies needing to move cargo with competitive rates and efficient routes.",
          details: [
            {
              title: "Transport options",
              items: ["LCL cargo consolidation for smaller volumes.", "Exclusive FCL containers.", "Direct flights or strategic layovers."]
            },
            {
              title: "Support",
              items: ["Tracking of your shipment.", "Transport documentation management (BL, AWB, CRT)."]
            }
          ],
          importantNote: "Quotes are subject to space availability and current rates."
        },
        {
          id: "aduanas",
          title: "Customs Management",
          subtitle: "CLEARANCE & REGULATIONS",
          description: "Agile advisory on regulations and foreign trade documentation.",
          icon: "FileCheck",
          mainFeatures: ["Tariff Classification", "Import/Export Clearance", "Certificates of Origin"],
          targetAudience: "Companies looking to avoid fines, delays, and extra costs at Customs.",
          details: [
            {
              title: "What we do",
              items: ["We anticipate legal requirements before shipment.", "Coordination of physical inspections."]
            },
            {
              title: "Risk minimization",
              items: ["Technical customs analysis for correct taxation.", "Agile release of goods."]
            }
          ],
          importantNote: "We recommend consulting regulations before confirming any purchase."
        },
        {
          id: "integrales",
          title: "Comprehensive Services",
          subtitle: "DOOR TO DOOR",
          description: "Door-to-door coordination, cargo consolidation, and cargo insurance.",
          icon: "Briefcase",
          mainFeatures: ["Door-to-Door Logistics", "International Insurance", "Destination Warehousing"],
          targetAudience: "Clients who prefer to delegate all logistics operations to a single trusted provider.",
          details: [
            {
              title: "Turnkey Solution",
              items: ["We pick up at the supplier's factory and deliver to your warehouse.", "Risk coverage with All-Risk insurance."]
            },
            {
              title: "Benefits",
              items: ["A single point of contact.", "Total control without having to coordinate multiple actors."]
            }
          ],
          importantNote: "Highly personalized service according to your supply chain needs."
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
            "Excellent experience. We've imported with BPORT Logistics several times and always received professional, attentive and clear service. Javier helped us resolve our questions throughout the process. Highly recommended.",
          name: "Gonzalo Ramos",
          rating: 5,
        },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Let's talk about your next move",
      subtitle:
        "Fill out the form or reach us on WhatsApp at ",
      subtitlePhone: "+598 92 330925",
      subtitleAfterPhone:
        ". We respond with priority to commercial and operational inquiries.",
      officeLabel: "Office",
      officeAddress: "Minas 1543/502 – Downtown, Montevideo, Uruguay",
      phoneLabel: "Phone",
      phoneNumber: "+598 92 330925",
      emailLabel: "Email",
      emails: [
        { address: "info@bportlogistics.com", description: "General inquiries" },
        { address: "ventas@bportlogistics.com", description: "New business" },
        { address: "cotizaciones@bportlogistics.com", description: "Rates & freight" },
        { address: "administracion@bportlogistics.com", description: "Billing & payments" },
      ],
      formTitle: "Quote with no commitment",
      formDescription:
        "Tell us about your operation and we'll get back to you within 24 hours.",
      ctaWhatsAppAlt: "I prefer to write via WhatsApp",
      ctaDiff: "Start your inquiry now",
      labelName: "First and Last Name",
      placeholderName: "Your full name",
      labelCompany: "Company (Optional)",
      placeholderCompany: "Your company",
      labelEmail: "Email",
      placeholderEmail: "name@company.com",
      labelPhone: "Phone / WhatsApp (Optional)",
      placeholderPhone: "+598 99 123 456",
      labelService: "Service of interest",
      serviceOptions: {
        import: "Import",
        export: "Export",
        transport: "International Transport",
        customs: "Customs Clearance",
        other: "Other / Advisory",
      },
      labelMessage: "Message",
      placeholderMessage:
        "Origin, destination, and cargo type (if applicable).",
      privacyNoticeBefore: "By submitting this form, you accept our ",
      privacyNoticeLink: "Privacy policy (ES)",
      privacyNoticeAfter: ".",
      submit: "Send inquiry",
      successMessage: "Inquiry sent! We'll get back to you shortly.",
      errors: {
        required: "This field is required",
        email: "Please enter a valid email",
        minLength: "Message must be longer",
      },
      mapKicker: "Come visit",
      mapTitle: "Come find us in Montevideo",
      mapSubtitle: "We're in the downtown area so you can drop by with ease.",
      mapCta: "Get directions",
      mapAriaLabel: "BPORT Logistics location map",
      pinSrLabel: "Show exact address",
    },
    footer: {
      rights: (year) => `© ${year} BPORT Logistics. All rights reserved.`,
      location: "Montevideo, Uruguay",
      tagline: "Connecting your cargo to the world.",
      hoursLabel: "Hours",
      hoursValue: "Monday to Friday, 9:00 AM to 6:00 PM",
      backToTop: "Back to top",
      privacyPolicy: "Privacy policy (ES)",
      terms: "Terms and conditions (ES)",
      trackingPortal: "Tracking portal (ES)",
    },
    fab: {
      label: "Chat on WhatsApp",
      labelShort: "WhatsApp",
    },
    whatsappPrefill:
      "Hello BPORT Logistics, I'm coming from the website and have a query.",
    whatsappServicePrefill: (serviceName) =>
      `Hello BPORT Logistics, I'm coming from the website and I am interested in the ${serviceName} service. I would like more information.`,
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
      process: "Processo",
      forWhom: "Para quem",
      tracking: "Rastreamento",
    },
    trust: {
      kicker: "Confiança",
      title: "A solidez e confiança que o seu negócio precisa.",
      subtitle: "Oferecemos o suporte logístico e a experiência operacional que você precisa para que sua empresa opere em escala global com total segurança.",
      stats: [
        { target: 20, suffix: "+", label: "anos de experiência operacional" },
        { target: 500, suffix: "+", label: "cargas gerenciadas" },
        { target: 18, suffix: "+", label: "mercados e rotas conectadas" },
        { target: 24, suffix: "/7", label: "rastreamento e suporte" },
      ],
    },
    process: {
      kicker: "Processo",
      title: "Uma operação clara, organizada e sem surpresas para você.",
      subtitle: "Desenhamos um método de trabalho claro y ágil para simplificar cada etapa da sua importação e dar a você maior tranquilidade.",
      items: [
        { step: "01", title: "Conte-nos o que você quer importar", description: "Entendemos o seu produto, origem, volume e o contexto do seu negócio." },
        { step: "02", title: "Desenhamos a sua estratégia logística ideal", description: "Buscamos a solução mais conveniente para o seu tempo e os seus custos." },
        { step: "03", title: "Coordenamos sua carga de ponta a ponta", description: "Cuidamos da documentação e acompanhamos você durante todo o processo." },
        { step: "04", title: "Receba sua carga com total tranquilidade", description: "Mantemos o controle para que você tenha menos incerteza e a melhor experiência." },
      ],
    },
    forWhom: {
      kickerTarget: "Para quem",
      targetTitle: "Desenhado para sua empresa: se você precisa de um grande apoio, estamos aqui para você.",
      targetItems: [
        { title: "Se você vai importar pela primeira vez.", description: "Oferecemos acompanhamento claro e um guia confiável para você." },
        { title: "Se o seu e-commerce está crescendo.", description: "Importe melhor, sem perder tempo ou dinheiro com erros evitáveis." },
        { title: "Se você busca escalar sua operação.", description: "Conquistamos uma logística ordenada, previsível e profissional para a sua PME." }
      ],
      kickerDiff: "Diferencial",
      diffTitle: "Por que nos escolher como seu parceiro",
      diffItems: [
        { title: "Atendimento 100% personalizado.", description: "Para nós, você não é apenas um número ou mais uma operação." },
        { title: "Experiência operacional real.", description: "Sem promessas vazias: nós entendemos a sua execução, o seu tempo e os seus riscos." },
        { title: "Foco em simplificar sua vida.", description: "Menos complexidade para você, mais clareza e melhores decisões de negócios." }
      ],
    },
    hero: {
      eyebrow: "Logística Internacional",
      title: "Conectamos sua carga",
      titleHighlight: "ao mundo",
      subtitle:
        "Mais de 20 anos de experiência operacional real. Assessoramos você pessoalmente para que opere em escala global sem complicações.",
      ctaWhatsApp: "Cote sua carga hoje",
      ctaServices: "Conheça nossos serviços",
      trustBadge: "Desde 2000 · Montevidéu, Uruguai",
    },
    about: {
      kicker: "Sobre nós",
      title: "Nossa trajetória e acompanhamento próximo a você",
      lineBeforeHighlight:
        "Com base no Uruguai e uma rede global de agentes confiáveis, oferecemos a você ",
      highlight: "assessoria personalizada",
      lineAfterHighlight:
        " com a eficiência e rastreabilidade que você precisa. Nossa filosofia é 'B Fast, B Smart': aplicamos nossa agilidade mental e operacional para resolver os desafios do seu negócio.",
      bullet1:
        "Entendemos seu contexto primeiro, o volume depois.",
      bullet2:
        "Comunique-se direto com nossos especialistas.",
      yearLabel: "Ano de fundação",
      statLabel: "Anos de experiência",
      statValue: "+25",
    },
    clients: {
      kicker: "Confiam em nós",
      title: "Empresas que já operam com a BPORT",
    },
    services: {
      kicker: "Serviços",
      title: "Suas operações, executadas à perfeição",
      subtitle:
        "Soluções modulares para que você importe e exporte com total visibilidade em cada etapa do seu processo.",
      items: [
        {
          id: "import-export",
          title: "Importação & Exportação",
          subtitle: "TRADING & B2B",
          description: "Trading e soluções B2B sob medida para PMEs e empreendedores.",
          icon: "Globe2",
          mainFeatures: ["Busca de Fornecedores", "Negociação Internacional", "Análise de Viabilidade"],
          targetAudience: "Empreendedores ou empresas que desejam importar pela primeira vez ou melhorar suas condições de compra.",
          details: [
            {
              title: "O que resolvemos",
              items: ["Evitamos intermediários desnecessários.", "Validamos fábricas na origem (ex. China)."]
            },
            {
              title: "Metodologia",
              items: ["Estudo completo de custos (porta a porta).", "Gestão de amostras e certificações."]
            }
          ],
          importantNote: "Avaliamos o custo total antes de realizar qualquer compra na origem."
        },
        {
          id: "transporte",
          title: "Transporte Internacional",
          subtitle: "FCL / LCL & MULTIMODAL",
          description: "FCL / LCL, Aéreo e Rodoviário com rastreamento em tempo real.",
          icon: "Ship",
          mainFeatures: ["Frete Marítimo (FCL/LCL)", "Frete Aéreo Urgente", "Transporte Rodoviário"],
          targetAudience: "Empresas que precisam movimentar cargas com tarifas competitivas e rotas eficientes.",
          details: [
            {
              title: "Opções de transporte",
              items: ["Consolidação LCL para volumes menores.", "Contêineres exclusivos FCL.", "Voos diretos ou com escalas estratégicas."]
            },
            {
              title: "Acompanhamento",
              items: ["Rastreabilidade do seu embarque.", "Gestão de documentação de transporte (BL, AWB, CRT)."]
            }
          ],
          importantNote: "Cotações sujeitas à disponibilidade de espaço e tarifas vigentes."
        },
        {
          id: "aduanas",
          title: "Gestão Aduaneira",
          subtitle: "DESPACHOS & NORMAS",
          description: "Assessoria ágil em normas e documentação de comércio exterior.",
          icon: "FileCheck",
          mainFeatures: ["Classificação Tarifária", "Despachos de Importação/Exportação", "Certificados de Origem"],
          targetAudience: "Empresas que buscam evitar multas, atrasos e custos extras na Alfândega.",
          details: [
            {
              title: "O que fazemos",
              items: ["Antecipamos requisitos legais antes do embarque.", "Coordenação de inspeções físicas."]
            },
            {
              title: "Minimização de riscos",
              items: ["Análise técnica aduaneira para tributação correta.", "Liberação ágil da mercadoria."]
            }
          ],
          importantNote: "Recomendamos consultar as normas antes de confirmar qualquer compra."
        },
        {
          id: "integrales",
          title: "Serviços Integrais",
          subtitle: "PORTA A PORTA",
          description: "Coordenação porta a porta, consolidação de cargas e seguro de carga.",
          icon: "Briefcase",
          mainFeatures: ["Logística Door-to-Door", "Seguros Internacionais", "Armazenamento no Destino"],
          targetAudience: "Clientes que preferem delegar toda a operação logística a um único fornecedor de confiança.",
          details: [
            {
              title: "Solução Chave na Mão",
              items: ["Retiramos na fábrica do fornecedor e entregamos no seu depósito.", "Cobertura de riscos com seguro Contra Todos os Riscos."]
            },
            {
              title: "Benefícios",
              items: ["Um único ponto de contato.", "Controle total sem precisar coordenar vários atores."]
            }
          ],
          importantNote: "Serviço altamente personalizado de acordo com as necessidades da sua supply chain."
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
            "Excelente experiência. Já importamos várias vezes com a BPORT Logistics e sempre recebemos um atendimento profissional, atencioso e claro. Javier nos ajudou a esclarecer dúvidas durante todo o processo. Muito recomendado.",
          name: "Gonzalo Ramos",
          rating: 5,
        },
      ],
    },
    contact: {
      kicker: "Contato",
      title: "Vamos falar sobre sua próxima operação",
      subtitle:
        "Preencha o formulário ou fale conosco pelo WhatsApp em ",
      subtitlePhone: "+598 92 330925",
      subtitleAfterPhone:
        ". Priorizamos consultas comerciais e operacionais.",
      officeLabel: "Escritório",
      officeAddress: "Minas 1543/502 – Centro, Montevidéu, Uruguai",
      phoneLabel: "Telefone",
      phoneNumber: "+598 92 330925",
      emailLabel: "E-mail",
      emails: [
        { address: "info@bportlogistics.com", description: "Consultas gerais" },
        { address: "ventas@bportlogistics.com", description: "Novos negócios" },
        { address: "cotizaciones@bportlogistics.com", description: "Tarifas e fretes" },
        { address: "administracion@bportlogistics.com", description: "Faturamento e pagamentos" },
      ],
      formTitle: "Cotar sem compromisso",
      formDescription:
        "Conte-nos sobre sua operação e retornaremos em menos de 24 horas.",
      ctaWhatsAppAlt: "Prefiro escrever pelo WhatsApp",
      ctaDiff: "Comece sua consulta agora",
      labelName: "Nome e Sobrenome",
      placeholderName: "Seu nome completo",
      labelCompany: "Empresa (Opcional)",
      placeholderCompany: "Sua empresa",
      labelEmail: "E-mail",
      placeholderEmail: "nome@empresa.com",
      labelPhone: "Telefone / WhatsApp (Opcional)",
      placeholderPhone: "+598 99 123 456",
      labelService: "Serviço de interesse",
      serviceOptions: {
        import: "Importação",
        export: "Exportação",
        transport: "Transporte Internacional",
        customs: "Despacho Aduaneiro",
        other: "Outro / Assessoria",
      },
      labelMessage: "Mensagem",
      placeholderMessage:
        "Origem, destino e tipo de carga (se aplicável).",
      privacyNoticeBefore: "Ao enviar este formulário, você aceita nossa ",
      privacyNoticeLink: "Política de privacidade (ES)",
      privacyNoticeAfter: ".",
      submit: "Enviar consulta",
      successMessage: "Consulta enviada! Entraremos em contato em breve.",
      errors: {
        required: "Este campo é obrigatório",
        email: "Insira um e-mail válido",
        minLength: "A mensagem deve ser mais longa",
      },
      mapKicker: "Venha nos visitar",
      mapTitle: "Venha nos encontrar em Montevidéu",
      mapSubtitle: "Estamos na zona central para você nos visitar com mais facilidade.",
      mapCta: "Como chegar",
      mapAriaLabel: "Mapa de localização da BPORT Logistics",
      pinSrLabel: "Ver endereço exato",
    },
    footer: {
      rights: (year) =>
        `© ${year} BPORT Logistics. Todos os direitos reservados.`,
      location: "Montevidéu, Uruguai",
      tagline: "Conectando sua carga ao mundo.",
      hoursLabel: "Horário",
      hoursValue: "Segunda a sexta, 9h às 18h",
      backToTop: "Voltar ao topo",
      privacyPolicy: "Política de privacidade (ES)",
      terms: "Termos e condições (ES)",
      trackingPortal: "Portal de rastreamento (ES)",
    },
    fab: {
      label: "Falar no WhatsApp",
      labelShort: "WhatsApp",
    },
    whatsappPrefill:
      "Olá BPORT Logistics, venho do site e tenho uma dúvida.",
    whatsappServicePrefill: (serviceName) =>
      `Olá BPORT Logistics, venho do site e estou interessado no serviço de ${serviceName}. Gostaria de mais informações.`,
  },
};

export function getMessages(locale: Locale): Messages {
  return translations[locale];
}
