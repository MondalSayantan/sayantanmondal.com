/**
 * @type {import('gatsby').GatsbyConfig}
 */

const config = require("./config/website");

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    twitterUsername: config.twitter,
    image: `/logo.png`,
    siteUrl: config.siteUrl,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    `gatsby-plugin-sass`,
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ["G-45YRHHQVRB"],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn: "https://02c20b59426044a1a403512ef3c54488@o4504265515991040.ingest.sentry.io/4504371993051136",
        // sampleRate: 0.7,
      },
    },
  ],
};
