const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
	graphql(`
    {
      allRyanPost {
        edges {
          node {
            id
            title
            date
            slug
            external_url
            image {
              alt
            }
            excerpt
            category
            tags
            body  
          }
        }
      }
    }
	`).then(({ data, errors }) => {

		if (errors) {
			return Promise.reject(errors);
    }

		data.allRyanPost.edges.forEach(({ node }) => {
			actions.createPage({
				path: node.slug,
				component: path.resolve(`./src/templates/post.js`),
				context: {
          id: node.id,
          slug: node.slug,
				},
			})
		})
	})
}