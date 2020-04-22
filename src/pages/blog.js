import React from "react"
import { graphql } from 'gatsby';

import Grid from '@material-ui/core/Grid';

import Preview from '../components/preview'

// // todo clean up unused stuff in query
// export const query = graphql`
// 	# query Blog {
// 	# 	posts: allRyanPost {
//   #     nodes {
//   #       id
//   #       title
//   #       date
//   #       slug
//   #       external_url
//   #       thumbnail {
//   #         url
//   #       }
//   #       banner {
//   #         url
//   #       }
//   #       excerpt
//   #       category
//   #       categories
//   #       body
//   #     }
//   #   }
//   # }
// `


const Blog = (props) => {

  const posts = props.data.posts.nodes;

  return (
    <>
      {/* <Grid container spacing={2}>
        {posts.map((post, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Preview {...post} /> 
          </Grid>
        ))}
      </Grid> */}
    </>
  )
}

export default Blog
