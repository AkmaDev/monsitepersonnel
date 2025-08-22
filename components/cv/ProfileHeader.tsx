import { FC } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
// import profilePhoto from "@/assets/profile-photo.jpg";

const ProfileHeader: FC = () => {
  return (
    <header className="section-spacing">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          {/* Photo de profil */}
          <div className="relative inline-block mb-6">
            <Image
              src="/photmoi.png"
              alt="Manassé AKPOVI - Développeur Frontend"
              width={128}
              height={128}
              className="rounded-full mx-auto object-cover border-4 border-primary shadow-glow"
            />
          </div>

          {/* Nom et titre */}
          <h1 className="text-5xl font-display font-bold mb-4 gradient-text">
            Manassé AKPOVI
          </h1>
          <h2 className="text-2xl font-display text-foreground mb-6">
            Développeur Frontend React.js & TypeScript
          </h2>

          {/* Contacts */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a
                href="mailto:manews193@gmail.com"
                className="hover:text-primary transition-colors"
              >
                manews193@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a
                href="tel:+2290191404910"
                className="hover:text-primary transition-colors"
              >
                +229 01 91 40 49 10
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Cotonou, Bénin</span>
            </div>
          </div>

          {/* Boutons de profils et portfolio */}
          <div className="flex justify-center gap-4 flex-wrap ">
            <Button
              variant="outline"
              size="lg"
              className="btn-professional"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/manasse-akpovi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground"
              >
                <FaLinkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="btn-professional"
              asChild
            >
              <a
                href="https://github.com/AkmaDev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground"
              >
                <FaGithub className="w-5 h-5 mr-2" />
                Portfolio Web
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="btn-professional"
              asChild
            >
              <a
                href="/portfoliodesign"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Portfolio Design
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader;
