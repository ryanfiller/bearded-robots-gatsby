import React from 'react'

import { Link } from 'gatsby-theme-material-ui';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Image from './image'

const Preview = (props) => {

  const {
    slug,
    title,
    date,
    excerpt,
    thumbnail,
    banner,
  } = props;

  const image = !!thumbnail.url ? thumbnail : banner;

  return (
    <Card>
      <Link to={slug}>
        <CardMedia>
          <Image src={image.url} alt={image.alt} title={image.title} />
        </CardMedia>
      </Link>
      {/* <CardMedia
        style={{height: '250px'}}
        image="http://placekitten.com/400/250"
        title="Contemplative Reptile"
      /> */}
      <CardContent>
        <Link to={slug}>
          <h2>{title}</h2>
        </Link>
        <span>{date}</span>
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