import React from 'react'
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from '@mdx-js/react'

const Markdown = (props) => {

  const components = {}

  return (
    <MDXProvider components={components}>
      <MDXRenderer>
        {props.children}
      </MDXRenderer>
    </MDXProvider>
  )
}

export default Markdown;