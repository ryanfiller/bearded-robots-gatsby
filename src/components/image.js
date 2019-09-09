
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
  
import Img from 'react-cloudinary-lazy-image'

const Image = (props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            cloudinaryCloud
          }
        }
      }
    `
  )

  const cloud = site.siteMetadata.cloudinaryCloud  
  // TODO regex might be better here
  const image = props.src.split(`${cloud}/image/upload`)[1]

  return (
    <div className={`cl-image ${props.align}`}>
      <Img
        alt={props.alt}
        title={props.title}
        cloudName={cloud}
        imageName={image}
        fluid={{
          maxWidth: 1000,
        }}
        urlParams={'c_fill'}
      />
    </div>
  )
}

export default Image
