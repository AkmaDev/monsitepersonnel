"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, ExternalLink, ArrowDown } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

// import { PDFExport } from "../PDFExport";
import Image from "next/image";
import { siteConfig } from "@/types/site";
// import { ModeToggle } from "../ModeToggle";
// import { ModeToggle } from "../ModeToggle";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    if (typeof window !== "undefined") {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (siteConfig.hero.variant === "minimal") {
    return (
      <header className="section-spacing">
        <div className="absolute top-6 right-6 flex gap-2">
          {/* <PDFExport /> */}
          {/* <ModeToggle /> */}
        </div>

        <motion.div
          className="text-center max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl font-display font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {siteConfig.hero.title}
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl font-display text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {siteConfig.hero.subtitle}
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {siteConfig.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="btn-professional mr-4"
              onClick={() => scrollToSection("projects")}
            >
              {siteConfig.hero.ctaText}
              <ArrowDown className="w-4 h-4 ml-2" />
            </Button>

            <Button size="lg" variant="outline" asChild>
              <a href={`mailto:${siteConfig.email}`}>Contactez-moi</a>
            </Button>
          </motion.div>
        </motion.div>
      </header>
    );
  }

  return (
    <header className="section-spacing">
      <div className="absolute top-6 right-6 flex gap-2 z-10">
        {/* <PDFExport /> */}
        {/* <ModeToggle /> */}
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            className="relative inline-block mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative inline-block mb-6">
              <Image
                src={siteConfig.profileImage}
                alt="Photo de profil"
                width={128}
                height={128}
                className="rounded-full mx-auto object-cover border-4 border-primary shadow-glow"
                priority
              />
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-10 animate-pulse"></div>
              <div className="absolute -inset-2 rounded-full bg-gradient-primary opacity-20 blur-xl animate-glow-pulse"></div>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl font-display font-bold mb-4 md:text-6xl text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {siteConfig.name}
          </motion.h1>

          <motion.h2
            className="text-2xl font-display text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {siteConfig.hero.subtitle}
          </motion.h2>

          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-8 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-4">
              {/* Bloc mail */}
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>

              {/* Bloc bouton */}
              <Button
                className="btn-professional"
                onClick={() => scrollToSection("contact")}
              >
                Me contacter
                <ArrowDown className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a
                href={`tel:${siteConfig.phone}`}
                className="hover:text-primary transition-colors"
              >
                {siteConfig.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{siteConfig.location}</span>
            </div> */}
          </motion.div>

          <motion.div
            className="flex justify-center gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button variant="outline" size="lg" asChild>
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                aria-label={`Visiter mon profil LinkedIn (ouvre dans un nouvel onglet)`}
              >
                <FaLinkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                LinkedIn
              </a>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <a
                href={siteConfig.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                aria-label={`Visiter mon profil GitHub (ouvre dans un nouvel onglet)`}
              >
                <FaGithub className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                GitHub
              </a>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <a
                href={siteConfig.socialLinks.portfolioDesign}
                className="group text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                aria-label="Voir mon portfolio design"
              >
                <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Portfolio Design
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
