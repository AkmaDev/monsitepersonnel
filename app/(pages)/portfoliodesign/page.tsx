import Portfolio from "@/components/Portofolio";
import { projects as allProjects, Project } from "@/data/project";
import Head from "next/head";

const PortfolioPage = () => {
  const pageTitle = "Portfolio Design | Manassé AKPOVI";
  const pageDescription =
    "Découvrez mes créations graphiques, affiches et vidéos réalisées pour divers projets et clients.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Portfolio Design - Manassé AKPOVI",
    description: pageDescription,
    itemListElement: allProjects.map((p: Project, index: number) => ({
      "@type": "CreativeWork",
      position: index + 1,
      name: p.title,
      url: p.link,
      creator: { "@type": "Person", name: "Manassé AKPOVI" },
      datePublished: p.year,
      about: p.description,
    })),
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
          content="https://manasseakpovi.com/portfoliodesign"
        />
        <meta property="og:image" content="/og-portfolio.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="/og-portfolio.png" />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <Portfolio projects={allProjects} />
    </>
  );
};

export default PortfolioPage;
