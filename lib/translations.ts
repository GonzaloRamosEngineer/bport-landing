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
    process: string;
    forWhom: string;
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
    },
    trust: {
      kicker: "Confianza",
      title: "Datos que transmiten solidez desde el primer scroll.",
      subtitle: "Brindamos el respaldo logístico y la experiencia operativa que los emprendedores y pequeñas empresas necesitan para operar a escala global con total seguridad.",
      stats: [
        { target: 20, suffix: "+", label: "años de experiencia operativa" },
        { target: 500, suffix: "+", label: "cargas gestionadas" },
        { target: 18, suffix: "+", label: "mercados y rutas conectadas" },
        { target: 24, suffix: "/7", label: "seguimiento y acompañamiento" },
      ],
    },
    process: {
      kicker: "Proceso",
      title: "Una operación más clara, más ordenada y mejor presentada.",
      subtitle: "Un método de trabajo claro, ágil y sin burocracia, diseñado para simplificar cada etapa de tu importación y darte mayor tranquilidad.",
      items: [
        { step: "01", title: "Nos contás qué querés importar", description: "Entendemos producto, origen, volumen y contexto de negocio." },
        { step: "02", title: "Definimos la mejor estrategia logística", description: "Buscamos una solución más conveniente según tiempos y costos." },
        { step: "03", title: "Coordinamos de punta a punta", description: "Documentación, seguimiento y acompañamiento durante todo el proceso." },
        { step: "04", title: "Recibís la carga con mayor tranquilidad", description: "Menos incertidumbre, más control y mejor experiencia de operación." },
      ],
    },
    forWhom: {
      kickerTarget: "Para quién es",
      targetTitle: "Hecho para empresas chicas que necesitan respaldo grande.",
      targetItems: [
        { title: "Emprendedores que importan por primera vez.", description: "Necesitan acompañamiento claro y una guía confiable." },
        { title: "Marcas e-commerce en crecimiento.", description: "Buscan importar mejor, sin perder tiempo ni plata en errores evitables." },
        { title: "PYMES que quieren escalar su operación.", description: "Requieren una logística más ordenada, previsible y profesional." }
      ],
      kickerDiff: "Diferencial",
      diffTitle: "Por qué elegir BPORT",
      diffItems: [
        { title: "Atención personalizada.", description: "No sos un número ni una operación más dentro de un sistema." },
        { title: "Experiencia operativa real.", description: "No vendemos humo: entendemos la ejecución, los tiempos y los riesgos." },
        { title: "Enfoque en simplificarte la vida.", description: "Menos complejidad, más claridad y mejor toma de decisiones." }
      ],
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
        " con el compromiso de eficiencia y trazabilidad que las grandes corporaciones no ofrecen a escala humana. Nuestra filosofía es 'B Fast, B Smart': brindamos agilidad mental y operativa para resolver los problemas de tu negocio.",
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
        "Completá el formulario o escribinos por WhatsApp al +598 92 330925. Respondemos con prioridad a consultas comerciales y operativas.",
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
    },
    trust: {
      kicker: "Trust",
      title: "Data that conveys solidity from the first scroll.",
      subtitle: "This section keeps the idea you liked, but now with dynamic counters and a more premium look to reinforce authority.",
      stats: [
        { target: 20, suffix: "+", label: "years of operational experience" },
        { target: 500, suffix: "+", label: "shipments managed" },
        { target: 18, suffix: "+", label: "markets and routes connected" },
        { target: 24, suffix: "/7", label: "tracking and support" },
      ],
    },
    process: {
      kicker: "Process",
      title: "A clearer, more structured, and better-presented operation.",
      subtitle: "This part adopts the system / industrial / premium visual language seen in the reference, but without losing clarity.",
      items: [
        { step: "01", title: "Tell us what you want to import", description: "We understand the product, origin, volume, and business context." },
        { step: "02", title: "We define the best strategy", description: "We look for a more convenient solution based on time and costs." },
        { step: "03", title: "End-to-end coordination", description: "Documentation, tracking, and support throughout the entire process." },
        { step: "04", title: "Receive your cargo with peace of mind", description: "Less uncertainty, more control, and a better operational experience." },
      ],
    },
    forWhom: {
      kickerTarget: "For whom",
      targetTitle: "Built for small companies that need big backing.",
      targetItems: [
        { title: "First-time importers.", description: "They need clear guidance and reliable support." },
        { title: "Growing e-commerce brands.", description: "Looking to import better, without wasting time or money on avoidable mistakes." },
        { title: "SMEs looking to scale their operation.", description: "Require more orderly, predictable, and professional logistics." }
      ],
      kickerDiff: "Differentiator",
      diffTitle: "Why choose BPORT",
      diffItems: [
        { title: "Personalized attention.", description: "You're not just a number or another operation in a system." },
        { title: "Real operational experience.", description: "We understand execution, timing, and risks." },
        { title: "Focused on simplifying your life.", description: "Less complexity, more clarity, and better decision-making." }
      ],
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
    },
    trust: {
      kicker: "Confiança",
      title: "Dados que transmitem solidez desde o primeiro scroll.",
      subtitle: "Esta seção mantém a ideia, agora com contadores dinâmicos e um visual mais premium para reforçar a autoridade.",
      stats: [
        { target: 20, suffix: "+", label: "anos de experiência operacional" },
        { target: 500, suffix: "+", label: "cargas gerenciadas" },
        { target: 18, suffix: "+", label: "mercados e rotas conectadas" },
        { target: 24, suffix: "/7", label: "rastreamento e suporte" },
      ],
    },
    process: {
      kicker: "Processo",
      title: "Uma operação mais clara, ordenada e bem apresentada.",
      subtitle: "Adotamos a linguagem visual industrial vista na referência, mas sem perder a clareza para o cliente BPORT.",
      items: [
        { step: "01", title: "Conte-nos o que você quer importar", description: "Entendemos o produto, origem, volume e contexto de negócios." },
        { step: "02", title: "Definimos a melhor estratégia", description: "Buscamos a solução mais conveniente segundo o tempo e os custos." },
        { step: "03", title: "Coordenação de ponta a ponta", description: "Documentação, rastreamento e suporte durante todo o processo." },
        { step: "04", title: "Receba a carga com tranquilidade", description: "Menos incerteza, mais controle e uma melhor experiência." },
      ],
    },
    forWhom: {
      kickerTarget: "Para quem",
      targetTitle: "Construído para pequenas empresas que precisam de um grande apoio.",
      targetItems: [
        { title: "Importadores de primeira viagem.", description: "Eles precisam de orientação clara e confiável." },
        { title: "Marcas de e-commerce em crescimento.", description: "Buscando importar melhor, sem perder tempo ou dinheiro com erros." },
        { title: "PMEs que buscam escalar sua operação.", description: "Exigem logística mais ordenada, previsível e profissional." }
      ],
      kickerDiff: "Diferencial",
      diffTitle: "Por que escolher a BPORT",
      diffItems: [
        { title: "Atenção personalizada.", description: "Você não é apenas um número ou mais uma operação em um sistema." },
        { title: "Experiência operacional real.", description: "Nós entendemos a execução, tempo e os riscos reais." },
        { title: "Foco em simplificar sua vida.", description: "Menos complexidade, mais clareza e melhores tomadas de decisão." }
      ],
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
      "Olá BPORT Logistics, venho do site e tenho uma dúvida.",
    whatsappServicePrefill: (serviceName) =>
      `Olá BPORT Logistics, venho do site e estou interessado no serviço de ${serviceName}. Gostaria de mais informações.`,
  },
};

export function getMessages(locale: Locale): Messages {
  return translations[locale];
}