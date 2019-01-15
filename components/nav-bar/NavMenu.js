import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Link from 'next/link'

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
    const { children, menu } = this.props
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
          onMouseEnter={() => console.log('enter')}
          onMouseLeave={this.handleClose}
          style={{ marginTop: '3rem' }}
        >
          {menu.map(item => (
            <MenuItem
              style={{ display: 'block' }}
              key={`menue-item-${item.id}`}
              onClick={this.handleClose}
            >
              <Link href={item.url}>
                <a style={{ display: 'block', textDecoration: 'none' }}>
                  {item.title}
                </a>
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </div>
    )
  }
}

export default NavMenu
