import React from "react"
import { graphql } from 'gatsby';

import Grid from '@material-ui/core/Grid';

import Layout from "../components/layout"
import Preview from '../components/preview.js'

export const query = graphql`
	query Homepage {
		posts: allRyanPost {
      nodes {
        title
        date
        excerpt
      }
    }
  }
`


const IndexPage = (props) => {

  const posts = props.data.posts.nodes;

  return (
    <Layout>
      <Grid container spacing={2}>
        {posts.map((post, index) => (
          <Grid item xs="6" key={index}>
            <Preview {...post} /> 
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}

export default IndexPage
