import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Avatar from '@material-ui/core/Avatar';

const Headshot = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "headshot.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Avatar>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </Avatar>
  )
}

export default Headshot