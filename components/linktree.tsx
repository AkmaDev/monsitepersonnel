import { FC } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Mail,
  FileText,
  Code,
  Briefcase,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.jpg";

interface LinkItem {
  title: string;
  description: string;
  url: string;
  icon: FC<React.SVGProps<SVGSVGElement>>;
  primary?: boolean;
}

const links: LinkItem[] = [
  {
    title: "Blog Strategic Insights Africa",
    description: "Analyses approfondies sur l'Afrique moderne",
    url: "https://strategic-insights-africa.vercel.app",
    icon: FileText,
    primary: true,
  },
  {
    title: "Portfolio & CV",
    description: "Mon parcours et mes réalisations",
    url: "#",
    icon: Briefcase,
  },
  {
    title: "Projets Personnels",
    description: "Mes dernières créations et expérimentations",
    url: "#",
    icon: Code,
  },
  {
    title: "LinkedIn",
    description: "Réseau professionnel et actualités",
    url: "#",
    icon: Linkedin,
  },
  {
    title: "Twitter",
    description: "Analyses courtes et insights",
    url: "#",
    icon: Twitter,
  },
  {
    title: "GitHub",
    description: "Code source et contributions",
    url: "#",
    icon: Github,
  },
];

const Home: FC = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-lg mx-auto">
        {/* Profile Section */}
        <div className="text-center mb-12">
          <div className="relative inline-block mb-6">
            <Image
              src={profileAvatar}
              alt="Profile"
              width={128}
              height={128}
              className="rounded-full mx-auto shadow-premium glow-subtle border-2 border-primary/20"
            />
          </div>
          <h1 className="text-3xl font-serif font-bold text-gradient mb-3">
            Strategic Insights Africa
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Décryptage stratégique de l&apos;Afrique moderne • Analyses
            géopolitiques et économiques
          </p>
        </div>

        {/* Links Section */}
        <div className="space-y-4 mb-12">
          {links.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Button
                  variant={link.primary ? "default" : "secondary"}
                  className="w-full h-auto p-6 justify-start text-left group-hover:scale-[1.02] transition-all duration-200 shadow-premium"
                >
                  <div className="flex items-center w-full">
                    <div className="flex-shrink-0 mr-4">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="font-semibold text-base mb-1 flex items-center gap-2">
                        {link.title}
                        <ExternalLink className="h-4 w-4 opacity-60" />
                      </div>
                      <div className="text-sm opacity-80 leading-snug">
                        {link.description}
                      </div>
                    </div>
                  </div>
                </Button>
              </a>
            );
          })}
        </div>

        {/* Footer Section */}
        <div className="text-center pt-8 border-t border-border">
          <div className="flex items-center justify-center gap-4 mb-4">
            <a
              href="mailto:contact@strategic-insights-africa.com"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              <span className="text-sm">
                contact@strategic-insights-africa.com
              </span>
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2024 Strategic Insights Africa. Tous droits réservés.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
