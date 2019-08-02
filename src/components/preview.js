import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Link } from 'gatsby-theme-material-ui';

const Preview = (props) => {

  return (
    <Link to={props.slug} >
      <Card>
        {/* <CardActionArea> */}
          <header>
            {props.title}
            <br />
            <span>
              {props.date}
            </span>
          </header>
          <br />
          <main>
            {props.excerpt}
          </main>
        {/* </CardActionArea> */}
      </Card>
    </Link>
  )
}

export default Preview;