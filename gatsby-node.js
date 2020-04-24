const path = require(`path`)

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'FeedRyanBlog') {
    createNodeField({
      node,
      name: 'id',
      value: node.id
    })
  
    createNodeField({
      node,
      name: 'slug',
      value: node.link.split('.com')[1]
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
	await graphql(`
    {
      meta: feedRyanBlogMeta {
        siteUrl
      }

      posts: allFeedRyanBlog {
        edges {
          node {
            title
            pubDate
            link
            categories
            excerpt 
            content {
              encoded
            }
            fields {
              id
              slug
            }
          }
        }
      }
    }
	`).then(({ data, errors }) => {

		if (errors) {
			return Promise.reject(errors);
    }
		data.posts.edges.forEach(({ node }) => {
			actions.createPage({
        path: node.fields.slug,
				component: path.resolve(`./src/templates/post.js`),
				context: {
          id: node.fields.id,
          slug: node.fields.slug,
				},
			})
		})
	})
}
