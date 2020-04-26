import React from 'react'

import Grid from '@material-ui/core/Grid';

import Preview from './preview'

const BlogList = props => {
  const { posts, limit } = props

  return (
    <Grid container spacing={2}>
      {(limit ? posts.slice(0, 4) : posts).map((post, index) => (
        <Grid item xs={6} key={index}>
          <Preview {...post.node} /> 
        </Grid>
      ))}
    </Grid>
  )
}

export default BlogList