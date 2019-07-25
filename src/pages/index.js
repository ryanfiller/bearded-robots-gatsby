import React from "react"
import { graphql } from 'gatsby';
import Layout from "../components/layout"

export const query = graphql`
	query Homepage {
		posts: allRyanPost {
      nodes {
        id
        title
        value
      }
    }
  }
`


const IndexPage = (props) => {

  const posts = props.data.posts.nodes;

  return (
    <Layout>
      {posts.map(post => (
        <article key={post.id}>
          <header>{post.title}</header>
          <p>{post.value}</p>
        </article>
      ))}
    </Layout>
  )
}

export default IndexPage
