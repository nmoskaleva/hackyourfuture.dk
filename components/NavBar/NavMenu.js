import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import toRenderProps from 'recompose/toRenderProps'
import withState from 'recompose/withState'
import ExpandMore from '@material-ui/icons/ExpandMore'

const WithState = toRenderProps(withState('anchorEl', 'updateAnchorEl', null))

function NavMenu(props) {
  return !props.items
    ? <Button style={{color: '#fff'}}>{props.menu}</Button>
    : (
      <WithState>
        {({anchorEl, updateAnchorEl}) => {
          const open = Boolean(anchorEl)
          const handleClose = () => {
            updateAnchorEl(null)
          }

          return (
            <React.Fragment>
              <Button
                style={{color: '#fff'}}
                aria-owns={open ? 'render-props-menu' : undefined}
                aria-haspopup="true"
                onClick={event => {
                  updateAnchorEl(event.currentTarget)
                }}>

                {props.menu}
                <ExpandMore className="expand" />
              </Button>
              <Menu id="render-props-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
                {props.items.map(item =>
                  <MenuItem>{item}</MenuItem>
                )}
              </Menu>
            </React.Fragment>
          )
        }}
      </WithState>
    )
}

export default NavMenu