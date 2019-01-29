import Sponsers from './sponsers/index'
import SocialIcons from './social-icon'
import { withStyles } from '@material-ui/core/styles'
// import classNames from 'classnames'
const styles = theme => ({
  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  links: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: '#293a7d',
    color: '#fff',
    textAlign: 'center'
  },

  bottom: {
    padding: '2rem'
  },

  copyright: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    padding: '1rem'
  },

  hyfInfo: {
    display: 'flex',
    padding: '1rem 10rem',
    flexDirection: 'rows',
    [theme.breakpoints.down('sm')]: {
      padding: '1rem',
      flexDirection: 'column'
    }
  },

  cvrDiv: {
    flex: 1,
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      marginTop: '2rem'
    }
  },

  right: {
    flex: 1,
    margin: 'auto',
  }
})

const Footer = ({ classes }) => (
  <footer className={classes.footer}>
    <Sponsers />
    <div className={classes.links}>
      <div className={classes.bottom}>
        {/*<Newsletter />*/}
        <SocialIcons />
      </div>
      <div className={classes.hyfInfo}>
        <div className={classes.right}>
          Foreningen HackYourFuture <br />
          Kongens Enghave <br />
          2450 København <br />
        </div>
        <div className={classes.cvrDiv}>
          CVR:
          <br />
          38 53 31 93
        </div>
      </div>
      <div className={classes.copyright}>
        &copy; Copyright HackYourFuture Copenhagen 2018
      </div>
    </div>
  </footer>
)

export default withStyles(styles)(Footer)
