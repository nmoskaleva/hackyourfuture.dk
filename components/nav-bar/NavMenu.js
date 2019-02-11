import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Link from 'next/link'
import { withStyles } from '@material-ui/core/styles'
import uuid from 'uuid/v4'

const styles = () => ({
  menu: {
    marginTop: '3rem'
  },
  menuItem: {
    display: 'block'
  },
  titleLink: {
    display: 'block',
    textDecoration: 'none'
  }
})

class NavMenu extends React.Component {
  state = {
    anchorEl: null
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { anchorEl } = this.state
    const { children, menu, classes } = this.props

    return (
      <div>
        <Button
          color='inherit'
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup='true'
          onClick={this.handleClick}
          // onMouseOver={this.handleClick}
        >
          {children} <ExpandMore />
        </Button>
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          // onMouseEnter={() => console.log('enter')}
          onMouseLeave={this.handleClose}
          className={classes.menu}
        >
          {menu.map(item => (
            <MenuItem
              className={classes.menuItem}
              key={uuid()}
              onClick={this.handleClose}
            >
              {/*sub menus*/}
                <a href={item.url} className={classes.titleLink}>{item.title}</a>
            </MenuItem>
          ))}
        </Menu>
      </div>
    )
  }
}

export default withStyles(styles)(NavMenu)
