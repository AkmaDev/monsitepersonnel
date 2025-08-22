import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play } from "lucide-react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

export interface Project {
  id: number;
  title: string;
  description: string;
  type: string;
  category: string;
  image: string;
  link: string;
  platform: string;
  technologies: string[];
  year: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const getPlatformIcon = () => {
    switch (project.platform) {
      case "Instagram":
        return <FaInstagram className="w-4 h-4" />;
      case "YouTube":
      case "Vimeo":
        return <Play className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <article className="card-premium group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg mb-4 bg-muted">
        <Image
          src={project.image}
          width={1280}
          height={720}
          alt={`${project.title} - Portfolio design par Manassé AKPOVI`}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button
            variant="secondary"
            size="sm"
            className="bg-background/90 text-foreground hover:bg-background"
          >
            {getPlatformIcon()}
            <span className="ml-2">Voir sur {project.platform}</span>
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-display font-semibold text-foreground leading-tight">
            {project.title}
          </h3>
          <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
            {project.year}
          </span>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <Button className="w-full mt-4 btn-professional" asChild>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Voir le projet ${project.title} sur ${project.platform}`}
          >
            {getPlatformIcon()}
            <span className="ml-2">Voir sur {project.platform}</span>
          </a>
        </Button>
      </div>
    </article>
  );
};

export default ProjectCard;
