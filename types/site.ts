// /types/site.ts
export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  profileImage: string;
  hero: {
    variant: 'minimal' | 'with-image';
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
    ctaUrl?: string;
    heroImage?: string;
  };
  socialLinks: {
    linkedin: string;
    github: string;
    portfolioWeb: string;
    portfolioDesign: string;
  };
  experiences: Array<{
    company: string;
    position: string;
    location: string;
    period: string;
    achievements: string[];
  }>;
  projects: Array<{
    title: string;
    description: string;
    type: 'Projet de soutenance' | 'Projet en cours' | 'Autre';
    technologies: string[];
    status: 'Terminé' | 'En développement';
    link: string;
    github?: string;
    features?: string[];
    year?: string;
  }>;
  // <-- NOUVEAU : Éducation
  education: Array<{
    degree: string;
    institution: string;
    location?: string;
    period: string;
    description?: string[]; // points clés (optionnel)
  }>;
  skills: {
    technical: string[];
    soft: string[];
  };
  about: {
    title: string;
    description: string;
  };
  analytics?:
    | { enabled: true; provider: 'plausible'; plausibleDomain: string }
    | { enabled: true; provider: 'ga4'; ga4MeasurementId: string }
    | { enabled: false };
}

// -------- siteConfig (extrait complet ci-dessous) --------
export const siteConfig: SiteConfig = {
  name: "Manassé AKPOVI",
  title: "Manassé AKPOVI | Product Builder — Numérique Inclusif & Impact Afrique",
  description:
    "Créateur de produits numériques à la croisée de la culture africaine et du design inclusif. À l’origine de BibleFon — histoires bibliques illustrées en langue fon pour les communautés orales du Bénin. Expérimenté en product building, intégration IA, et conception de solutions pour des publics que les outils numériques ignorent habituellement.",
  email: "manews193@gmail.com",
  phone: "+33 7 43 68 02 30",
  location: "Paris, France",
  profileImage: "/photoMoi.png",

  hero: {
    variant: "with-image",
    title: "Manassé AKPOVI",
    subtitle: "Product Builder · Numérique Inclusif · Afrique & Impact",
    description:
      "Créateur de produits numériques à la croisée de la culture africaine et du design inclusif. À l’origine de BibleFon — histoires bibliques illustrées en langue fon pour les communautés orales du Bénin. Expérimenté en product building, intégration IA, et conception de solutions pour des publics que les outils numériques ignorent habituellement.",
    ctaText: "Découvrir mes projets",
    ctaUrl: "#projects",
  },

  socialLinks: {
    linkedin: "https://www.linkedin.com/in/manasse-akpovi",
    github: "https://github.com/AkmaDev",
    portfolioWeb: "https://github.com/AkmaDev",
    portfolioDesign: "/portfoliodesign",
  },

  experiences: [
    {
      company: "NerdX Digital",
      position: "ReactJS Developer Intern",
      location: "Bénin",
      period: "03/2024 – 09/2024",
      achievements: [
        "Déploiement d’interfaces web responsives à partir de maquettes Figma, réduisant de 20% le temps de mise en production.",
        "Orchestration du cycle produit de l’idéation au code (React + Tailwind) pour améliorer la cohérence UX/UI.",
        "Collaboration étroite avec designers et chefs de projet pour garantir l’alignement produit et favoriser l’adoption utilisateur.",
      ],
    },
    {
      company: "JILMONDE Consulting",
      position: "Stagiaire Développeur Java",
      location: "Bénin",
      period: "04/2023 – 06/2023",
      achievements: [
        "Implémentation de tests unitaires (JUnit, JaCoCo) renforçant la robustesse et la qualité du code.",
        "Contribution à la mise en place de la validation continue, accélérant le cycle produit.",
      ],
    },
    {
      company: "AKS Pictures",
      position: "Stagiaire Développeur Python",
      location: "Bénin",
      period: "07/2022 – 08/2022",
      achievements: [
        "Développement de scripts interactifs pour un jeu narratif (Ren’Py), améliorant l’engagement utilisateur.",
        "Optimisation des assets graphiques via Photoshop, réduisant la taille moyenne des fichiers de 30%.",
      ],
    },
  ],

projects: [
  {
    title: "Pipeline IA — Prospection B2B via BODACC",
    description:
      "Détecte chaque matin les restaurants nouvellement ouverts dans le registre officiel français (BODACC), les score sur 15 critères, puis génère une séquence de 5 emails personnalisés avec Claude. Dashboard Streamlit pour envoyer et suivre les leads. Règles strictes anti-hallucination : zéro stat inventée, zéro nom fictif.",
    type: "Projet de soutenance",
    technologies: ["Python", "Claude API", "Streamlit", "BODACC", "Exa", "Notion API"],
    status: "En développement",
    link: "https://github.com/AkmaDev/prospection_pipeline",
    github: "https://github.com/AkmaDev/prospection_pipeline",
    features: [
      "Détection de signaux BODACC en temps réel",
      "Scoring sur 15 critères + séquence 5 emails",
      "Zéro donnée inventée — règles strictes anti-hallucination",
    ],
    year: "2025",
  },
  {
    title: "BibleFon — Histoires Bibliques en Langue Fon",
    description:
      "Plateforme de livres animés audio en langue fon. Illustrations IA, synthèse vocale (Meta MMS-TTS-Fon), architecture PWA offline-first. Conçu pour les familles béninoises non-lettrées — une grand-mère peut écouter David et Goliath dans sa langue maternelle sans savoir lire.",
    type: "Autre",
    technologies: ["Next.js", "React", "TypeScript", "HuggingFace", "TailwindCSS", "PWA"],
    status: "Terminé",
    link: "https://biblefon.org",
    github: undefined,
    year: "2026",
  },
  {
    title: "Juriste Vert – Automatisation prise de rendez-vous juridiques",
    description:
      "Automatisation complète du parcours client (Supabase, Resend, Google Calendar API, IA) permettant une prise de rendez-vous fluide et sans intervention humaine.",
    type: "Autre",
    technologies: ["Supabase", "Resend", "Google Calendar API", "Lovable AI"],
    status: "Terminé",
    link: "https://juristevert.com/",   // ✅ lien live
    github: undefined,                  // ou à remplir si dispo
    features: [
      "Automatisation de bout en bout",
      "Intégration IA pour optimiser le processus",
    ],
    year: "2024",
  },
  {
    title: "CV interactif & SEO",
    description:
      "Site personnel combinant CV, portfolio et blog (Next.js + Schema.org) optimisé pour le SEO et l’accessibilité (a11y).",
    type: "Autre",
    technologies: ["Next.js", "Schema.org", "TailwindCSS", "Lovable AI"],
    status: "Terminé",
    link: "https://nextjs-portfolio-template-swart.vercel.app/", // ✅ lien live
    github: "https://github.com/AkmaDev/nextjs-portfolio-template", // ✅ code
    year: "2024",
  },
  {
    title: "Visualiseur PDF – Flipbook animé",
    description:
      "Visualiseur de livres animés avec effet page-flip 3D. Architecture CSS 3D pure — après avoir éliminé Turn.js/jQuery (1200+ lignes remplacées par des animations natives). Double-page spread, transitions fluides, audio synchronisé. Ce projet est le socle technique sur lequel BibleFon v2 a été reconstruit.",
    type: "Autre",
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "CSS 3D", "Web Audio API"],
    status: "Terminé",
    link: "https://biblefon.vercel.app/",
    github: "https://github.com/AkmaDev/premiumflipbook",
    year: "2024",
  },
],


  // <-- NOUVELLE SECTION ÉDUCATION
  education: [
    {
      degree: "Bachelor Ingénierie Web",
      institution: "ESGI – École Supérieure de Génie Informatique",
      location: "Paris, France",
      period: "En cours",
      description: [
        "Programme orienté développement web, architecture applicative et UX.",
        "Projets pratiques : CV interactif, flipbook PDF, intégration d’APIs et prototypes produits.",
      ],
    },
    {
      degree: "Formation en Informatique",
      institution: "IFRI – Institut de Formation et de Recherche en Informatique",
      location: "Bénin",
      period: "2020 – 2024",
      description: [
        "Fondamentaux du développement (Python, Java), bases de données et méthodologies projet.",
        "Travaux notables : scripts interactifs Ren'Py et optimisation d’assets graphiques.",
      ],
    },
  ],

  skills: {
    technical: [
      "Numérique inclusif / Audio First",
      "Conception pour communautés orales",
      "Product Discovery",
      "MVP",
      "Prototypage rapide",
      "Wireframing",
      "User Research",
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Supabase",
      "Appwrite",
      "Python",
      "Java",
      "APIs",
      "Automatisation",
      "No-code tools",
      "IA générative",
      "Photoshop",
      "Figma",
    ],
    soft: [
      "Collaboration cross-fonctionnelle",
      "Communication claire",
      "Créativité",
      "Apprentissage rapide",
      "Sens business",
      "Travail en équipe internationale",
    ],
  },

  about: {
    title: "Profil Professionnel",
    description:
      "Mon approche du numérique part d'une question simple : pour qui ces outils sont-ils réellement conçus ? Avec BibleFon, j'ai répondu à cette question concrètement — en construisant un livre animé audio pour des familles qui communiquent oralement depuis des générations, dans une langue que le numérique ignore presque entièrement. Je recherche des équipes qui partagent cette conviction : que les meilleurs produits numériques sont ceux qui élargissent le cercle de qui peut en bénéficier.",
  },

  analytics: {
    enabled: true,
    provider: "plausible",
    plausibleDomain: "your-domain.com",
  },
};
