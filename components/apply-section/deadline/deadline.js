import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Timer from './timer'

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
  }
})

const classNumber = 15
const deadlineDate = '02 / 20 / 2020'
const classStartDate = '03 / 01 / 2020'

const formattedDeadlineDate = new Date(deadlineDate).toLocaleString('en', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})

const formattedNewClassDate = new Date(classStartDate).toLocaleString('en', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})

export default function deadline() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Typography className={classes.deadline}>
        <span className={classes.deadlineClass}>Class {classNumber}</span>{' '}
        starts on {formattedNewClassDate} | Application Deadline:{' '}
        {formattedDeadlineDate}
      </Typography>
      <Container>
        <Timer date={formattedDeadlineDate} />
      </Container>
    </React.Fragment>
  )
}
