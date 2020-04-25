import React from 'react'

const Markdown = (props) => {
  return (
    <section
      className="body"
      dangerouslySetInnerHTML={{__html: props.content}}
    />
  )
}

export default Markdown;