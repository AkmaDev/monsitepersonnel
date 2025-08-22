import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="section-spacing">
      <div className="max-w-4xl mx-auto">
        <div className="card-premium">
          <h2 className="text-3xl font-display font-semibold mb-6 gradient-text">
            Profil Professionnel
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Développeur frontend passionné, expérimenté en{" "}
            <span className="text-primary font-medium">React.js</span> et{" "}
            <span className="text-primary font-medium">TypeScript</span>, motivé
            à créer des solutions innovantes et performantes. Mon objectif est
            de mettre en avant mes compétences techniques et projets phares de
            manière professionnelle et interactive, en contribuant à des projets
            web modernes qui font la différence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
