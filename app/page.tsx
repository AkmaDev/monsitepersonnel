import { FC } from "react";
import Head from "next/head";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail } from "lucide-react";
import { SiMedium } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

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
    url: "/comingsoon",
    icon: ExternalLink,
    primary: true,
  },
  {
    title: "Portfolio & CV",
    description: "Mon parcours et mes réalisations",
    url: "/cv",
    icon: ExternalLink,
  },
  {
    title: "Projets Personnels",
    description: "Mes dernières créations graphiques, affiches et vidéos",
    url: "/portfoliodesign",
    icon: ExternalLink,
  },
  {
    title: "LinkedIn",
    description: "Réseau professionnel et actualités",
    url: "https://www.linkedin.com/in/manasse-akpovi",
    icon: FaLinkedin,
  },
  {
    title: "Medium",
    description: "Articles et analyses approfondies",
    url: "https://medium.com/@manews193",
    icon: SiMedium,
  },
  {
    title: "GitHub",
    description: "Code source et contributions",
    url: "https://github.com/AkmaDev",
    icon: FaGithub,
  },
];

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Manassé AKPOVI</title>
        <meta
          name="description"
          content="Insights, design et systèmes qui transforment les nations"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Manassé AKPOVI" />
        <meta
          property="og:description"
          content="Insights, design et systèmes qui transforment les nations"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manasseakpovi.com" />
        <meta property="og:image" content="/og-homepage.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Manassé AKPOVI" />
        <meta
          name="twitter:description"
          content="Insights, design et systèmes qui transforment les nations"
        />
        <meta name="twitter:image" content="/og-homepage.png" />
      </Head>

      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="w-full max-w-lg mx-auto">
          {/* Profile Section */}
          <div className="text-center mb-12">
            <div className="relative inline-block mb-6">
              <Image
                src="/photmoi.png"
                alt="Profile"
                width={128}
                height={128}
                className="rounded-full mx-auto shadow-premium glow-subtle border-4 border-primary shadow-glow"
              />
            </div>

            {/* Nom / Grand titre */}
            <h1 className="text-3xl font-serif font-bold text-gradient mb-3">
              Manassé AKPOVI
            </h1>

            {/* Trois verbes d'action avec séparateurs */}
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <span className="font-semibold text-lg">Créer</span>
              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
              <span className="font-semibold text-lg">Révéler</span>
              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
              <span className="font-semibold text-lg">Impacter</span>
            </div>

            {/* Description / tagline */}
            <p className="text-muted-foreground text-lg leading-relaxed mt-2">
              Insights, design et systèmes qui transforment les nations
            </p>
          </div>

          {/* Links Section */}
          <div className="space-y-4 mb-12">
            {links.map((link, index) => {
              const IconComponent = link.icon;
              const isInternal = link.url.startsWith("/");

              const content = (
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
              );

              return isInternal ? (
                <Link key={index} href={link.url} className="block group">
                  {content}
                </Link>
              ) : (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  {content}
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
    </>
  );
};

export default Home;
