module.exports = {
  siteMetadata: {
    title: 'ryanfiller.com',
    author: `@gatsbyjs`,
		description: 'syndicated posts from ryanfiller.com',
    author: 'Ryan Filler',
    // TODO pull this from syndicate.json from other site.
		cloudinaryCloud: 'ryanfiller'
  },
  plugins: [
    'gatsby-theme-material-ui',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
          component: require.resolve(`./src/components/layout`)
      }
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        name: `RyanBlog`,
        // url: `https://www.ryanfiller.com/blog/code/rss.xml`,
        url: `https://5e9fab9a6f297d000679494e--ryanfiller-gatsby.netlify.app/blog/code.rss.xml`,
        parserOption: {
          customFields: {
            feed: ['otherTitle', 'extendedDescription'],
            item: ['content:encoded','excerpt'],
          }
        }
      }
    }
  ],
}
