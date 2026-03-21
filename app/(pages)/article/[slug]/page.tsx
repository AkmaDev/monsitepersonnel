import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
    title:
      "Audio First \u2014 Ce que cela veut vraiment dire, et ce que cela change",
    date: "Mars 2026",
    readTime: "10 min de lecture",
    category: "Design Inclusif",
    excerpt:
      "Audio-first ne signifie pas \u00abavoir un bouton play\u00bb. Cela signifie que le son est le mode de communication primaire \u2014 une philosophie de conception pour les 500 millions d\u2019adultes en Afrique subsaharienne que le num\u00e9rique ignore.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Audio First \u2014 Ce que cela veut vraiment dire, et ce que cela change",
  description:
    "Audio-first ne signifie pas avoir un bouton play. Cela signifie que le son est le mode de communication primaire \u2014 une philosophie de conception pour les 500 millions d\u2019adultes en Afrique subsaharienne que le num\u00e9rique ignore.",
  datePublished: "2026-03-01",
  dateModified: "2026-03-21",
  author: {
    "@type": "Person",
    name: "Manass\u00e9 A. AKPOVI",
    url: "https://manasseakpovi.com",
    sameAs: [
      "https://www.linkedin.com/in/manasse-akpovi",
      "https://github.com/AkmaDev",
    ],
  },
  publisher: {
    "@type": "Person",
    name: "Manass\u00e9 A. AKPOVI",
    url: "https://manasseakpovi.com",
  },
  image: "https://manasseakpovi.com/article-biblefon.jpg",
  url: "https://manasseakpovi.com/article/audio-first-biblefon",
  keywords: [
    "audio first",
    "design inclusif",
    "langue fon",
    "BibleFon",
    "num\u00e9rique inclusif",
    "Afrique",
    "communaut\u00e9s orales",
    "UX",
  ],
  inLanguage: "fr",
};

