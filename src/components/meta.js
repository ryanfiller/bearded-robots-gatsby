import React from 'react'

import { format } from 'date-fns'
import Chip from '@material-ui/core/Chip';

const Meta = (props) => {

  const date = Date.parse(props.date)

  return (
    <section className="meta">
      <time datetime={date}>
        {format(date, 'MMMM, do uuuu')}
      </time>
      <ul className="tags">
        {props.tags.map((tag, index) => (
          <li key={index}>
            <Chip label={tag} size="small" />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Meta;