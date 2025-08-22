import About from "@/components/cv/About";
import ContactSection from "@/components/cv/ContactSection";
import ProfessionalExperience from "@/components/cv/ProfessionalExperience";
import ProfileHeader from "@/components/cv/ProfileHeader";
import Projects from "@/components/cv/Projects";
import Skills from "@/components/cv/Skills";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-background">
      <ProfileHeader />
      <About />
      <Skills />
      <ProfessionalExperience />
      <Projects />
      <ContactSection />
    </div>
  );
};

export default page;
