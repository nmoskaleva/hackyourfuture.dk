import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  content: {
    padding: '1rem 4rem 3rem 4rem',
    margin: '2rem auto',
    maxWidth: '1300px',
    fontSize: '1.4rem',
    lineHeight: '2.2rem',
    backgroundColor: '#efefef',
    boxShadow:
      '0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12)',
    borderRadius: '4px',
    overflow: 'hidden',

    ['@media (max-width:780px)']: {
      margin: '2rem'
    },

    ['@media (nth-child(even)']: {
      backgroundColor: '#fbfbfb'
    },

    [theme.breakpoints.down('sm')]: {
      padding: '1rem 5vw',
      margin: 0,
      fontSize: '1rem',
      lineHeight: '2.2rem',
      backgroundColor: '#eee',
      boxShadow: 'none',
      borderRadius: 0
    },
    [theme.breakpoints.down('lg')]: {
      textAlign: 'justify'
    }
  }
})

const Content = ({ classes, children, id = '' }) => {
  return (
    <div className={classes.content} id={id}>
      {children}
    </div>
  )
}

export default withStyles(styles)(Content)
