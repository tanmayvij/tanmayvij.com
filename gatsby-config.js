require(`dotenv`).config();

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    siteTitle: `Tanmay Vij | Full Stack Developer & DevOps Engineer`,
    siteTitleAlt: `Tanmay Vij | Full Stack Developer & DevOps Engineer`,
    siteHeadline: ``,
    siteUrl: `https://tanmayvij.com`,
    siteDescription: `Playful and Colorful One-Page portfolio featuring Parallax effects and animations`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@tanmayvij`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
};
