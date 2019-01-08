import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import NavMenu from './NavMenu'
import links from './links'
import Button from '@material-ui/core/es/Button/Button'
import Typography from '@material-ui/core/es/Typography/Typography'
import NavigationDrawer from './NavigationDrawer'

const styles = theme => ({
  root: {
    flexGrow: 1,
    position: 'relative',
    zIndex: 999
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  showOnLargeScreen: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  hamburgerIcon: {
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'inherit'
    }
  }
})

class Index extends React.Component {
  state = {
    leftDrawerOpen: false
  }

  toggleDrawer = open => {
    this.setState({ leftDrawerOpen: open })
  }

  render = () => {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={this.toggleDrawer.bind(this, true)}
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              {/*Hamburger icon*/}
              <MenuIcon className={classes.hamburgerIcon} />
            </IconButton>
            {/*left*/}
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <a href="/">
                <img
                  src="/static/logo_white.svg"
                  style={{ height: '45px', marginTop: '9px' }}
                  alt=""
                />
              </a>
            </Typography>

            {/*Right*/}
            <div className={classes.showOnLargeScreen}>
              {links.map(link => {
                const { id, title, url, dropdown } = link
                return link.dropdown !== undefined ? (
                  <NavMenu key={id} menu={[{ id, title, url }, ...dropdown]}>
                    {title}
                  </NavMenu>
                ) : (
                  <Button key={id} href={url} color="inherit">
                    {title}
                  </Button>
                )
              })}
            </div>
          </Toolbar>
        </AppBar>
        <NavigationDrawer
          toggleDrawer={this.toggleDrawer}
          leftDrawerOpen={this.state.leftDrawerOpen}
          links={links}
        />
      </div>
    )
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Index)
