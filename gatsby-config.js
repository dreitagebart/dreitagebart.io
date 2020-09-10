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
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/assets/markdown`,
        name: "blog"
      }
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem"
            }
          },
          {
            resolve: "gatsby-remark-vscode"
          },
          {
            resolve: "gatsby-remark-copy-linked-files"
          },
          {
            resolve: "gatsby-remark-smartypants"
          }
        ],
        plugins: ["gatsby-remark-images"]
      }
    },
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
