import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LatestInsights from "@/components/LatestInsights";
import Head from "next/head";

const BlogPage = () => {
  const pageTitle = "Blog | Strategic Insights Africa";
  const pageDescription =
    "Décryptages stratégiques hebdomadaires sur les entreprises, technologies et politiques publiques qui transforment l'Afrique.";

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
        <meta property="og:url" content="https://manasseakpovi.com/blog" />
        <meta property="og:image" content="/og-blog.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="/og-blog.png" />
      </Head>

      <Header />
      <Hero />
      <LatestInsights />
    </>
  );
};

export default BlogPage;
