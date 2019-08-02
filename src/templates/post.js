import React from 'react'

import Markdown from '../components/markdown'
import Paper from '@material-ui/core/Paper'

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
		}
	}
`

const Post = (props) => {

  const {
    body,
  } = props.data.ryanPost

  return (
      <Paper square component="article" >
        <Markdown>
          {body}
        </Markdown>
      </Paper>
  )
}

export default Post;