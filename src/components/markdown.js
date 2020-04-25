import React from 'react'

const Markdown = (props) => {
  return <article dangerouslySetInnerHTML={{__html: props.content}} />
}

export default Markdown;