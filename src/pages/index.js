import React from "react"
import { graphql } from 'gatsby';

import { Link } from 'gatsby'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Headshot from '../components/headshot'
import BlogList from '../components/blog-list'

// todo clean up unused stuff in query
export const query = graphql`
	query Homepage {
    meta: feedRyanBlogMeta {
      siteUrl
      headshot
      author
      description
      about
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

const IndexPage = (props) => {
  const {
    siteUrl,
    headshot,
    author,
    description,
    about,
  } = props.data.meta
  const { edges: posts } = props.data.posts;

  return (
    <>
    <Container maxWidth="md">
      <Paper square className="about">
        <Grid container spacing={2}>
          <Box className="site-into">
            <h1>{description} (syndicated)</h1>
            {about}
          </Box>
          <Headshot headshot={headshot} author={author} />
        </Grid>
        <ButtonGroup fullWidth>
          <Button>
            <Link to="about">
              More About Me
            </Link>
          </Button>
          <Button>
            <Link to="blog">
              More Posts
            </Link>
          </Button>
          <Button>
            <a href={siteUrl}>
              My Full Site
            </a>
          </Button>
        </ButtonGroup>
      </Paper>
    </Container>
      <br />
      <BlogList posts={posts} limit={4} />
      <br />
      <Button fullWidth variant="contained">
        <Link to="blog">
          Read More Blogs
        </Link>
      </Button>
    </>
  )
}

export default IndexPage
