import { FC } from "react";
import { Calendar, MapPin, Building } from "lucide-react";

interface ExperienceItem {
  company: string;
  position: string;
  location: string;
  period: string;
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "NerdX Digital",
    position: "ReactJS Developer Intern",
    location: "Bénin",
    period: "03/2024 – 09/2024",
    achievements: [
      "Développement d'interfaces frontend responsives à partir de designs UI/UX",
      "Conversion de maquettes Figma en code React.js propre et maintenable",
      "Utilisation de Tailwind CSS pour des designs modernes",
    ],
  },
  {
    company: "JILMONDE CONSULTING",
    position: "Stagiaire Développeur Java",
    location: "Bénin",
    period: "04/2023 – 06/2023",
    achievements: [
      "Développement et maintenance de tests unitaires avec JUnit et JaCoCo",
      "Application des principes TDD pour renforcer la robustesse du code",
    ],
  },
  {
    company: "AKS PICTURES",
    position: "Stagiaire Développeur Python",
    location: "Bénin",
    period: "07/2022 – 08/2022",
    achievements: [
      "Développement et optimisation de scripts de narration interactive (Python/Ren'Py)",
      "Optimisation des assets du jeu avec Photoshop",
    ],
  },
];

const ProfessionalExperience: FC = () => {
  return (
    <section className="section-spacing">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-display font-semibold mb-12 text-center gradient-text">
          Expérience Professionnelle
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="card-premium">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                <div>
                  <h3 className="text-xl font-display font-medium text-foreground mb-2">
                    {exp.position}
                  </h3>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Building className="w-4 h-4" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                </div>

                <div className="flex flex-col lg:items-end gap-1 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.achievements.map((achievement, achIndex) => (
                  <li
                    key={achIndex}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;
