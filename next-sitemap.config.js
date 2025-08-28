/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.manasseakpovi.com", // Ton site principal
  generateRobotsTxt: true, // Génère le fichier robots.txt
  changefreq: "daily",
  priority: 0.7,
  // Pages statiques supplémentaires à inclure
  additionalPaths: async (config) => [
    await config.transform(config, "/blog"),
    await config.transform(config, "/comingsoon"),
    await config.transform(config, "/cv"),
    await config.transform(config, "/portfoliodesign"),
  ],
};
