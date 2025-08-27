"use client";

import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useRef } from "react";
import { APP_CONFIG } from "@/lib/config";
import DOMPurify from "dompurify";
import { supabase } from "@/lib/supabaseClient";

type NotificationType = "success" | "error" | "info";

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<{
    type: NotificationType;
    message: string;
  } | null>(null);
  const lastSubscribeTime = useRef<number>(0);

  const showNotification = (type: NotificationType, message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 4000); // disparaît après 4s
  };

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    // Rate limiting
    const now = Date.now();
    if (now - lastSubscribeTime.current < APP_CONFIG.rateLimits.newsletter) {
      showNotification(
        "error",
        "⏰ Trop rapide. Veuillez attendre avant de réessayer."
      );
      return;
    }

    setIsLoading(true);

    try {
      const sanitizedEmail = DOMPurify.sanitize(email, { ALLOWED_TAGS: [] })
        .trim()
        .toLowerCase();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(sanitizedEmail)) {
        showNotification(
          "error",
          "❌ Email invalide. Veuillez entrer une adresse email valide."
        );
        return;
      }

      const { data, error } = await supabase.functions.invoke(
        "handle-subscription",
        {
          body: { email: sanitizedEmail, action: "subscribe" },
        }
      );

      if (error) throw error;

      lastSubscribeTime.current = now;
      setEmail("");

      if (data?.alreadySubscribed) {
        showNotification("info", "⚠️ Cet email est déjà inscrit !");
      } else {
        setIsSubscribed(true);
      }
    } catch (err) {
      console.error("Subscription error:", err);
      showNotification(
        "error",
        "❌ Une erreur est survenue. Veuillez réessayer."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex  items-center justify-center px-4">
      <div className="max-w-lg w-full text-center space-y-8 animate-fade-in">
        {/* Logo/Brand */}
        <div className="space-y-4"></div>

        {/* Main message */}
        <div className="space-y-8 animate-slide-up">
          <h2 className="text-3xl lg:text-4xl font-serif text-accent">
            Bientôt en ligne
          </h2>
          <div className="card-premium">
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-muted-foreground mb-6">
                  Soyez parmi les premiers informés du lancement
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
                    disabled={isLoading}
                  />
                  <Button
                    type="submit"
                    className="btn-professional"
                    disabled={isLoading}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    {isLoading ? "..." : "Notifier"}
                  </Button>
                </form>
              ) : (
                <div className="text-primary/90 text-center font-medium">
                  ✓ Merci ! Vous serez notifié du lancement.
                </div>
              )}

              {/* Notification */}
              {notification && (
                <div
                  className={`mt-4 px-4 py-3 rounded-lg shadow-md flex items-center justify-center font-medium text-center`}
                  style={{
                    backgroundColor:
                      notification.type === "info"
                        ? "#1e293b"
                        : notification.type === "error"
                        ? "hsl(var(--destructive))"
                        : "hsl(var(--accent))",
                    color:
                      notification.type === "info"
                        ? "#3b82f6"
                        : notification.type === "error"
                        ? "hsl(var(--destructive-foreground))"
                        : "hsl(var(--accent-foreground))",
                  }}
                >
                  {notification.message}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="space-y-4">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Développement</span>
            <span>85%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-primary/90 rounded-full transition-all duration-1000 ease-out shadow-accent"
              style={{ width: "85%" }}
            />
          </div>
        </div>

        {/* Expected launch */}
        <div className="text-center text-sm text-muted-foreground">
          <p>Lancement prévu :</p>
          <p className="text-accent font-medium">T1 2025</p>
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
