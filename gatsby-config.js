module.exports = {
  plugins: [
    'gatsby-theme-material-ui',
    `gatsby-plugin-react-helmet`,
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
        url: `https://5ea3bccff76cf10006153ec5--ryanfiller-gatsby.netlify.app/blog/code.rss.xml`,
        parserOption: {
          customFields: {
            feed: ['siteTitle', 'siteUrl', 'headshot', 'about'],
            item: ['content:encoded', 'excerpt'],
          }
        }
      }
    }
  ],
}