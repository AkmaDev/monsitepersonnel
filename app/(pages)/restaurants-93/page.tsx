"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const TECH_STACK = [
  "Python 3.10",
  "PostgreSQL / PostGIS",
  "psycopg2",
  "pandas",
  "Claude API (Sonnet)",
  "Flowise",
  "RAG",
  "ScrapingBee",
  "BAN API",
  "Google Maps (gosom)",
];

const PIPELINE_STEPS = [
  {
    step: "01",
    title: "Source SIRENE",
    desc: "431 749 restaurants actifs issus du registre officiel INSEE/SIRENE pour toute la France.",
  },
  {
    step: "02",
    title: "Géocodage BAN",
    desc: "Enrichissement GPS via la Base Adresse Nationale (API gratuite). Traitement en parallèle, 1 000 adresses/cycle.",
  },
  {
    step: "03",
    title: "Scraping téléphones",
    desc: "Pipeline multi-sources : Google Maps (gosom Docker), Pages Jaunes, OpenStreetMap, Resto.fr, TheFork, TripAdvisor, Michelin.",
  },
  {
    step: "04",
    title: "Knowledge Base",
    desc: "Export filtré département 93 → fiches Markdown structurées par restaurant + FAQ globale + index par ville.",
  },
  {
    step: "05",
    title: "RAG avec Flowise",
    desc: "Indexation vectorielle des fiches. Chatbot Claude Sonnet branché sur la knowledge base. 0 hallucination : réponses uniquement sur les données connues.",
  },
  {
    step: "06",
    title: "Déploiement",
    desc: "Widget embarquable sur site web. Intégration WhatsApp Business via Twilio (prochaine étape).",
  },
];

export default function Restaurants93Page() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background">
      {/* Back button */}
      <div className="fixed top-4 left-4 z-50">
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="hover:bg-background hover:text-foreground"
        >
          ← Retour
        </Button>
      </div>

      <main className="max-w-3xl mx-auto px-6 pt-20 pb-24 space-y-16">

        {/* Hero */}
        <section className="space-y-5">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">RAG</Badge>
            <Badge variant="secondary">Python</Badge>
            <Badge variant="secondary">Claude API</Badge>
            <Badge variant="secondary">2026</Badge>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight">
            Chatbot restaurants 93 —{" "}
            <span className="text-primary">Pipeline SIRENE → RAG</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            431 749 restaurants français enrichis automatiquement (GPS,
            téléphone, type d&apos;activité), puis transformés en chatbot
            conversationnel déployable sur site web et WhatsApp Business.
            Démo sur le département 93 (Seine-Saint-Denis).
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Stack 100% open source. Aucun abonnement tiers. Réplicable pour
            n&apos;importe quelle ville, chambre de commerce ou groupement
            professionnel.
          </p>
        </section>

        {/* Métriques */}
        <section className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            { value: "431 749", label: "restaurants SIRENE" },
            { value: "57", label: "communes du 93" },
            { value: "7 sources", label: "d'enrichissement" },
            { value: "0", label: "hallucination (RAG)" },
            { value: "100%", label: "open source" },
            { value: "< 5 €/mois", label: "coût infra démo" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="rounded-xl border border-border bg-muted/40 p-4 space-y-1"
            >
              <p className="text-2xl font-display font-bold text-foreground">
                {value}
              </p>
              <p className="text-xs text-muted-foreground">{label}</p>
            </div>
          ))}
        </section>

        {/* Pipeline */}
        <section className="space-y-6">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Pipeline technique
          </h2>
          <div className="space-y-4">
            {PIPELINE_STEPS.map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4">
                <span className="text-primary font-mono text-sm font-bold w-8 shrink-0 pt-0.5">
                  {step}
                </span>
                <div className="space-y-1">
                  <p className="font-medium text-foreground text-sm">{title}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stack */}
        <section className="space-y-4">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {TECH_STACK.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        {/* Demo widget */}
        <section className="space-y-4">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Démo en ligne
          </h2>
          <div className="rounded-xl border border-dashed border-border bg-muted/30 p-8 text-center space-y-3">
            <p className="text-muted-foreground text-sm">
              Le chatbot est en cours de déploiement sur serveur.
            </p>
            <p className="text-muted-foreground text-xs">
              Le widget interactif sera disponible ici prochainement.
            </p>
            {/*
              Une fois Flowise déployé sur Railway/Render, remplacer ce bloc par :

              <script type="module">
                import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
                Chatbot.init({
                  chatflowid: "TON_CHATFLOW_ID",
                  apiHost: "https://ton-flowise.railway.app",
                  theme: { button: { backgroundColor: "#1a1a2e" }, chatWindow: { title: "Restaurants 93" } }
                })
              </script>
            */}
          </div>
        </section>

        {/* Ce que ce projet démontre */}
        <section className="space-y-4 border-t border-border pt-10">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Ce que ce projet démontre
          </h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              "Traitement de données à grande échelle (431k lignes SIRENE) avec Python + PostgreSQL/PostGIS",
              "Pipeline d'enrichissement multi-sources avec scraping, géocodage et matching fuzzy",
              "Architecture RAG (Retrieval-Augmented Generation) avec Flowise + Claude API",
              "Déploiement d'un chatbot embarquable sur site web et WhatsApp Business",
              "Stack 100% gratuite et open source — livrable à un client sans frais d'abonnement tiers",
            ].map((point) => (
              <li key={point} className="flex gap-2">
                <span className="text-primary shrink-0">—</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button asChild className="btn-professional">
            <a
              href="https://github.com/AkmaDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir sur GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="mailto:manasse.akpovi@manasseakpovi.com">
              Me contacter
            </a>
          </Button>
        </section>
      </main>
    </div>
  );
}
