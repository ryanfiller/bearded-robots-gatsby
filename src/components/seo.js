import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO(props) {
  const site = useStaticQuery(
    graphql`
      query {
        meta: feedRyanBlogMeta {
          title
          description
        }
      }
    `
  )

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en'
      }}
      title={(props.post && props.post.title) ? `${props.post.title} | ${site.meta.title} | Bearded Robots` : `${site.meta.title} | Bearded Robots`}
      meta={[
        {
          name: `description`,
          content: (props.post && props.post.excerpt) ? props.post.excerpt : site.meta.description
        },
      ]}
    />
  )
}

export default SEO
