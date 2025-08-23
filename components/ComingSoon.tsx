"use client";

import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Link from "next/link";

const ComingSoon: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center space-y-8 animate-fade-in">
        {/* Logo/Brand */}
        <div className="space-y-4">
          {/* <div className="w-16 h-16 mx-auto bg-gradient-accent rounded-full flex items-center justify-center shadow-accent">
            <Clock className="w-8 h-8 text-accent-foreground" />
          </div>

          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gradient">
            Strategic Insights
            <span className="block text-accent-glow bg-gradient-accent bg-clip-text text-transparent">
              Africa
            </span>
          </h1> */}
        </div>

        {/* Main message */}
        <div className="space-y-8 animate-slide-up">
          <h2 className="text-3xl lg:text-4xl font-serif text-accent">
            Bientôt en ligne
          </h2>

          <div className="bg-card border border-border rounded-xl p-8 shadow-elegant">
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-muted-foreground mb-6">
                  Soyez informé du lancement
                </p>
              </div>

              {!isSubscribed ? (
                <form onSubmit={handleSubscribe} className="flex gap-3">
                  <Input
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-input border-border focus:border-accent transition-colors"
                    required
                  />
                  <Button type="submit" className="group">
                    <Mail className="w-4 h-4 mr-2" />
                    Notifier
                  </Button>
                </form>
              ) : (
                <div className="text-accent text-center font-medium">
                  ✓ Merci ! Vous serez notifié du lancement.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="space-y-4">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Développement</span>
            <span>75%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-1000 ease-out shadow-accent"
              style={{ width: "75%" }}
            />
          </div>
        </div>

        {/* Expected launch */}
        <div className="text-center text-sm text-muted-foreground">
          <p>Lancement prévu :</p>
          <p className="text-accent font-medium">T1 2025</p>
        </div>

        {/* Back to temp site */}
        <div className="pt-8">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Retour au site temporaire
          </Link>
        </div>
      </div>

      {/* Subtle background pattern */}
      <div className="fixed inset-0 -z-10 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-accent rounded-full blur-2xl" />
      </div>
    </div>
  );
};

export default ComingSoon;
