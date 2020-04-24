import React from 'react'

import Avatar from '@material-ui/core/Avatar';

const Headshot = props => {
  const { headshot, author } = props

  return (
    <Avatar className="headshot">
      <img src={headshot} alt={`${author} headshot`} />
    </Avatar>
  )
}

export default Headshot