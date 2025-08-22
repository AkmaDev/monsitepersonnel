import { FC } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
interface Project {
  title: string;
  description: string;
  type: string;
  technologies: string[];
  status: "Terminé" | "En développement";
  link: string;
}

const projects: Project[] = [
  {
    title: "Plateforme de promotion des producteurs locaux",
    description:
      "Plateforme web pour valoriser les producteurs locaux, faciliter la vente et la promotion de leurs produits. Projet de soutenance développé avec React.js et une base de données moderne.",
    type: "Projet de soutenance",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Appwrite"],
    status: "Terminé",
    link: "#",
  },
  {
    title: "Flipbook / Bible pour enfants en fon",
    description:
      "Outil interactif et visuel pour la lecture biblique des enfants, favorisant la méditation et la compréhension. Interface ludique et éducative adaptée aux jeunes utilisateurs.",
    type: "Projet en cours",
    technologies: ["React.js", "Animation", "Design UX/UI"],
    status: "En développement",
    link: "#",
  },
];

const Projects: FC = () => {
  return (
    <section className="section-spacing">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-display font-semibold mb-12 text-center gradient-text">
          Projets Phares
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card-premium">
              <div className="mb-4">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-display font-medium text-foreground">
                    {project.title}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "Terminé"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-primary/20 text-primary"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-primary font-medium mb-3">
                  {project.type}
                </p>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-secondary/50 text-foreground rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 btn-professional"
                  asChild
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Voir le projet
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:bg-secondary/20 hover:text-primary transition-colors"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="card-premium">
            <h3 className="text-xl font-display font-medium text-foreground mb-4">
              Portfolio Créatif
            </h3>
            <p className="text-muted-foreground mb-6">
              Découvrez mes créations graphiques, affiches et vidéos réalisées
              pour divers projets et clients.
            </p>
            <Button className="btn-professional" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 mr-2" />
                Voir Portfolio Design
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
