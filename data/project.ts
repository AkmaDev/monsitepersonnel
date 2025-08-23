export interface Project {
  id: number;
  title: string;
  description: string;
  type: "poster" | "video" | "animation";
  category: string;
  image: string;
  link: string;
  platform: string;
  technologies: string[];
  year: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Affiches Événementielles",
    description:
      "Création d'affiches pour des événements religieux ou communautaires, incluant thème, orateur, dates, lieu et informations de contact. Parfait pour informer et engager les participants.",
    type: "poster",
    category: "Affiches",
    image: "/portfolio-affiches.jpg",
    link: "https://www.instagram.com/manasse_design",
    platform: "Instagram",
    technologies: ["Photoshop", "Illustrator", "Design Graphique", "Canva"],
    year: "2025",
  },
  // {
  //   id: 2,
  //   title: "Trailer - Flipbook Bible Enfants",
  //   description:
  //     "Vidéo interactive présentant l'application de lecture biblique pour enfants, combinant narration, animations et effets visuels engageants.",
  //   type: "video",
  //   category: "Vidéos",
  //   image: "/portfolio-videos.jpg",
  //   link: "https://www.youtube.com/@ManasseOse",
  //   platform: "YouTube",
  //   technologies: ["After Effects", "Premiere Pro", "Motion Design", "Edits créatifs"],
  //   year: "2024",
  // },
  {
    id: 2,
    title: "Edits et Montages Créatifs",
    description:
      "Montages courts et dynamiques (edits) pour divers contenus, utilisant musique, effets visuels, et techniques tendances comme Time Warp Scan, loops ou transitions rapides.",
    type: "video",
    category: "Vidéos",
    image: "/portfolio-videos.jpg",
    link: "https://www.youtube.com/@ManasseOse",
    platform: "YouTube",
    technologies: ["After Effects", "CapCut", "Premiere Pro", "Montage Créatif"],
    year: "2025",
  },
  // Tu peux continuer à ajouter d'autres projets ici...
];
