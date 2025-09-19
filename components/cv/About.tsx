"use client";

import { siteConfig } from "@/types/site";
import { motion } from "framer-motion";
import { JSX } from "react";

export function AboutSection(): JSX.Element {
  const text = siteConfig.about.description;

  // Mots à mettre en primary
  const highlights = [
    "Product Building",
    "prototypage rapide",
    "intégration API/IA",
    "conception de MVP orientés impact business",
  ];

  // Fonction pour transformer le texte en JSX
  const renderHighlightedText = (text: string) => {
    const regex = new RegExp(`(${highlights.join("|")})`, "g");

    const parts = text.split(regex); // découpe en incluant les mots

    return parts.map((part, idx) =>
      highlights.includes(part) ? (
        <span key={idx} className="text-primary font-medium">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <motion.section
      className="section-spacing"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.article
          className="card-premium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-display font-semibold mb-6 text-primary">
            {siteConfig.about.title}
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {renderHighlightedText(text)}
          </p>
        </motion.article>
      </div>
    </motion.section>
  );
}
