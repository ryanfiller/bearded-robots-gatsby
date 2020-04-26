import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container';

import Headshot from '../components/headshot'

const AboutPage = (props) => {
  useStaticQuery(
    graphql`
      query {
        meta: feedRyanBlogMeta {
          headshot
          author
          title
          description
          about
        }
      }
    `
  )

  const { 
    headshot,
    author,
    description,
    about
  } = props.data.meta
  
  return (
    <Container maxWidth="md">
      <Paper square component="article">
        <Headshot headshot={headshot} author={author} />
        <h1>About</h1>
        <p>{description}</p>
        <p>{about}</p>
        <p>
          This page is an experiment in using RSS and webhooks to syndicate data between two Gatsby sites. 
        </p>
        <p>
          Read more about it at TODO
        </p>
      </Paper>
    </Container>
  )
}

export default AboutPage
