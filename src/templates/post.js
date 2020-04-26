import React from 'react'

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container';

import Markdown from '../components/markdown'
import Meta from '../components/meta'

export const postQuery = graphql`
	query post($id: String!) {    
    post: feedRyanBlog(id: { eq: $id } ) {
      link
      title
      pubDate
      categories
      excerpt
      content {
        encoded
      }
    }
	}
`

const Post = (props) => {

  const {
    link,
    // banner,
    title,
    pubDate: date,
    categories,
    content: {
      encoded: body
    }
  } = props.data.post
  
  
  return (
    <Container maxWidth="md">
      <Paper square component="article">
        <header>
          {/* <Image src={banner.url} alt={banner.alt} /> */}
          <h1>{title}</h1>
          <Meta
            date={date}
            categories={categories}
            />
          <Button>
            <a href={link}>
              Read The Original Post
            </a>
          </Button>
        </header>
        <Markdown content={body} />
      </Paper>
    </Container>
  )
}

export default Post;