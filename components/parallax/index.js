import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '60vh',
    background:
      "#ccc fixed url('/static/background.jpg') no-repeat center center/cover",
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    position: 'relative',
    left: '0',
    right: '0',
    top: '0',
    zIndex: '-1',
  },

  logo: {
    maxHeight: '50vh',
    maxWidth: '50vh',
    display: 'block',
    margin: 'auto',
    opacity: '0.85'
  }
})

const MyParallax = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.logo}>
      <img src='/static/logo_white.svg' alt='HackYourFuture Copenhagen' />
    </div>
  </div>
)

export default withStyles(styles)(MyParallax)
