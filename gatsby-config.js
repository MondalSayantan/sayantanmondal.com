/**
 * @type {import('gatsby').GatsbyConfig}
 */

const config = require("./config/website");

module.exports = {
  siteMetadata: {
    title: "Sayantan Mondal - Full-Stack Developer",
    description:
      "I'm Sayantan Mondal, a Full-Stack Developer from India. I'm passionate about building awesome web apps and learning new technologies.",
    twitter: "@sayantannnnn",
    siteUrl: "https://www.sayantanmondal.com",
    siteLogo: `src/assets/logo.png`,
    siteBanner: `src/assets/logo.png`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ["4370465793", "G - K78R22BBY4"],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
  ],
};
