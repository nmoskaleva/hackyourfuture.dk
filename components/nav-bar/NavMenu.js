import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ExpandMore from '@material-ui/icons/ExpandMore'

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

    return (
      <div>
        <Button
          color="inherit"
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
          // onMouseOver={this.handleClick}
        >
          {this.props.children} <ExpandMore />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          onMouseEnter={() => console.log('enter')}
          onMouseLeave={this.handleClose}
          style={{ marginTop: '3rem' }}
        >
          {this.props.menu.map(item => (
            <MenuItem key={`menue-item-${item.id}`} onClick={this.handleClose}>
              <a style={{ textDecoration: 'none' }} href={item.url}>
                {item.title}
              </a>
            </MenuItem>
          ))}
        </Menu>
      </div>
    )
  }
}

export default NavMenu
