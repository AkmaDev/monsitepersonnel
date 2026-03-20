import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

interface ArticleMeta {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
}

const articles: ArticleMeta[] = [
  {
    slug: "audio-first-biblefon",
    title: "Ce que BibleFon m\u2019a appris sur ce que \u00ab\u00a0Audio First\u00a0\u00bb veut vraiment dire",
    date: "20 mars 2026",
    readTime: "8 min de lecture",
    category: "Product Building",
    excerpt:
      "Il ne s\u2019agit pas d\u2019ajouter un bouton play. Il s\u2019agit de concevoir pour des gens dont la langue, la culture et les pratiques sont fondamentalement orales.",
  },
];

function AudioFirstContent() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none text-foreground">
      <p className="text-xl text-muted-foreground leading-relaxed mb-8">
        Il ne s&apos;agit pas d&apos;ajouter un bouton play. Il s&apos;agit de concevoir pour
        des gens dont la langue, la culture et les pratiques sont fondamentalement orales
        &mdash; et pour qui l&apos;écrit n&apos;est pas une option, c&apos;est une barrière.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">
        La question que le SENIA 2024 a plantée en moi
      </h2>
      <p>
        Au SENIA 2024 &mdash; le Salon de l&apos;Enseignement Numérique en Afrique &mdash;
        j&apos;ai entendu des discours brillants sur le numérique inclusif. Des slides
        impeccables. Des chiffres sur la fracture numérique. Des engagements à{" "}
        <em>&laquo;&nbsp;démocratiser l&apos;accès&nbsp;&raquo;</em>.
      </p>
      <p>
        Mais une question restait sans réponse : <strong>pour qui, concrètement ?</strong>
      </p>
      <p>
        La fracture numérique en Afrique subsaharienne n&apos;est pas seulement une question
        d&apos;infrastructure ou de connexion internet. C&apos;est une question de langue. De
        pratique. De culture. Environ 500 millions d&apos;adultes dans la région sont en
        situation d&apos;illettrisme ou de faible littératie &mdash; et la plupart des outils
        numériques qu&apos;on leur destine supposent qu&apos;ils savent lire.
      </p>
      <p>
        J&apos;ai repensé à ma grand-mère. Béninoise. Elle ne lit pas. Mais elle raconte. Elle
        chante. Elle transmet. Elle est le produit d&apos;une culture qui n&apos;a jamais eu
        besoin de l&apos;écrit pour être vivante.
      </p>
      <p>
        Et j&apos;ai commencé à me demander :{" "}
        <strong>et si on construisait pour elle ?</strong>
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">
        Le problème que le numérique ne voit pas
      </h2>
      <p>
        La langue fon est parlée par plus de deux millions de personnes au Bénin et dans la
        diaspora. C&apos;est une langue vivante, riche, complexe. Mais numérique ? Presque
        invisible.
      </p>
      <p>
        Google Translate n&apos;a intégré le fon qu&apos;en 2022. C&apos;est récent. Et
        c&apos;est encore rudimentaire. Il n&apos;existe pratiquement pas de contenu éducatif,
        culturel ou spirituel en fon qui soit accessible sur un téléphone.
      </p>
      <p>
        La Bible est le livre le plus traduit au monde. Mais dans combien de langues africaines
        peut-on l&apos;<em>écouter</em>, illustrée, avec des images qui parlent à ses enfants ?
      </p>
      <p>
        L&apos;UNESCO l&apos;a documenté : les communautés à tradition orale apprennent,
        mémorisent et transmettent différemment. Pour elles, l&apos;audio n&apos;est pas une
        fonctionnalité de confort. C&apos;est l&apos;interface elle-même.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">
        Audio First : la différence entre &laquo;&nbsp;avoir un bouton play&nbsp;&raquo; et
        &laquo;&nbsp;concevoir pour l&apos;oral&nbsp;&raquo;
      </h2>
      <p>
        La plupart des produits dits &laquo;&nbsp;Audio First&nbsp;&raquo; sont en réalité des
        produits textuels avec un player ajouté. Le texte reste central. L&apos;audio est là
        pour ceux qui préfèrent.
      </p>
      <p>Ce n&apos;est pas ça, l&apos;Audio First.</p>
      <p>
        Concevoir pour des communautés orales, c&apos;est repartir de zéro sur plusieurs
        questions :
      </p>
      <ul className="space-y-3 my-4">
        <li>
          <strong>La navigation.</strong> Si l&apos;utilisateur ne lit pas, les boutons avec du
          texte sont inutiles. Tout doit être visuel ou vocal.
        </li>
        <li>
          <strong>Le feedback.</strong> Une confirmation par texte (&laquo;&nbsp;Téléchargement
          réussi&nbsp;&raquo;) est inaccessible. Il faut un son, une animation, un signe
          universel.
        </li>
        <li>
          <strong>La progression.</strong> Pas de pagination. Pas de &laquo;&nbsp;chapitre 3
          sur 7&nbsp;&raquo;. Un flux continu, ou des marqueurs visuels simples.
        </li>
        <li>
          <strong>L&apos;offline.</strong> Les zones rurales au Bénin ont souvent une connexion
          intermittente. Une application Audio First doit fonctionner sans réseau.
        </li>
      </ul>
      <p>
        Avec BibleFon, j&apos;ai dû prendre ces décisions concrètement. Pas en théorie. Le
        résultat est une PWA offline-first : une fois les histoires chargées, elles
        fonctionnent sans connexion, sur n&apos;importe quel téléphone Android d&apos;entrée de
        gamme.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">
        Ce que BibleFon démontre &mdash; et ce qui reste
      </h2>
      <p>
        BibleFon, c&apos;est des histoires bibliques illustrées, racontées en langue fon. Les
        illustrations sont générées par IA, avec des personnages africains et des décors du
        Bénin. L&apos;audio est produit avec le modèle Meta MMS-TTS-Fon, un modèle de synthèse
        vocale spécialisé pour les langues minoritaires africaines.
      </p>
      <p>
        Ce n&apos;est pas parfait. La voix de synthèse n&apos;a pas la chaleur d&apos;un
        griot. Certains mots fon ont des subtilités tonales que le modèle ne rend pas
        exactement. Les illustrations IA ont leurs propres limites.
      </p>
      <p>
        Mais voici ce qui est vrai :{" "}
        <strong>
          une grand-mère béninoise peut aujourd&apos;hui écouter l&apos;histoire de David et
          Goliath dans sa langue maternelle, sur son téléphone, sans savoir lire, même sans
          connexion internet.
        </strong>
      </p>
      <p>
        C&apos;est ça, le numérique inclusif. Pas une promesse dans une présentation. Un
        produit qui tourne.
      </p>
      <p>
        Ce qui reste à construire ? Beaucoup. Des voix humaines enregistrées. Plus
        d&apos;histoires. Une version pour enfants avec des interactions plus riches. Un
        partenariat avec des communautés locales pour valider le contenu. C&apos;est le travail
        de la prochaine étape.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">
        Ce que j&apos;ai appris sur la valeur d&apos;un produit vs. la valeur du code
      </h2>
      <p>
        En construisant BibleFon, j&apos;ai réalisé quelque chose d&apos;important sur ce que
        veut dire &laquo;&nbsp;créer de la valeur&nbsp;&raquo;.
      </p>
      <p>
        La valeur n&apos;est pas dans la technique. La synthèse vocale MMS-TTS-Fon existait
        déjà sur HuggingFace. Next.js existait. Les illustrations IA existaient. Ce qui
        n&apos;existait pas, c&apos;est la décision de les assembler pour <em>cette</em>{" "}
        audience, dans <em>cette</em> langue, avec <em>ces</em> contraintes.
      </p>
      <p>
        Le code que j&apos;ai écrit n&apos;est pas révolutionnaire. La décision de m&apos;en
        servir pour quelque chose que personne n&apos;avait encore fait &mdash; c&apos;est là
        que la valeur se crée.
      </p>
      <p>
        Je ne suis pas un &laquo;&nbsp;développeur frontend React&nbsp;&raquo;. Je suis
        quelqu&apos;un qui construit des produits pour des gens que le numérique oublie
        habituellement. BibleFon est la première démonstration de ce que ça peut donner.
      </p>
      <p>Ce ne sera pas la dernière.</p>

      <div className="mt-12 pt-8 border-t border-border">
        <p className="text-sm text-muted-foreground">
          BibleFon est disponible sur{" "}
          <a
            href="https://biblefon.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            biblefon.org
          </a>
          . Toutes les histoires sont gratuites et accessibles offline.
        </p>
      </div>
    </div>
  );
}

const contentMap: Record<string, React.FC> = {
  "audio-first-biblefon": AudioFirstContent,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Article introuvable" };
  return {
    title: `${article.title} \u2014 Manassé AKPOVI`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      url: `https://manasseakpovi.com/article/${slug}`,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const ContentComponent = contentMap[slug];
  if (!ContentComponent) notFound();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16 max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour au blog
        </Link>

        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            {article.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mt-3 mb-4 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>
        </div>

        <ContentComponent />
      </div>
    </div>
  );
}
