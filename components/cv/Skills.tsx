"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/types/site";

export function SkillsSection() {
  return (
    <motion.section
      className="section-spacing"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-display font-semibold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Compétences
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.article
            className="card-premium"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-display font-medium mb-6 text-foreground">
              Compétences Techniques
            </h3>
            <ul className="flex flex-wrap gap-3" role="list">
              {siteConfig.skills.technical.map((skill, index) => (
                <li key={index}>
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors px-3 py-1"
                  >
                    {skill}
                  </Badge>
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            className="card-premium"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-display font-medium mb-6 text-foreground">
              Compétences Transversales
            </h3>
            <ul className="flex flex-wrap gap-3" role="list">
              {siteConfig.skills.soft.map((skill, index) => (
                <li key={index}>
                  <Badge
                    variant="outline"
                    className="border-muted-foreground/30 text-muted-foreground hover:border-primary hover:text-primary transition-colors px-3 py-1"
                  >
                    {skill}
                  </Badge>
                </li>
              ))}
            </ul>
          </motion.article>
        </div>
      </div>
    </motion.section>
  );
}
