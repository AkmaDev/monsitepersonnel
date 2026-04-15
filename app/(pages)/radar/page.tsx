"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const SCORING_STEPS = [
  {
    step: "01",
    title: "Analyse des Success Stories",
    desc: "29 fiches clients publiques analysées pour en extraire les verbatims (mots exacts des clients), les KPIs mesurés, et les patterns de douleur détectables avant la vente.",
  },
  {
    step: "02",
    title: "Extraction des signaux",
    desc: "Chaque douleur client est traduite en signal détectable : avis Google, présence sur Deliveroo/Uber Eats, dates SIRENE, popular_times Google Maps.",
  },
  {
    step: "03",
    title: "Moteur de scoring (zéro IA générative)",
    desc: "Score Profil (qui est ce lead ?) + Score Signal (est-ce le bon moment ?). 100% règles métier — transparentes, auditables, reproductibles.",
  },
  {
    step: "04",
    title: "Matching Success Story",
    desc: "Le moteur identifie la success story la plus proche dans le corpus (segment, signaux, contexte) et l'associe automatiquement au prospect.",
  },
  {
    step: "05",
    title: "Génération de message",
    desc: "Message commercial généré avec la preuve chiffrée intégrée — sans citer la marque. La douleur est nommée, le résultat est sourcé.",
  },
  {
    step: "06",
    title: "Cartographie concurrentielle",
    desc: "Pour chaque client existant, identification des prospects similaires dans un rayon géographique défini. Source de leads autonome, sans signal entrant.",
  },
];

const TECH_STACK = [
  "JavaScript (vanilla)",
  "HTML / CSS",
  "Règles métier",
  "SIRENE (INSEE)",
  "Google Maps",
  "Scoring multicritère",
  "Pattern matching",
];

const METRICS = [
  { value: "29", label: "success stories analysées" },
  { value: "2", label: "scores distincts (Profil + Signal)" },
  { value: "19", label: "cas dans le corpus de matching" },
  { value: "5", label: "objections anticipées sourcées" },
  { value: "0", label: "IA générative" },
  { value: "100%", label: "règles métier" },
];

export default function RadarPage() {
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
            <Badge variant="secondary">RevOps</Badge>
            <Badge variant="secondary">Scoring B2B</Badge>
            <Badge variant="secondary">Prospection automatisée</Badge>
            <Badge variant="secondary">2026</Badge>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight">
            RADAR —{" "}
            <span className="text-primary">
              Moteur de qualification B2B pour restaurants
            </span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Un moteur de scoring qui transforme les success stories publiques
            d&apos;un éditeur SaaS en machine à prospecter. Chaque fiche client
            devient un profil de détection : les douleurs qu&apos;ils décrivent
            sont détectables dans les données publiques avant la vente.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Zéro IA générative. 100% règles métier. Transparent, auditable,
            reproductible sur n&apos;importe quel secteur B2B.
          </p>
        </section>

        {/* Métriques */}
        <section className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {METRICS.map(({ value, label }) => (
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

        {/* Simulateur embed */}
        <section className="space-y-4">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Simulateur interactif
          </h2>
          <p className="text-sm text-muted-foreground">
            Construisez un profil restaurant et observez le scoring en temps
            réel — success story matchée, objections anticipées, message
            commercial généré.
          </p>
          <div className="rounded-xl overflow-hidden border border-border">
            <iframe
              src="/simulateur-radar.html"
              style={{ width: "100%", height: "900px", border: "none" }}
              title="RADAR — Simulateur de qualification B2B"
            />
          </div>
          <div className="flex justify-end">
            <Button variant="outline" asChild>
              <a
                href="/simulateur-radar.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ouvrir en plein écran ↗
              </a>
            </Button>
          </div>
        </section>

        {/* Pipeline */}
        <section className="space-y-6">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Comment ça fonctionne
          </h2>
          <div className="space-y-4">
            {SCORING_STEPS.map(({ step, title, desc }) => (
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

        {/* Ce que ce projet démontre */}
        <section className="space-y-4 border-t border-border pt-10">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Ce que ce projet démontre
          </h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              "Lecture et structuration d'un corpus de données non structurées (fiches clients publiques)",
              "Conception d'un moteur de scoring multicritère sans dépendance à l'IA générative",
              "Traduction de douleurs clients en signaux détectables dans des sources publiques (SIRENE, Google Maps, avis)",
              "Génération de messages commerciaux contextualisés avec preuve intégrée",
              "Cartographie concurrentielle : un client existant génère 10 à 30 prospects dans son périmètre immédiat",
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
              href="/simulateur-radar.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tester le simulateur ↗
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
