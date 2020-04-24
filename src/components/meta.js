import React from 'react'

import { format } from 'date-fns'
import Chip from '@material-ui/core/Chip';

const Meta = (props) => {
  const date = Date.parse(props.date)

  return (
    <section className="meta">
      <time dateTime={date}>
        {format(date, 'MMMM, do uuuu')}
      </time>
      <ul className="categories">
        {props.categories.map((category, index) => (
          <li key={index}>
            <Chip label={category} size="small" />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Meta;