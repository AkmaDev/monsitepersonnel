import Portfolio from "@/components/Portofolio";
import Head from "next/head";

const PortfolioPage = () => {
  const pageTitle = "Portfolio Design | Manassé AKPOVI";
  const pageDescription =
    "Découvrez mes créations graphiques, affiches et vidéos réalisées pour divers projets et clients. Chaque projet reflète ma passion pour le design et l'innovation visuelle.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Portfolio Design - Manassé AKPOVI",
    description: pageDescription,
    itemListElement: [
      {
        "@type": "CreativeWork",
        position: 1,
        name: "Campagne Publicitaire - Produits Locaux",
        url: "https://instagram.com/p/example1",
        creator: { "@type": "Person", name: "Manassé AKPOVI" },
        datePublished: "2024-01-01",
        about:
          "Série d'affiches pour la promotion des producteurs locaux béninois.",
      },
      {
        "@type": "CreativeWork",
        position: 2,
        name: "Trailer - Flipbook Bible Enfants",
        url: "https://youtube.com/watch?v=example2",
        creator: { "@type": "Person", name: "Manassé AKPOVI" },
        datePublished: "2024-01-01",
        about:
          "Vidéo de présentation interactive pour l'application de lecture biblique des enfants.",
      },
      // ... à ajouter
    ],
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://manasse-akpovi.com/portfolio-design"
        />
        <meta property="og:image" content="/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="/og-image.png" />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <Portfolio />
    </>
  );
};

export default PortfolioPage;
