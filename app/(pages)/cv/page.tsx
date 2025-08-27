"use client";
import About from "@/components/cv/About";
import ContactSection from "@/components/cv/ContactSection";
import ProfessionalExperience from "@/components/cv/ProfessionalExperience";
import ProfileHeader from "@/components/cv/ProfileHeader";
import Projects from "@/components/cv/Projects";
import Skills from "@/components/cv/Skills";
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

      <ProfileHeader />
      <About />
      <Skills />
      <ProfessionalExperience />
      <Projects />
      <ContactSection />
    </div>
  );
};

export default Page;
