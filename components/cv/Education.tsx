"use client";

import { siteConfig } from "@/types/site";
import { motion } from "framer-motion";
import { Calendar, MapPin, GraduationCap } from "lucide-react";

export function EducationSection() {
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
          className="text-3xl font-display font-semibold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Formation
        </motion.h2>

        <div className="space-y-8">
          {siteConfig.education.map((edu, index) => (
            <motion.article
              key={index}
              className="card-premium"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <header className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                <div>
                  <h3 className="text-xl font-display font-medium text-foreground mb-2">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <GraduationCap className="w-4 h-4" />
                    <span className="font-medium">{edu.institution}</span>
                  </div>
                </div>

                <div className="flex flex-col lg:items-end gap-1 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <time>{edu.period}</time>
                  </div>
                  {edu.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  )}
                </div>
              </header>

              {edu.description && edu.description.length > 0 && (
                <ul className="space-y-2" role="list">
                  {edu.description.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <div
                        className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
