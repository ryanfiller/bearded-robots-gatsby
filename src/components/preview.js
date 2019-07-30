import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Link, Button } from "gatsby-theme-material-ui";

const Preview = (props) => {
  return (
    <Card>
      <CardActionArea>
        <header>
          {props.title}
          <span>
            {props.date}
          </span>
        </header>
        <main>
          {props.excpet}
        </main>
      </CardActionArea>
    </Card>
  )
}

export default Preview;