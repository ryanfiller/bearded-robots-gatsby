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
    'ryan-posts',
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
    }
  ],
}
