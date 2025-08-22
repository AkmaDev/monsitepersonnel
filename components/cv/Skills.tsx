import { FC } from "react";
import { Badge } from "@/components/ui/badge";

const hardSkills: string[] = [
  "React.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Appwrite",
  "CSS",
  "HTML",
  "Python",
  "Ren'Py",
  "Photoshop",
  "Frontend Responsive",
];

const softSkills: string[] = [
  "Communication excellente",
  "Autonomie",
  "Esprit d'équipe",
  "Créativité",
  "Sens du design",
  "Adaptabilité",
  "Apprentissage rapide",
];

const Skills: FC = () => {
  return (
    <section className="section-spacing">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-display font-semibold mb-12 text-center gradient-text">
          Compétences
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card-premium">
            <h3 className="text-xl font-display font-medium mb-6 text-foreground">
              Compétences Techniques
            </h3>
            <div className="flex flex-wrap gap-3">
              {hardSkills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors px-3 py-1"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="card-premium">
            <h3 className="text-xl font-display font-medium mb-6 text-foreground">
              Compétences Transversales
            </h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="border-muted-foreground/30 text-muted-foreground hover:border-primary hover:text-primary transition-colors px-3 py-1"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
