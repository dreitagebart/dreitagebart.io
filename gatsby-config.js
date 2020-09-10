/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "dreitagebart.io",
    author: "dreitagebart aka fred or stefan",
    description:
      "A starter personal blog with styled components, dark mode, and Netlify CMS.",
    siteUrl: "https://dreitagebart.io",
    social: {
      twitter: "dreitagebart"
    }
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "dreitagebart.io",
        short_name: "dreitagebart",
        start_url: "/",
        background_color: "#efefef",
        theme_color: "#333333",
        display: "minimal-ui",
        icon: "src/assets/images/favicon.png"
      }
    }
  ]
}
