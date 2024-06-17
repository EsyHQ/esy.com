require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    pathPrefix: "/",
    title: "Esy - Your Personal Ai Essay Writer",
    description: `Write your next paper with Esy, an AI assistant that learns your writing style to create original, authentic essays.`,
    twitterUsername: `@esydotcom`,
    image: "/images/esy-brand-512.png",
    siteUrl: process.env.GATSBY_SITE_URL,
    type: "website",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-root-import",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              maxWidth: 1500,
              quality: 80,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `${process.env.GOOGLE_ANALYTICS_TRACKING_ID}`,
        ],
        pluginConfig: {
          head: true,
          respectDNT: true,
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://esy.us20.list-manage.com/subscribe/post?u=3b51c8da7ed629b563d12cc11&amp;id=83cab3c485',
          timeout: 3500,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Esy - Your Personal Ai Essay Writer`,
        short_name: `Esy`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `static/favicon/favicon-32x32.png`, // Path to the main favicon
        icons: [
          {
            src: `/favicon/favicon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicon/favicon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
          {
            src: `/favicon/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `/favicon/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `/favicon/apple-touch-icon.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.esy.com',
        sitemap: 'https://www.esy.com/sitemap-0.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
      __key: "images",
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'mdImages',
        path: `${__dirname}/src/images/mdImages`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/svg/`,
        },
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
      __key: "pages",
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [require('tailwindcss'), require('autoprefixer')],
      },
    }
  ],
};