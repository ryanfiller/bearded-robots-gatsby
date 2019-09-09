import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Container from '@material-ui/core/Container';
import Fade from '@material-ui/core/Fade';
import Header from "./header"

import "../styles/styles.css"

const Layout = (props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header 
        siteTitle={data.site.siteMetadata.title} 
        location={props.location.pathname}
      />
      <Fade in={setTimeout(() => true, 3000)}>
        <Container component="main">
          {props.children}
        </Container>
      </Fade>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