function AudioFirstContent() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* LEDE */}
      <p className="text-xl text-muted-foreground leading-relaxed mb-8 font-medium">
        Imaginez une salle de classe. L&apos;enseignant parle dans une langue que vous ne
        ma&icirc;trisez pas. Personne ne vous exclut. Personne ne vous interdit d&apos;entrer.
        Mais vous ne comprenez rien. Vous &ecirc;tes l&agrave; &mdash; mais absent.
      </p>

      <p className="mb-6">
        C&apos;est ce que vivent chaque jour des millions de personnes face au
        num&eacute;rique. Pas parce qu&apos;elles manquent d&apos;intelligence. Pas parce
        qu&apos;elles refusent la technologie. Mais parce que nos interfaces ont &eacute;t&eacute;
        con&ccedil;ues sans elles.
      </p>

      <p className="mb-8">
        Ce texte raconte comment j&apos;ai construit BibleFon &mdash; une plateforme
        d&apos;histoires bibliques en langue fon pour les enfants et les familles du
        B&eacute;nin &mdash; en prenant au s&eacute;rieux une seule question :{" "}
        <strong>
          qu&apos;est-ce que cela veut dire de concevoir une interface vraiment audio-first
          ?
        </strong>{" "}
        Pas audio-friendly. Pas audio-possible.{" "}
        <em>Audio-first.</em>
      </p>

      {/* DÉFINITION CLÉE — bloc quotable auto-suffisant ~150 mots */}
      <blockquote className="border-l-4 border-primary pl-6 my-8 not-italic">
        <p className="text-lg font-medium text-foreground">
          Audio-first ne signifie pas &laquo;&nbsp;avoir un bouton play&nbsp;&raquo;.
          Cela signifie que le son est le mode de communication primaire.
        </p>
      </blockquote>

      {/* SECTION 1 */}
      <h2 className="text-2xl font-bold mt-12 mb-4">
        1. Le probl&egrave;me que le num&eacute;rique ne voit pas
      </h2>

      <p className="mb-4">
        En 2024, lors d&apos;une conf&eacute;rence sur l&apos;IA multimodale et les langues
        locales &mdash; le SENIA &mdash; j&apos;ai travaill&eacute; sur un projet li&eacute; aux
        langues africaines. Une phrase prononc&eacute;e ce jour-l&agrave; par la Ministre
        b&eacute;ninoise du Num&eacute;rique, Mme Aur&eacute;lie I. ADAM SOUL&Eacute;, a plant&eacute;
        quelque chose que je n&apos;ai pas r&eacute;ussi &agrave; ignorer :
      </p>

      <blockquote className="border-l-4 border-primary pl-6 my-6 not-italic">
        <p className="text-lg italic text-muted-foreground">
          &laquo;&nbsp;Nos langues, au lieu d&apos;&ecirc;tre une source
          d&apos;incompr&eacute;hension, deviendraient un &eacute;l&eacute;ment
          d&apos;union.&nbsp;&raquo;
        </p>
        <footer className="text-sm text-muted-foreground mt-2">
          &mdash; Mme Aur&eacute;lie I. ADAM SOUL&Eacute;, Ministre du Num&eacute;rique, B&eacute;nin, SENIA 2024
        </footer>
      </blockquote>

      <p className="mb-4">
        Cette phrase dit tout. Nos langues &mdash; les langues locales d&apos;Afrique,
        parl&eacute;es par des millions de personnes, transmises oralement depuis des
        g&eacute;n&eacute;rations &mdash; sont trait&eacute;es comme des obstacles dans le
        num&eacute;rique. Comme des exceptions &agrave; g&eacute;rer.
      </p>

      <p className="mb-6">
        Pourtant, selon l&apos;UNESCO, pr&egrave;s de{" "}
        <strong>500 millions d&apos;adultes en Afrique subsaharienne</strong> sont en
        situation d&apos;analphab&eacute;tisme fonctionnel. Ces personnes ne sont pas exclues
        du num&eacute;rique par choix. Elles en sont exclues{" "}
        <strong>par conception.</strong>
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">
        L&apos;impens&eacute; de nos interfaces
      </h3>

      <p className="mb-4">
        Quand on con&ccedil;oit une interface num&eacute;rique, on fait inconsciemment des
        hypoth&egrave;ses sur l&apos;utilisateur. On suppose qu&apos;il sait lire. Qu&apos;il
        ma&icirc;trise une langue dominante &mdash; souvent le fran&ccedil;ais ou l&apos;anglais.
        Qu&apos;il dispose d&apos;une connexion stable. Et qu&apos;il est habitu&eacute; &agrave;
        naviguer dans des menus hi&eacute;rarchiques.
      </p>

      <p className="mb-4">
        Ce ne sont pas des hypoth&egrave;ses universelles. Ce sont des hypoth&egrave;ses sur
        un profil particulier d&apos;utilisateur &mdash; celui qui ressemble aux personnes qui
        ont con&ccedil;u les outils. Pour tous les autres, nos interfaces sont une salle o&ugrave;
        tout le monde parle une langue qu&apos;ils ne comprennent pas.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">
        La langue fon comme cas concret
      </h3>

      <p className="mb-4">
        La langue fon est parl&eacute;e par plusieurs millions de personnes au B&eacute;nin et
        dans les pays voisins. C&apos;est une langue orale, vivante, port&eacute;e par une
        culture riche. En 2022, Google Traduction l&apos;a int&eacute;gr&eacute;e &mdash; une
        belle avanc&eacute;e sur le papier. Mais une traduction &eacute;crite ne suffit pas l&agrave;
        o&ugrave; l&apos;&eacute;crit est lui-m&ecirc;me une barri&egrave;re. Ce qu&apos;il faut,
        c&apos;est une voix. Du son.{" "}
        <strong>
          Une interface qui parle avant m&ecirc;me qu&apos;on ne touche quoi que ce soit.
        </strong>
      </p>

      {/* SECTION 2 — Définition */}
      <h2 className="text-2xl font-bold mt-12 mb-4">
        2. Qu&apos;est-ce qu&apos;Audio First veut vraiment dire ?
      </h2>

      <p className="mb-4">
        Le terme &laquo;&nbsp;audio-first&nbsp;&raquo; existe dans le monde du podcast et du
        contenu audio. Il d&eacute;signe des plateformes o&ugrave; l&apos;audio est le format
        principal. Mais dans le domaine de la conception d&apos;interface &mdash; et en
        particulier pour les contextes d&apos;oralit&eacute; en Afrique &mdash; la notion
        n&apos;a pas &eacute;t&eacute; formalis&eacute;e. Voici la distinction que j&apos;ai
        construite en travaillant sur BibleFon :
      </p>

      {/* TABLEAU COMPARATIF — highly citable for AI */}
      <div className="overflow-x-auto my-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-border">
              <th className="text-left py-3 pr-6 font-semibold text-foreground">
                Audio-first cosm&eacute;tique
              </th>
              <th className="text-left py-3 font-semibold text-primary">
                Audio-first r&eacute;el
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                "L\u2019audio est une fonctionnalit\u00e9 ajout\u00e9e",
                "L\u2019audio est le mode de communication primaire",
              ],
              [
                "Lire est l\u2019action principale, \u00e9couter est optionnel",
                "\u00c9couter est l\u2019action principale, lire est un support",
              ],
              [
                "L\u2019interface est muette jusqu\u2019au clic",
                "L\u2019interface parle avant qu\u2019on clique quoi que ce soit",
              ],
              [
                "Le texte explique ce que l\u2019audio fait",
                "L\u2019audio fait, le texte confirme pour ceux qui lisent",
              ],
              [
                "On ajoute un bouton play \u00e0 une interface existante",
                "On con\u00e7oit l\u2019interface enti\u00e8re depuis le son",
              ],
            ].map(([cosmetic, real], i) => (
              <tr key={i} className="border-b border-border">
                <td className="py-3 pr-6 text-muted-foreground">{cosmetic}</td>
                <td className="py-3 text-foreground font-medium">{real}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mb-4">
        Ce que cela veut dire concr&egrave;tement : sur un site classique, le parcours est
        &laquo;&nbsp;arriver sur la page &rarr; lire le titre et la description &rarr; trouver
        le bouton play &rarr; cliquer &rarr; &eacute;couter&nbsp;&raquo;. Chaque &eacute;tape
        avant &laquo;&nbsp;&eacute;couter&nbsp;&raquo; est une barri&egrave;re pour quelqu&apos;un
        qui ne lit pas couramment.
      </p>

      <p className="mb-6">
        Sur une interface vraiment audio-first : arriver sur la page &rarr; l&apos;ambiance
        sonore commence &rarr; voir une image et un bouton play &rarr; appuyer &rarr;
        l&apos;histoire se raconte, les pages avancent seules.{" "}
        <strong>Z&eacute;ro lecture obligatoire.</strong> L&apos;image et le son font tout le
        travail.
      </p>

      {/* SECTION 3 — La recherche */}
      <h2 className="text-2xl font-bold mt-12 mb-4">
        3. Ce que la recherche dit &mdash; et que le design ignore
      </h2>

      <p className="mb-4">
        Les &eacute;tudes sur les interfaces pour publics peu alphab&eacute;tis&eacute;s
        existent. Elles sont claires. Elles sont ignor&eacute;es par la quasi-totalit&eacute;
        des concepteurs.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">
        ACM CHI &mdash; Interfaces for Low-Literacy Users
      </h3>

      <p className="mb-4">
        Les participants peu alphab&eacute;tis&eacute;s pr&eacute;f&egrave;rent et fonctionnent
        mieux avec de grands boutons et ic&ocirc;nes qu&apos;avec des menus textuels. Les
        structures de navigation hi&eacute;rarchiques sont incomprises par la majorit&eacute; des
        utilisateurs peu alphab&eacute;tis&eacute;s.
      </p>

      <p className="mb-4">
        Ce r&eacute;sultat a des implications directes : pas de menus d&eacute;roulants, pas
        d&apos;arborescences, des ic&ocirc;nes grandes et des actions directes. Sur BibleFon :
        pas de menu de navigation, une seule page, des cartes avec des images, un bouton play.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">
        Microsoft Research &mdash; Voice interfaces for emerging markets
      </h3>

      <p className="mb-4">
        Les interfaces textuelles sont inutilisables par les utilisateurs peu alphab&eacute;tis&eacute;s
        sans exp&eacute;rience pr&eacute;alable. Et voici le chiffre qui change tout :{" "}
        <strong>
          l&apos;audio comme modalit&eacute; primaire augmente l&apos;engagement de 3x par rapport
          au texte seul dans les contextes d&apos;oralit&eacute;.
        </strong>{" "}
        Ce n&apos;est pas un probl&egrave;me de motivation ou d&apos;intelligence. C&apos;est un
        probl&egrave;me de conception.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">
        WhatsApp comme mod&egrave;le involontaire
      </h3>

      <p className="mb-4">
        WhatsApp est probablement l&apos;application la plus utilis&eacute;e par le public cible
        de BibleFon. Les messages vocaux fonctionnent parce que le public sait appuyer play
        sans lire un seul mot. La barre de progression est un geste universel, compris sans
        explication.
      </p>

      <p className="mb-6">
        WhatsApp n&apos;a pas enseign&eacute; &agrave; ces millions de personnes &agrave; utiliser
        le num&eacute;rique &mdash; il s&apos;est adapt&eacute; &agrave; la fa&ccedil;on dont
        elles communiquent d&eacute;j&agrave; : oralement. C&apos;est exactement la philosophie
        audio-first.
      </p>

      {/* SECTION 4 — BibleFon concret */}
      <h2 className="text-2xl font-bold mt-12 mb-4">
        4. BibleFon &mdash; Appliquer concr&egrave;tement
      </h2>

      <p className="mb-6">
        En mars 2026, j&apos;ai lanc&eacute; BibleFon v2. L&apos;objectif : transformer un flipbook
        avec audio en une vraie exp&eacute;rience audio-first. Voici les quatre d&eacute;cisions
        concr&egrave;tes que j&apos;ai prises, et pourquoi.
      </p>

      {/* DÉCISION 1 */}
      <h3 className="text-xl font-semibold mt-10 mb-3">
        D&eacute;cision 1 &mdash; Inverser la hi&eacute;rarchie des actions
      </h3>

      <p className="mb-4">
        Sur la v1, le bouton principal &eacute;tait &laquo;&nbsp;Lire&nbsp;&raquo;. La description
        textuelle en fran&ccedil;ais supposait que l&apos;utilisateur lisait couramment. Sur la v2 :
        le bouton play est le seul &eacute;l&eacute;ment d&apos;action principal.
      </p>

      <p className="mb-4">
        Ce changement d&eacute;clare quelque chose fondamental :{" "}
        <strong>
          l&apos;utilisateur par d&eacute;faut de ce site est quelqu&apos;un qui &eacute;coute,
          pas quelqu&apos;un qui lit.
        </strong>
      </p>

      <figure className="my-8">
        <Image
          src="/BibleFon_Decision1_Avant_Apres.png"
          alt="Comparaison V1 vs V2 de BibleFon : la carte David. V1 : bouton Lire en CTA principal avec description longue en français. V2 : bouton play seul, zéro description textuelle."
          width={900}
          height={500}
          className="rounded-lg w-full object-cover"
          priority
        />
        <figcaption className="text-sm text-muted-foreground text-center mt-3">
          V1 : &laquo;&nbsp;Lire&nbsp;&raquo; est le CTA principal avec description longue.
          V2 : bouton play, z&eacute;ro description. Le choix du bouton principal est une
          d&eacute;claration sur qui est l&apos;utilisateur par d&eacute;faut.
        </figcaption>
      </figure>

      {/* DÉCISION 2 */}
      <h3 className="text-xl font-semibold mt-10 mb-3">
        D&eacute;cision 2 &mdash; L&apos;interface parle en premier
      </h3>

      <p className="mb-4">
        Au survol d&apos;une carte (desktop) ou au tap d&apos;une ic&ocirc;ne musicale (mobile),
        une voix en fon commence &agrave; d&eacute;crire l&apos;histoire.{" "}
        <strong>L&apos;utilisateur n&apos;a pas encore cliqu&eacute; pour entrer.</strong>{" "}
        L&apos;interface l&apos;accueille dans sa langue.
      </p>

      <p className="mb-4">
        Sur desktop : une rich card appara&icirc;t &agrave; c&ocirc;t&eacute; de la carte avec
        titre, extrait et citation. Sur mobile : un panneau monte depuis le bas avec le m&ecirc;me
        contenu. Dans les deux cas, la voix en fon joue avant que l&apos;utilisateur ne demande
        quoi que ce soit.
      </p>

      <figure className="my-8">
        <Image
          src="/BibleFon_Decision2_Interface_Parle.png"
          alt="BibleFon Décision 2 : Desktop hover avec rich card et voix en fon. Mobile tap avec bottom sheet qui monte depuis le bas."
          width={900}
          height={500}
          className="rounded-lg w-full object-cover"
        />
        <figcaption className="text-sm text-muted-foreground text-center mt-3">
          Desktop (hover) : rich card + voix en fon. Mobile (tap) : bottom sheet qui monte
          depuis le bas. L&apos;interface parle avant qu&apos;on lui demande.
        </figcaption>
      </figure>

      {/* DÉCISION 3 */}
      <h3 className="text-xl font-semibold mt-10 mb-3">
        D&eacute;cision 3 &mdash; &Eacute;liminer les &eacute;tapes et unifier image et son
      </h3>

      <p className="mb-4">
        Sur la v1 : le player &eacute;tait en mode slide. Le texte fran&ccedil;ais s&apos;affichait
        en gros plan, l&apos;image &eacute;tait secondaire. Navigation manuelle, plusieurs
        &eacute;tapes avant l&apos;audio.
      </p>

      <p className="mb-4">
        Sur la v2 : 1 tap pour lancer l&apos;audio, les pages avancent automatiquement,
        l&apos;image est grande et centrale, le mot actuellement prononc&eacute; est surlign&eacute;
        en temps r&eacute;el &mdash; le karaoké.{" "}
        <strong>
          Pour les enfants qui apprennent &agrave; lire : aide p&eacute;dagogique. Pour les
          parents peu alphab&eacute;tis&eacute;s : beau &agrave; regarder sans contrainte.
        </strong>
      </p>

      <figure className="my-8">
        <Image
          src="/BibleFon_Decision3_Player.png"
          alt="BibleFon Décision 3 : V1 mode slide avec texte français en gros plan. V2 player immersif avec image dominante, karaoké doré et auto-pagination."
          width={900}
          height={500}
          className="rounded-lg w-full object-cover"
        />
        <figcaption className="text-sm text-muted-foreground text-center mt-3">
          V1 : mode slide avec texte fran&ccedil;ais en gros plan. V2 : player immersif, image
          dominante, karaoké en dor&eacute;, auto-pagination. L&apos;image et le son font tout le
          travail.
        </figcaption>
      </figure>

      {/* DÉCISION 4 */}
      <h3 className="text-xl font-semibold mt-10 mb-3">
        D&eacute;cision 4 &mdash; L&apos;ambiance avant le contenu
      </h3>

      <p className="mb-4">
        Quand l&apos;utilisateur descend vers la biblioth&egrave;que, une musique africaine
        commence doucement &mdash;{" "}
        <em>Whimsy Groove</em> de Kevin MacLeod (CC BY 4.0). Tambours, oiseaux,
        atmosph&egrave;re de conte.
      </p>

      <p className="mb-4">
        Ce n&apos;est pas de la d&eacute;coration.{" "}
        <strong>
          C&apos;est un signal : tu entres dans un espace d&apos;histoires.
        </strong>{" "}
        Le son pr&eacute;pare l&apos;&eacute;coute avant que l&apos;histoire commence.
      </p>

      <ul className="space-y-2 my-4 text-muted-foreground">
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
          <span>
            Volume bas &mdash; 0.3 maximum au d&eacute;marrage, fade in sur 2-3 secondes
          </span>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
          <span>Bouton son visible d&egrave;s que la musique d&eacute;marre</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
          <span>
            M&eacute;moire localStorage : le choix de l&apos;utilisateur est conserv&eacute;
          </span>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
          <span>
            Ducking automatique : quand un aper&ccedil;u audio joue, la musique baisse
          </span>
        </li>
      </ul>

      {/* SECTION 5 */}
      <h2 className="text-2xl font-bold mt-12 mb-4">
        5. Ce que cela d&eacute;montre &mdash; et ce qui reste
      </h2>

      <h3 className="text-xl font-semibold mt-8 mb-3">Ce que BibleFon prouve</h3>

      <p className="mb-4">BibleFon n&apos;est pas un produit fini. C&apos;est une d&eacute;monstration.</p>

      <ul className="space-y-2 my-4 text-muted-foreground">
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
          <span>
            Qu&apos;une interface audio-first est techniquement r&eacute;alisable avec des outils
            accessibles
          </span>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
          <span>
            Que Meta MMS-TTS-FON permet de synth&eacute;tiser de la voix en langue fon de
            qualit&eacute; suffisante
          </span>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
          <span>
            Que les patterns UX des apps les plus utilis&eacute;es peuvent &ecirc;tre adapt&eacute;s
            &agrave; des contextes d&apos;oralit&eacute;
          </span>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
          <span>
            Qu&apos;une exp&eacute;rience num&eacute;rique peut &ecirc;tre pens&eacute;e depuis le
            son, sans sacrifier la beaut&eacute;
          </span>
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-3">Ce qui reste &agrave; construire</h3>

      <ul className="space-y-2 my-4 text-muted-foreground">
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
          <span>
            Une vraie voix humaine pour le conteur &mdash; un locuteur fon natif enregistr&eacute;.
            Cette voix serait l&apos;&acirc;me du projet.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
          <span>
            Des enfants b&eacute;ninois qui r&eacute;pondent en ch&oelig;ur &mdash; le
            call-and-response du conte africain traditionnel.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
          <span>
            Plus d&apos;histoires : La Fournaise, No&eacute;, Abraham sont en pr&eacute;paration.
          </span>
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-3">
        Ce que cela implique pour le design en g&eacute;n&eacute;ral
      </h3>

      <p className="mb-4">
        La notion d&apos;audio-first appliqu&eacute;e aux contextes d&apos;oralit&eacute; ouvre
        des questions que le design habituel ne pose pas :
      </p>

      <ul className="space-y-2 my-4 text-muted-foreground">
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
          <span>Comment con&ccedil;oit-on une action sans texte ?</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
          <span>Comment indique-t-on un &eacute;tat sans &eacute;crire de message ?</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
          <span>
            Comment structure-t-on une biblioth&egrave;que pour quelqu&apos;un qui ne lit pas
            les cat&eacute;gories ?
          </span>
        </li>
      </ul>

      <p className="mb-6">
        Ces questions n&apos;ont pas de r&eacute;ponses d&eacute;finitives. Mais les poser
        s&eacute;rieusement, c&apos;est d&eacute;j&agrave; commencer &agrave; concevoir pour
        tous.
      </p>

      {/* CONCLUSION */}
      <h2 className="text-2xl font-bold mt-12 mb-4">Conclusion</h2>

      <p className="mb-4">
        Audio-first, dans le sens o&ugrave; je l&apos;entends, ce n&apos;est pas un format de
        contenu. <strong>C&apos;est une philosophie de conception.</strong>
      </p>

      <p className="mb-4">
        C&apos;est d&eacute;cider que l&apos;utilisateur par d&eacute;faut de ton interface
        n&apos;est pas forc&eacute;ment quelqu&apos;un qui lit couramment. C&apos;est construire
        depuis le son &mdash; et laisser le texte pour ceux qui veulent aller plus loin.
      </p>

      <p className="mb-4">
        BibleFon est ma premi&egrave;re r&eacute;ponse concr&egrave;te &agrave; cette question.
        Les principes &mdash; inverser la hi&eacute;rarchie des actions, &eacute;liminer les
        &eacute;tapes superflues, faire parler l&apos;interface avant le clic &mdash; valent pour
        bien d&apos;autres contextes.
      </p>

      <p className="mb-8 text-lg font-medium">
        Le num&eacute;rique parle &agrave; des gens qui savent lire. Il est temps de lui apprendre
        &agrave; parler &agrave; tout le monde.
      </p>

      {/* RÉFÉRENCES */}
      <div className="mt-12 pt-8 border-t border-border">
        <h3 className="text-base font-semibold text-muted-foreground uppercase tracking-wider mb-4">
          R&eacute;f&eacute;rences
        </h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>
            Medhi, I. et al. &mdash;{" "}
            <em>
              Usability of Text-Free Interfaces for Low-Literate Users
            </em>{" "}
            &mdash; ACM CHI
          </li>
          <li>
            Medhi, I. et al. &mdash;{" "}
            <em>
              A Comparison of Mobile Money-Transfer UIs for Non-Literate and Semi-Literate
              Users
            </em>{" "}
            &mdash; Microsoft Research India
          </li>
          <li>
            UNESCO &mdash; <em>Literacy Report 2023</em> &mdash; Analphab&eacute;tisme
            fonctionnel en Afrique subsaharienne
          </li>
          <li>
            GSMA &mdash; <em>Mobile Economy Sub-Saharan Africa 2024</em>
          </li>
          <li>
            Meta AI &mdash;{" "}
            <em>Scaling Speech Technology to 1,000+ Languages</em> &mdash; MMS-TTS-FON
          </li>
          <li>
            Kevin MacLeod &mdash; <em>Whimsy Groove</em> &mdash; incompetech.com &mdash; CC
            BY 4.0
          </li>
        </ul>
      </div>

      {/* BIO AUTEUR */}
      <div className="mt-10 pt-8 border-t border-border">
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <div>
            <p className="font-semibold text-foreground text-base">Manass&eacute; A. AKPOVI</p>
            <p className="text-sm text-muted-foreground mt-1">
              D&eacute;veloppeur web &middot; IA &amp; Inclusion num&eacute;rique &middot;
              Cr&eacute;ateur de BibleFon
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              B&eacute;ninois, &eacute;tudiant en ing&eacute;nierie web &agrave; l&apos;ESGI Paris.
              Je construis des interfaces pour ceux que le num&eacute;rique habituel ignore &mdash;
              &agrave; commencer par les locuteurs fon au B&eacute;nin.
            </p>
            <div className="flex flex-wrap gap-3 mt-3 text-sm">
              <a
                href="https://biblefon.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                biblefon.org
              </a>
              <span className="text-muted-foreground">&middot;</span>
              <a
                href="https://github.com/AkmaDev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                github.com/AkmaDev
              </a>
              <span className="text-muted-foreground">&middot;</span>
              <a
                href="mailto:manasse.akpovi@manasseakpovi.com"
                className="text-primary hover:underline"
              >
                manasse.akpovi@manasseakpovi.com
              </a>
            </div>
          </div>
        </div>
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
    title: `Audio First \u2014 Ce que cela veut vraiment dire | Manass\u00e9 AKPOVI`,
    description: article.excerpt,
    authors: [{ name: "Manas\u015f\u00e9 A. AKPOVI", url: "https://manasseakpovi.com" }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      url: `https://manasseakpovi.com/article/${slug}`,
      publishedTime: "2026-03-01",
      authors: ["https://manasseakpovi.com"],
      images: [
        {
          url: "/article-biblefon.jpg",
          width: 1200,
          height: 630,
          alt: "Audio First \u2014 BibleFon",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: ["/article-biblefon.jpg"],
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
            <span>Manass&eacute; A. AKPOVI</span>
            <span>&middot;</span>
            <time dateTime="2026-03">{article.date}</time>
            <span>&middot;</span>
            <span>{article.readTime}</span>
          </div>
        </div>

        <ContentComponent />
      </div>
    </div>
  );
}
