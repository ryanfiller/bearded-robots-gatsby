import React from 'react'

import { Link } from 'gatsby-theme-material-ui';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Image from './image'
import Meta from './meta'

const Preview = (props) => {

  const {
    title,
    link,
    pubDate: date,
    categories,
    excerpt,
    thumbnail,
    banner,
  } = props;

  const slug = link.split('.com')[1]

  // const image = !!thumbnail.url ? thumbnail : banner;

  return (
    <Card>
      {/* <Link to={slug}>
        <CardMedia>
          <Image src={image.url} alt={image.alt} title={image.title} />
        </CardMedia>
      </Link> */}
      <CardContent>
        <Link to={slug}>
          <h2>{title}</h2>
        </Link>
        <Meta
          date={date}
          categories={categories}
        />
        <p>{excerpt}</p>
      </CardContent>
      <CardActions>
        <Link
          component={Link}
          to={slug}
        >
          <Button 
            variant="outlined"
          >
            Read More
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default Preview;