"use client";
import { useState, FC } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Project } from "@/data/project";

interface PortfolioProps {
  projects: Project[];
}

const Portfolio: FC<PortfolioProps> = ({ projects }) => {
  const [filter, setFilter] = useState<
    "all" | "poster" | "video" | "animation"
  >("all");
  const categories = ["all", "poster", "video", "animation"] as const;
  const categoryLabels = {
    all: "Tous",
    poster: "Affiches",
    video: "Vidéos",
    animation: "Animation",
  };

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.type === filter);

  return (
    <div className="min-h-screen bg-background">
      {/* Header + filtre */}
      <header className="section-spacing border-b border-border">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
            Portfolio Design
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Découvrez mes créations graphiques, affiches et vidéos réalisées
            pour divers projets et clients.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? "default" : "outline"}
              onClick={() => setFilter(cat)}
            >
              {categoryLabels[cat]}
            </Button>
          ))}
        </div>
      </header>

      {/* Projects Grid */}
      <main className="section-spacing">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </main>

      {/* CTA */}
      <section className="section-spacing border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card-premium">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
              Collaborons ensemble
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Vous avez un projet créatif en tête ? Contactez-moi pour discuter
              de vos besoins en design graphique, motion design ou création
              vidéo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-professional">
                <a href="mailto:manews193@gmail.com">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Me contacter
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/">
                  <FaGithub className="w-4 h-4 mr-2" />
                  Retour au CV
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
