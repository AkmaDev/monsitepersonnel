"use client";
import { AboutSection } from "@/components/cv/About";
import ContactSection from "@/components/cv/ContactSection";
import { ExperienceSection } from "@/components/cv/ProfessionalExperience";
import { HeroSection } from "@/components/cv/ProfileHeader";
import { ProjectsSection } from "@/components/cv/Projects";

import { SkillsSection } from "@/components/cv/Skills";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import React from "react";

const Page = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-4 left-4 z-50">
        <Button
          variant="ghost"
          onClick={() => router.back()} // redirige vers la page d’accueil
          className="hover:bg-background hover:text-foreground"
        >
          ← Retour
        </Button>
      </div>

      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Page;
