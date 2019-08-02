import React from "react"
import { graphql } from 'gatsby';

import Grid from '@material-ui/core/Grid';
import { Link } from 'gatsby'
import Button from '@material-ui/core/Button';

import Preview from '../components/preview'

// todo clean up unused stuff in query
export const query = graphql`
	query Homepage {
		posts: allRyanPost {
      nodes {
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
  }
`


const IndexPage = (props) => {

  const posts = props.data.posts.nodes;

  return (
    <>
      <Link to="about">
        <Button>
          More About Me
        </Button>
      </Link>
      <br />
      <Grid container spacing={2}>
        {posts.map((post, index) => (
          <Grid item xs={6} key={index}>
            <Preview {...post} /> 
          </Grid>
        ))}
      </Grid>
      <br />
      <Link to="blog">
        <Button>
          Read More Blogs
        </Button>
      </Link>
    </>
  )
}

export default IndexPage
