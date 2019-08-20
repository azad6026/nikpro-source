module.exports = {
  siteMetadata: {
    title: `Welcome`,
    author: `Kyle Mathews`,
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
    social: {
      twitter: `kylemathews`,
    },
  },
  plugins: [
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
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    }, // In your gatsby-config.js
    {
      resolve: "gatsby-remark-code-repls",
      options: {
        // Optional default link text.
        // Defaults to "REPL".
        // eg <a href="...">Click here</a>
        defaultText: "Click here",

        // Example code links are relative to this dir.
        // eg examples/path/to/file.js
        //directory: `${__dirname}/examples/`,

        // Optional link target.
        // Note that if a target is specified, "noreferrer" will also be added.
        // eg <a href="..." target="_blank" rel="noreferrer">...</a>
        target: "_blank",

        // Provider specific options
        codepen: {
          // Optional path to a custom redirect template.
          // The redirect page is only shown briefly,
          // But you can use this setting to override its CSS styling.
          // redirectTemplate: `${__dirname}/src/redirect-template.js`,

          // Optional HTML contents to inject into REPL.
          // Defaults to `<div id="root"></div>`.
          // eg '<div id="root"></div>'
          html: "",

          // Optional externals to load from a CDN.
          // eg '//unpkg.com/react/umd/react.development.js'
          externals: [],

          // Include CSS with matching name.
          // If set to `true`, when specifying `file1.js` as example file,
          // it will try to inject the CSS in `file1.css` if the file exists,
          // otherwise the default behaviour is preserved
          includeMatchingCSS: false,
        },

        codesandbox: {
          // Optional HTML contents to inject into REPL.
          // Defaults to `<div id="root"></div>`.
          // eg '<div id="root"></div>'
          html: "",

          // Optional runtime dependencies to load from NPM.
          // eg ['react', 'react-dom'] or ['react@15', 'react-dom@15']
          dependencies: [],
        },
      },
    },
  ],
}
