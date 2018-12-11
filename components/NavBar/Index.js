import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import NavMenu from './NavMenu'

const styles = {
  root: {
    flexGrow: 1,
    position: 'relative',
    zIndex: 999
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  logo: {
    maxHeight: '50px'
  }
}

function Index(props) {
  const {classes} = props
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <img src="/static/HYF_LOGO.png" className={classes.logo} />
          </Typography>
          <NavMenu menu="Apply" items={['Apply for class', 'Coding Taster Class for women', 'Learn']} />
          <NavMenu menu="Volunteer" items={['Becoming a mentor', 'Volunteering', 'Curriculum']} />
          <NavMenu menu="Volunteer" items={['Becoming a mentor', 'Volunteering', 'Curriculum']} />
          <NavMenu menu="HIRE" />
          <NavMenu menu="ABOUT" items={['FAQ', 'Contact', 'Partners']} />
        </Toolbar>
      </AppBar>
    </div>
  )
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Index)