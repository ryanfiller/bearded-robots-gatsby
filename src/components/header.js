import React from 'react';

import { Link } from "gatsby"

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Header = (props) => {
  
  return (
    <Paper square component="header" id="site-header">
      <Tabs
      component="nav"
      // this is reeeaaally hacky
      value={props.location.length < 7 ? props.location : '/blog'}
      indicatorColor="primary"
      textColor="primary"
      >
        <Tab
          tabIndex={0}
          component={Link}
          to="/"
          value="/"
          label="Ryan"
        />
        <Tab
          tabIndex={1}
          component='span'
          disabled
          value={null}
          className="tab-spacer"
        />
        <Tab
          tabIndex={0}
          component={Link}
          to="blog"
          value="/blog"
          label="blog"
        />
        <Tab
          tabIndex={0}
          component={Link}
          to="about"
          value="/about"
          label="about"
        />
      </Tabs>
    </Paper>
    );
  }

export default Header