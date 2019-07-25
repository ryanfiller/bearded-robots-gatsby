import React from "react"
import { graphql } from 'gatsby';
import Layout from "../components/layout"
import { Link, Button } from "gatsby-theme-material-ui";

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
      {/* <Link to="/page-2/">Go to page 2</Link> */}
      <Button>Test</Button>
    </Layout>
  )
}

export default IndexPage
