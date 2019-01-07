import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import { links } from './links-json'
const styles = {
  list: {
    width: 350
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
            <>
              <List key={id}>
                <ListItem button component="a" href={url}>
                  <ListItemText primary={title} />
                </ListItem>

                {dropdown &&
                  dropdown.map(item => (
                    <ListItem key={item.id} button component="a" href={item.url}>
                      <ListItemText primary={item.title} />
                    </ListItem>
                  ))}
              </List>
            </>
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
