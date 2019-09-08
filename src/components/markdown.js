import React from 'react'
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from '@mdx-js/react'

import Image from './image';

const Markdown = (props) => {

  const components = {
    Image: Image
  }

  return (
    <MDXProvider components={components}>
      <MDXRenderer>
        {props.children}
      </MDXRenderer>
    </MDXProvider>
  )
}

export default Markdown;