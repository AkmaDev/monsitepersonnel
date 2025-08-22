"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { toasts, toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Je vous répondrai dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="section-spacing bg-card/50 relative">
      {/* Toaster */}
      <div className="fixed top-4 right-4 flex flex-col gap-2 z-50">
        {toasts.map(
          (t) =>
            t.open && (
              <div
                key={t.id}
                className="bg-primary text-white px-4 py-2 rounded shadow-lg"
              >
                {t.title && <strong>{t.title}</strong>}
                {t.description && <p>{t.description}</p>}
              </div>
            )
        )}
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-display font-semibold mb-12 text-center gradient-text">
          Contactez-moi
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Infos de contact */}
          <div className="space-y-8">
            <h3 className="text-xl font-display font-medium text-foreground mb-6">
              Restons en contact
            </h3>
            <p className="text-muted-foreground mb-8">
              Intéressé par une collaboration ? N&apos;hésitez pas à me
              contacter.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a
                    href="mailto:manews193@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    manews193@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Téléphone</p>
                  <a
                    href="tel:+2290191404910"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +229 01 91 40 49 10
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Localisation</p>
                  <p className="text-muted-foreground">
                    C/516 Gbenan, Cotonou, Bénin
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                variant="outline"
                size="sm"
                className="btn-professional"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/manasse-akpovi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground "
                >
                  <FaLinkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="btn-professional"
                asChild
              >
                <a
                  href="https://github.com/AkmaDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground "
                >
                  <FaGithub className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          {/* Formulaire */}
          <div className="card-premium">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Sujet</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Sujet de votre message"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre projet..."
                  rows={6}
                  required
                />
              </div>

              <Button type="submit" className="w-full btn-professional">
                <Send className="w-4 h-4 mr-2" />
                Envoyer le message
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2024 Manassé AKPOVI. Tous droits réservés.{" "}
            <span className="text-primary ml-2">
              Développé avec React.js & TypeScript
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
