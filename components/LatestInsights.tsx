import ArticleCard from "./ArticleCard";

const LatestInsights = () => {
  const articles = [
    // {
    //   title: "L'écosystème fintech nigérian : Entre innovation et régulation",
    //   excerpt:
    //     "Analyse approfondie de la stratégie de Flutterwave et de l'impact des nouvelles réglementations de la Banque centrale du Nigeria sur l'écosystème des paiements digitaux.",
    //   category: "Fintech",
    //   readTime: "12 min",
    //   date: "3 nov 2024",
    //   featured: true,
    //   image: "/article-fintech.png",
    //   slug: "ecosysteme-fintech-nigerien-innovation-regulation",
    // },
    // {
    //   title:
    //     "Kenya : La stratégie numérique de Safaricom face à la concurrence",
    //   excerpt:
    //     "Comment l'opérateur historique adapte son modèle face aux nouveaux entrants et aux évolutions technologiques.",
    //   category: "Télécoms",
    //   readTime: "8 min",
    //   date: "1 nov 2024",
    //   image: "/article-telecoms.jpg",
    //   slug: "kenya-strategie-numerique-safaricom-concurrence",
    // },
    {
      title: "Rwanda : Les leçons d'une transformation digitale réussie",
      excerpt:
        "Décryptage des politiques publiques qui ont fait du Rwanda un leader en matière d'innovation technologique.",
      category: "Gouvernance",
      readTime: "10 min",
      date: "30 oct 2024",
      image: "/article-governance.jpg",
      slug: "rwanda-transformation-digitale-reussie",
    },
    // {
    //   title: "Le défi logistique en Afrique de l'Ouest : l'approche de Kobo360",
    //   excerpt:
    //     "Comment la startup nigériane révolutionne le transport de marchandises grâce à la technologie.",
    //   category: "Logistique",
    //   readTime: "7 min",
    //   date: "28 oct 2024",
    //   image: "/article-logistics.jpg",
    //   slug: "defi-logistique-afrique-ouest-kobo360",
    // },
    // {
    //   title:
    //     "Économie créative : L'ascension de Nollywood et son impact économique",
    //   excerpt:
    //     "Analyse de l'industrie cinématographique nigériane et de son influence sur l'économie créative africaine.",
    //   category: "Culture",
    //   readTime: "9 min",
    //   date: "26 oct 2024",
    //   image: "/article-culture.jpg",
    //   slug: "economie-creative-nollywood-impact-economique",
    // },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Dernières analyses
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Décryptage hebdomadaire des stratégies, innovations et enjeux qui
            transforment l&apos;Afrique contemporaine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              excerpt={article.excerpt}
              category={article.category}
              readTime={article.readTime}
              date={article.date}
              // featured={index === 0}
              image={article.image}
              slug={article.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;
