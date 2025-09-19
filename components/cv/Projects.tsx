"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
// import Link from "next/link";
import { siteConfig } from "@/types/site";

export function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="section-spacing"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-display font-semibold mb-12 text-center text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projets Phares
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {siteConfig.projects.map((project, index) => {
            // const projectSlug = project.title
            //   .toLowerCase()
            //   .replace(/[^a-z0-9]+/g, "-")
            //   .replace(/(^-|-$)/g, "");

            return (
              <motion.article
                key={index}
                className="card-premium group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <header className="mb-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-display font-medium text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <Badge
                      variant={
                        project.status === "Terminé" ? "default" : "secondary"
                      }
                      className={
                        project.status === "Terminé"
                          ? "bg-green-500/20 text-green-400 border-green-500/30"
                          : "bg-primary/20 text-primary border-primary/30"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                  {/* <p className="text-sm text-primary font-medium mb-3">
                    {project.type}
                  </p> */}
                </header>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div
                  className="flex flex-wrap gap-2 mb-6"
                  role="list"
                  aria-label="Technologies utilisées"
                >
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="tech-badge bg-secondary/50 text-foreground border-border/50"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <footer className="flex gap-3">
                  {/* Lien externe vers site live */}
                  {project.link && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 hover:bg-primary/10 hover:border-primary/50 transition-all"
                      asChild
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Voir le projet ${project.title} en ligne (ouvre dans un nouvel onglet)`}
                        className="flex items-center"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  )}

                  {/* Lien externe vers GitHub */}
                  {project.github && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hover:bg-secondary/20 hover:text-primary transition-colors"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Code source de ${project.title} (ouvre dans un nouvel onglet)`}
                        className="flex items-center"
                      >
                        <FaGithub className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                </footer>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <article className="card-premium">
            <h3 className="text-xl font-display font-medium text-foreground mb-4">
              Portfolio Créatif
            </h3>
            <p className="text-muted-foreground mb-6">
              Découvrez mes créations graphiques, affiches et vidéos réalisées
              pour divers projets et clients.
            </p>

            <Button className="btn-professional" asChild>
              <a
                href="https://www.manasseakpovi.com/portfoliodesign"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
                aria-label="Voir mon portfolio design"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Voir Portfolio Design
              </a>
            </Button>
          </article>
        </motion.div>
      </div>
    </motion.section>
  );
}
