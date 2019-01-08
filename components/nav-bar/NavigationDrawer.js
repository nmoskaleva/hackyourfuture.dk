import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const styles = {
  list: {
    width: 300
  },
  fullList: {
    width: 'auto'
  }
}

class NavigationDrawer extends React.Component {
  render() {
    const { classes, toggleDrawer, leftDrawerOpen, links } = this.props
    const sideList = (
      <div className={classes.list}>
        {links.map(link => {
          const { id, title, url, dropdown } = link
          return (
            <React.Fragment>
              {/*Main links*/}
              <List key={id}>
                <ListItem button component="a" href={url}>
                  <ListItemText primary={title} />
                </ListItem>

                {/*Sub Links*/}
                {dropdown &&
                  dropdown.map(item => (
                    <ListItem
                      key={item.id}
                      button
                      component="a"
                      href={item.url}
                    >
                      -&nbsp;
                      <ListItemText primary={item.title} />
                    </ListItem>
                  ))}
              </List>
            </React.Fragment>
          )
        })}
      </div>
    )
    return (
      <div>
        <Drawer open={leftDrawerOpen} onClose={toggleDrawer.bind(this, false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={toggleDrawer.bind(this, false)}
            onKeyDown={toggleDrawer.bind(this, false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    )
  }
}

NavigationDrawer.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(NavigationDrawer)
