import React from 'react'

import Paper from '@material-ui/core/Paper';

export const postQuery = graphql`
	query post($slug: String!) {
		ryanPost(slug: { eq: $slug } ) {
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
      rawBody 
		}
	}
`

const Post = (props) => {

  const {
    body,
    rawBody,
  } = props.data.ryanPost

  return (
      <Paper square component="article" >
        <div dangerouslySetInnerHTML={{__html: rawBody}} />
      </Paper>
  )
}

export default Post;