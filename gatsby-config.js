module.exports = {
  siteMetadata: {
    title: `NIKPRO web solutions, The place to build, develop and learn`,
    author: `Azadeh Faramarzi`,
    description: `A blog for learning all around the web`,
    siteUrl: `https://nikpro.com.au`,
    social: {
      github: `azad6026`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Change plugin default options here, e.g.:
        // ssr: false
        // displayName: false,
        // minify: false
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/images`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `@raae/gatsby-remark-oembed`,
            options: {
              // usePrefix defaults to false
              // usePrefix: true is the same as ["oembed"]
              // usePrefix: ["oembed", "video"],
              providers: {
                // Important to exclude providers
                // that adds js to the page.
                // If you do not need them.
                exclude: ["Reddit"],
              },
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-115034454-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
      },
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        googleAdClientId: "9558741990436873",
        head: false, // Optional
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nikpro blog`,
        short_name: `Nikpro`,
        start_url: `/`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/nikpromainlogo.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
