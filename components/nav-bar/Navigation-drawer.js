import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

const styles = theme => ({
  list: {
    width: 300
  },
  fullList: {
    width: 'auto'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  }
})

class NavigationDrawer extends React.Component {
  render() {
    const { classes, toggleDrawer, leftDrawerOpen, links } = this.props
    const sideList = (
      <div className={classes.list}>
        {links.map(link => {
          const { id, title, url, dropdown } = link
          return (
              <List key={id}>
                <ListItem button component='a' href={url}>
                  <ListItemText primary={title} />
                </ListItem>

                {/*Sub Links*/}
                {dropdown &&
                  dropdown.map(item => (
                    <ListItem
                      key={item.id}
                      button
                      component='a'
                      href={item.url}
                    >
                      -&nbsp;
                      <ListItemText primary={item.title} />
                    </ListItem>
                  ))}
              </List>
          )
        })}
      </div>
    )
    return (
      <div>
        <SwipeableDrawer
          open={leftDrawerOpen}
          onClose={() => toggleDrawer(false)}
          onOpen={() => toggleDrawer(true)}
        >
          {/*touch to open / close*/}
          <div
            tabIndex={0}
            role='button'
            onClick={() => toggleDrawer(false)}
            onKeyDown={() => toggleDrawer(false)}
          />
          {/*cross close icon*/}
          <div className={classes.drawerHeader}>
            <IconButton onClick={() => toggleDrawer(false)}>
              <ChevronLeftIcon />
            </IconButton>
          </div>

          {sideList}
        </SwipeableDrawer>
      </div>
    )
  }
}

NavigationDrawer.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(NavigationDrawer)
