import React from "react"
import { graphql } from 'gatsby';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

import BlogPage from '../components/blog-list'

// todo clean up unused stuff in query
export const query = graphql`
	query Blog {
    meta: feedRyanBlogMeta {
      siteUrl
    }

    posts: allFeedRyanBlog {
      edges {
        node {
          title
          pubDate
          link
          categories
          excerpt 
          content {
            encoded
          }
        }
      }
    }
  }
`

const Blog = (props) => {
  const { siteUrl } = props.data.meta;
  const { edges: posts } = props.data.posts;

  return (
    <>
      <Container maxWidth="md">
        <Paper square component="article">
          <h1>Blog</h1>
        </Paper>
      </Container>
      <br />
      <BlogPage posts={posts} />
      <br />
      <Button fullWidth variant="contained">
        <a href={`${siteUrl}/blog`}>
          Read My Full Blog
        </a>
      </Button>
    </>
  )
}

export default Blog
