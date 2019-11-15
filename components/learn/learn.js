import React from 'react'

// import material UI
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

// styling
const useStyles = makeStyles({
  title: {
    color: '#293a7d',
    fontFamily: "'Space Mono', 'monospace'",
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px'
  },
  content: {
    fontFamily: "'Work Sans', 'sans-serif'",
    marginBottom: '20px'
  },
  linkOne: {
    color: '#FF8108',
    textDecoration: 'underline'
  },
  linkTwo: {
    color: 'black',
    textDecoration: 'underline'
  },
  linkThree: {
    display: 'block',
    textAlign: 'center'
  }
})

export default function learn() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Typography className={classes.title}>Get a Headstart!</Typography>
      <Typography className={classes.content}>
        Waiting to start the test assignment? Check out this resource to get a
        head-start by trying some relevant tutorials and going through our{' '}
        <Link
          href='https://github.com/HackYourFuture-CPH/curriculum/blob/master/pre-introduction.md'
          className={classes.linkOne}
        >
          pre-introductory materials
        </Link>
        . It will be a great introduction to some of the topics we teach!
      </Typography>
      <Typography className={classes.title}>Did you know?</Typography>
      <Typography className={classes.content}>
        Our entire curriculum can be accessed online, for free{' '}
        <Link
          href='https://github.com/HackYourFuture-cph/curriculum'
          className={classes.linkTwo}
        >
          here
        </Link>
        . You can use it, clone it or fork it. Whatever. Just remember that it
        is the collaborative effort of volunteers and HackYourFuture staff and
        should not be used commercially. It is licensed under a{' '}
        <Link
          href='https://creativecommons.org/licenses/by-nc-sa/4.0/'
          className={classes.linkTwo}
        >
          Creative Commons Attribution-NonCommercial-ShareAlike 4.0
          International License
        </Link>
        .
      </Typography>
      <Link
        href='https://creativecommons.org/licenses/by-nc-sa/4.0/'
        className={classes.linkThree}
      >
        <img src='https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png' />
      </Link>
    </React.Fragment>
  )
}
