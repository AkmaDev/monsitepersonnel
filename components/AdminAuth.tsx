import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AdminAuthProps {
  onAuthenticated: () => void;
}

const AdminAuth = ({ onAuthenticated }: AdminAuthProps) => {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { supabase } = await import("@/lib/supabaseClient");

      const { data, error } = await supabase.functions.invoke("admin-auth", {
        body: { password },
      });

      if (error) {
        console.error("Auth error:", error);
        toast({
          title: "❌ Erreur de connexion",
          description: "Erreur lors de la vérification des identifiants.",
          variant: "destructive",
        });
        return;
      }

      if (data?.success) {
        // Store secure session with expiration
        const sessionData = {
          token: data.token,
          expiresAt: data.expiresAt,
          authenticatedAt: new Date().toISOString(),
        };

        sessionStorage.setItem("admin-session", JSON.stringify(sessionData));
        onAuthenticated();
        toast({
          title: "✅ Connexion réussie",
          description: "Bienvenue dans le panel d'administration.",
        });
      } else {
        toast({
          title: "❌ Accès refusé",
          description: "Mot de passe incorrect.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "❌ Erreur",
        description: "Une erreur est survenue lors de la connexion.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center">
            <Lock className="w-6 h-6 text-accent-foreground" />
          </div>
          <CardTitle className="text-2xl font-serif gradient-text">
            Accès Administration
          </CardTitle>
          <p className="text-muted-foreground">
            Entrez le mot de passe pour accéder au panel
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••"
                required
                disabled={isLoading}
              />
            </div>

            <Button
              type="submit"
              className="w-full btn-professional"
              disabled={isLoading || !password}
            >
              <Lock className="w-4 h-4 mr-2" />
              {isLoading ? "Vérification..." : "Se connecter"}
            </Button>
          </form>

          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <p className="text-xs text-muted-foreground text-center">
              🔒 Accès sécurisé - Authentification requise
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminAuth;
