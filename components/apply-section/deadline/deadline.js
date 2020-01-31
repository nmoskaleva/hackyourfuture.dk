
import React from 'react'
import Timer from './timer'
import { makeStyles } from '@material-ui/core/styles'
import Content from '../../layouts/content/content'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

// styling
const useStyles = makeStyles({
  deadline: {
    color: '#293a7d',
    display: 'block',
    textAlign: 'center',
    fontFamily: "'Space Mono', 'monospace'",
    fontSize: '1.5rem',
    fontWeight: 'bold',
    paddingTop: '1rem',
    marginBottom: 0,
    padding: 0
  },
  newClassNumber: {
    borderRadius: '25px',
    padding: '0.5rem 0.8rem 0.6rem 0.8rem',
    backgroundColor: '#293A7D',
    color: '#FFFFFF',
    '@media (max-width:768px)': {
      padding: '0 0.4rem 0 0.4rem'
    }
  }
})

export default function Deadline() {
  const classes = useStyles()

  const newClassNumber = 14
  const applicationDeadline = '02 / 20 / 2020'
  const classStart = '03 / 01 / 2020'

  const applicationEndDate = new Date(applicationDeadline).toLocaleString(
    'en',
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }
  )

  const newClassStartDate = new Date(classStart).toLocaleString('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })


  return (
    <React.Fragment>
      <Typography className={classes.deadline}>
        <span className={classes.newClassNumber}>Class {newClassNumber}</span> starts on {newClassStartDate} | Application Deadline: {applicationEndDate}
      </Typography>
      <Container>
        <Timer date={applicationEndDate} />
      </Container>
    </React.Fragment>
  )

}
