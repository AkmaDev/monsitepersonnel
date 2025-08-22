// data/projects.ts
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
    title: "Campagne Publicitaire - Produits Locaux",
    description:
      "Série d'affiches pour la promotion des producteurs locaux béninois, mettant en valeur l'authenticité et la qualité des produits artisanaux.",
    type: "poster",
    category: "Affiches",
    image: "/portfolio-affiches.jpg",
    link: "https://www.instagram.com/manasse_design",
    platform: "Instagram",
    technologies: ["Photoshop", "Illustrator", "Design Graphique"],
    year: "2024",
  },
  {
    id: 2,
    title: "Trailer - Flipbook Bible Enfants",
    description:
      "Vidéo de présentation interactive pour l'application de lecture biblique destinée aux enfants, avec animations et narration engageante.",
    type: "video",
    category: "Vidéos",
    image: "/portfolio-videos.jpg",
    link: "https://www.youtube.com/@ManasseOse",
    platform: "YouTube",
    technologies: ["After Effects", "Premiere Pro", "Motion Design"],
    year: "2024",
  },
  // ... le reste de tes projets
];
