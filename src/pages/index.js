import React from "react"
import { graphql } from 'gatsby';

import { Link } from 'gatsby'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Headshot from '../components/headshot'
import Preview from '../components/preview'

// todo clean up unused stuff in query
export const query = graphql`
	query Homepage {
    meta: feedRyanBlogMeta {
      creator
      title
      description
      author
      generator
      link
      lastBuildDate
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

  const { edges: posts } = props.data.posts;

  return (
    <>
      {/* <Headshot /> */}
      <Link to="about">
        <Button>
          More About Me
        </Button>
      </Link>
      <br />
      <Grid container spacing={2}>
        {posts.map((post, index) => (
          <Grid item xs={6} key={index}>
            <Preview {...post.node} /> 
          </Grid>
        ))}
      </Grid>
      <br />
      <Link to="blog">
        <Button variant="contained">
          Read More Blogs
        </Button>
      </Link>
      <a href="https://www.ryanfiller.com">
        <Button variant="contained">
          ryanfiller.com
        </Button>
      </a>
    </>
  )
}

export default IndexPage
