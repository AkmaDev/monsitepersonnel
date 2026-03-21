import ArticleCard from "./ArticleCard";

const LatestInsights = () => {
  const articles = [
    {
      title: "Ce que BibleFon m'a appris sur ce que « Audio First » veut vraiment dire",
      excerpt:
        "Il ne s'agit pas d'ajouter un bouton play. Il s'agit de concevoir pour des gens dont la langue, la culture et les pratiques sont fondamentalement orales — et pour qui l'écrit n'est pas une option, c'est une barrière.",
      category: "Product Building",
      readTime: "8 min",
      date: "20 mars 2026",
      image: "/article-biblefon.jpg",
      slug: "audio-first-biblefon",
    },
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
