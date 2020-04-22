import React from 'react'

import Markdown from '../components/markdown'
import Paper from '@material-ui/core/Paper'
import Image from '../components/image'
import Meta from '../components/meta'

// export const postQuery = graphql`
// 	query post($slug: String!) {
// 		ryanPost(slug: { eq: $slug } ) {
//       id
//       slug
//       title
//       date
//       categories
//       external_url
//       banner {
//         url
//         alt
//       }
//       body
// 		}
// 	}
// `

const Post = (props) => {

  // const {
  //   banner,
  //   title,
  //   date,
  //   categories,
  //   body,
  // } = props.data.ryanPost
  
  return (
      <Paper square component="article">
        hey
        {/* <header>
          <Image src={banner.url} alt={banner.alt} />
          <h1>{title}</h1>
          <Meta
            date={date}
            categories={categories}
          />
        </header>
        <Markdown>
          {body}
        </Markdown> */}
      </Paper>
      // TODO put back, more, link to oringinal here
  )
}

export default Post;