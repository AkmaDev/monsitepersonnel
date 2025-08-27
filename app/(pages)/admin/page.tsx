"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Send, Users, Mail, MessageSquare, LogOut } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabaseClient";
import DOMPurify from "dompurify";
import AdminAuth from "@/components/AdminAuth";

interface Contact {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: "unread" | "read";
  created_at: string;
}

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [stats, setStats] = useState({
    subscribers: 0,
    contacts: 0,
    unreadContacts: 0,
  });

  const [notificationForm, setNotificationForm] = useState({
    subject: "",
    content: "",
    fromName: "Mail Reach Notify",
    fromEmail: "notifications@resend.dev",
  });

  const [recentContacts, setRecentContacts] = useState<Contact[]>([]);

  // ✅ Vérifier la session admin
  useEffect(() => {
    const checkAuthentication = () => {
      const sessionData = sessionStorage.getItem("admin-session");
      if (!sessionData) return setIsAuthenticated(false);

      try {
        const session = JSON.parse(sessionData);
        if (new Date() > new Date(session.expiresAt)) {
          sessionStorage.removeItem("admin-session");
          setIsAuthenticated(false);
          toast.error("Session expirée. Veuillez vous reconnecter.", {
            style: {
              background: "hsl(var(--destructive))",
              color: "hsl(var(--destructive-foreground))",
              boxShadow: "var(--shadow-premium)",
              borderRadius: "var(--radius)",
              padding: "1rem 1.5rem",
            },
          });
          return;
        }
        setIsAuthenticated(true);
        fetchStats();
        fetchRecentContacts();
      } catch (error) {
        console.error("Error parsing session:", error);
        sessionStorage.removeItem("admin-session");
        setIsAuthenticated(false);
      }
    };

    checkAuthentication();
    const interval = setInterval(checkAuthentication, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("admin-session");
    setIsAuthenticated(false);
    toast.success("Déconnexion réussie.", {
      style: {
        background: "hsl(var(--primary))",
        color: "hsl(var(--primary-foreground))",
        boxShadow: "var(--shadow-premium)",
        borderRadius: "var(--radius)",
        padding: "1rem 1.5rem",
      },
    });
  };

  // ✅ Statistiques
  const fetchStats = async () => {
    try {
      const res = await fetch("/api/stats");
      const data = await res.json();
      if (data.error) throw new Error(data.error);

      setStats({
        subscribers: data.subscribers,
        contacts: data.contacts,
        unreadContacts: data.unreadContacts,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
      toast.error("Impossible de récupérer les stats.");
    }
  };

  // ✅ Messages récents
  const fetchRecentContacts = async () => {
    try {
      const res = await fetch("/api/recent-contacts");
      if (!res.ok) throw new Error("Erreur API");
      const data = await res.json();
      setRecentContacts(data || []);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      toast.error("Erreur lors du chargement des messages.", {
        style: {
          background: "hsl(var(--destructive))",
          color: "hsl(var(--destructive-foreground))",
          boxShadow: "var(--shadow-premium)",
          borderRadius: "var(--radius)",
          padding: "1rem 1.5rem",
        },
      });
    }
  };

  // ✅ Envoyer une notification
  const handleNotificationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const sanitizedContent = DOMPurify.sanitize(notificationForm.content, {
        ALLOWED_TAGS: [
          "h1",
          "h2",
          "h3",
          "p",
          "br",
          "strong",
          "em",
          "u",
          "ul",
          "ol",
          "li",
          "a",
        ],
        ALLOWED_ATTR: ["href", "target"],
      });
      const sanitizedForm = {
        ...notificationForm,
        content: sanitizedContent,
        subject: DOMPurify.sanitize(notificationForm.subject, {
          ALLOWED_TAGS: [],
        }),
        fromName: DOMPurify.sanitize(notificationForm.fromName, {
          ALLOWED_TAGS: [],
        }),
        fromEmail: DOMPurify.sanitize(notificationForm.fromEmail, {
          ALLOWED_TAGS: [],
        }),
      };
      const { error } = await supabase.functions.invoke("send-notification", {
        body: sanitizedForm,
      });
      if (error) throw error;

      toast.success(`Notification envoyée à ${stats.subscribers} abonnés !`, {
        style: {
          background: "hsl(var(--primary))",
          color: "hsl(var(--primary-foreground))",
          boxShadow: "var(--shadow-premium)",
          borderRadius: "var(--radius)",
          padding: "1rem 1.5rem",
        },
      });

      setNotificationForm({
        subject: "",
        content: "",
        fromName: "Mail Reach Notify",
        fromEmail: "notifications@resend.dev",
      });
    } catch (error) {
      console.error("Notification error:", error);
      toast.error("Impossible d'envoyer la notification.", {
        style: {
          background: "hsl(var(--destructive))",
          color: "hsl(var(--destructive-foreground))",
          boxShadow: "var(--shadow-premium)",
          borderRadius: "var(--radius)",
          padding: "1rem 1.5rem",
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ Marquer un contact comme lu en temps réel
  // const handleMarkAsRead = async (contactId: string) => {
  //   try {
  //     const { error } = await supabase
  //       .from("contacts")
  //       .update({ status: "read" })
  //       .eq("id", contactId);
  //     if (error) throw error;

  //     setRecentContacts((prev) =>
  //       prev.map((c) => (c.id === contactId ? { ...c, status: "read" } : c))
  //     );

  //     setStats((prev) => ({
  //       ...prev,
  //       unreadContacts: prev.unreadContacts - 1,
  //     }));

  //     toast.success("Message marqué comme lu.", {
  //       style: {
  //         background: "hsl(var(--primary))",
  //         color: "hsl(var(--primary-foreground))",
  //         boxShadow: "var(--shadow-premium)",
  //         borderRadius: "var(--radius)",
  //         padding: "1rem 1.5rem",
  //       },
  //     });
  //   } catch (err) {
  //     console.error("Erreur mise à jour contact:", err);
  //     toast.error("Impossible de marquer le message comme lu.", {
  //       style: {
  //         background: "hsl(var(--destructive))",
  //         color: "hsl(var(--destructive-foreground))",
  //         boxShadow: "var(--shadow-premium)",
  //         borderRadius: "var(--radius)",
  //         padding: "1rem 1.5rem",
  //       },
  //     });
  //   }
  // };
  // const handleMarkAsRead = async (contactId: string) => {
  //   try {
  //     // Update et récupérer la ligne mise à jour pour confirmation
  //     const { data, error } = await supabase
  //       .from("contacts")
  //       .update({ status: "read" })
  //       .eq("id", contactId)
  //       .select();

  //     if (error) throw error;
  //     if (!data || data.length === 0) {
  //       toast.error("Contact introuvable ou mise à jour impossible.");
  //       return;
  //     }

  //     // Mise à jour locale de l'UI
  //     setRecentContacts((prev) =>
  //       prev.map((c) => (c.id === contactId ? { ...c, status: "read" } : c))
  //     );

  //     // Recalculer le nombre de messages non lus
  //     setStats((prev) => ({
  //       ...prev,
  //       unreadContacts: Math.max(prev.unreadContacts - 1, 0),
  //     }));

  //     toast.success("Message marqué comme lu.", {
  //       style: {
  //         background: "hsl(var(--primary))",
  //         color: "hsl(var(--primary-foreground))",
  //         boxShadow: "var(--shadow-premium)",
  //         borderRadius: "var(--radius)",
  //         padding: "1rem 1.5rem",
  //       },
  //     });
  //   } catch (err) {
  //     console.error("Erreur mise à jour contact:", err);
  //     toast.error("Impossible de marquer le message comme lu.", {
  //       style: {
  //         background: "hsl(var(--destructive))",
  //         color: "hsl(var(--destructive-foreground))",
  //         boxShadow: "var(--shadow-premium)",
  //         borderRadius: "var(--radius)",
  //         padding: "1rem 1.5rem",
  //       },
  //     });
  //   }
  // };
  const handleMarkAsRead = async (contactId: string) => {
    try {
      const res = await fetch("/api/mark-as-read", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contactId }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur");

      setRecentContacts((prev) =>
        prev.map((c) => (c.id === contactId ? { ...c, status: "read" } : c))
      );
      setStats((prev) => ({
        ...prev,
        unreadContacts: Math.max(prev.unreadContacts - 1, 0),
      }));

      toast.success(data.message);
    } catch (err) {
      console.error(err);
      toast.error("Impossible de marquer le message comme lu.");
    }
  };

  if (!isAuthenticated)
    return <AdminAuth onAuthenticated={() => setIsAuthenticated(true)} />;

  return (
    <div className="min-h-screen p-6 bg-background">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center relative">
          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="absolute top-0 right-0 hover:text-foreground text-muted-foreground"
          >
            <LogOut className="w-4 h-4 mr-2" /> Déconnexion
          </Button>
          <h1 className="text-3xl font-serif font-bold gradient-text mb-2">
            Panel d&apos;Administration
          </h1>
          <p className="text-muted-foreground">
            Gérez vos notifications et contacts
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Abonnés actifs
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">
                {stats.subscribers}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Messages total
              </CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.contacts}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Non lus</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">
                {stats.unreadContacts}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Formulaire notification & Messages récents */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulaire notification */}
          <Card className="h-[auto] lg:h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="w-5 h-5 text-accent" /> Envoyer une
                notification
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleNotificationSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fromName">Nom expéditeur</Label>
                    <Input
                      id="fromName"
                      value={notificationForm.fromName}
                      onChange={(e) =>
                        setNotificationForm((prev) => ({
                          ...prev,
                          fromName: e.target.value,
                        }))
                      }
                      placeholder="Mail Reach Notify"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fromEmail">Email expéditeur</Label>
                    <Input
                      id="fromEmail"
                      type="email"
                      value={notificationForm.fromEmail}
                      onChange={(e) =>
                        setNotificationForm((prev) => ({
                          ...prev,
                          fromEmail: e.target.value,
                        }))
                      }
                      placeholder="notifications@resend.dev"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet</Label>
                  <Input
                    id="subject"
                    value={notificationForm.subject}
                    onChange={(e) =>
                      setNotificationForm((prev) => ({
                        ...prev,
                        subject: e.target.value,
                      }))
                    }
                    placeholder="🚀 Nous sommes en ligne !"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content">Contenu HTML</Label>
                  <Textarea
                    id="content"
                    value={notificationForm.content}
                    onChange={(e) =>
                      setNotificationForm((prev) => ({
                        ...prev,
                        content: e.target.value,
                      }))
                    }
                    placeholder="<h2>Nous sommes enfin en ligne ! 🎉</h2>"
                    rows={8}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full btn-professional"
                  disabled={isLoading || stats.subscribers === 0}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isLoading
                    ? "Envoi en cours..."
                    : `Envoyer à ${stats.subscribers} abonnés`}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Messages récents */}
          <Card className="max-h-[500px] overflow-y-auto space-y-4">
            <CardHeader>
              <CardTitle>Messages récents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentContacts.length === 0 ? (
                  <p className="text-muted-foreground text-center py-4">
                    Aucun message pour le moment
                  </p>
                ) : (
                  recentContacts.map((contact) => (
                    <div
                      key={contact.id}
                      className="border rounded-lg p-4 space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{contact.name}</div>
                        <Badge
                          variant={
                            contact.status === "unread"
                              ? "destructive"
                              : "secondary"
                          }
                        >
                          {contact.status === "unread" ? "Non lu" : "Lu"}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {contact.email} • {contact.subject}
                      </div>
                      <div className="text-sm">
                        {contact.message.substring(0, 100)}
                        {contact.message.length > 100 && "..."}
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={`mailto:${contact.email}?subject=Re: ${contact.subject}`}
                          className="text-xs text-accent hover:underline"
                        >
                          Répondre
                        </a>
                        {contact.status === "unread" && (
                          <button
                            onClick={() => handleMarkAsRead(contact.id)}
                            className="text-xs text-muted-foreground hover:text-foreground"
                          >
                            Marquer comme lu
                          </button>
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(contact.created_at).toLocaleDateString(
                          "fr-FR",
                          {
                            day: "numeric",
                            month: "long",
                            hour: "2-digit",
                            minute: "2-digit",
                          }
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
