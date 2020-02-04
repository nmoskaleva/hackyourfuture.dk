import React from 'react'
import useSWR from 'swr'
import Timer from './timer'
import { fetcher } from './helpers'
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
    '@media (min-width: 992px)': {
      borderRadius: '25px',
      padding: '0.5rem 0.8rem 0.6rem 0.8rem',
      backgroundColor: '#293A7D',
      color: '#FFFFFF'
    }
  }
})

export default function Deadline() {
  const classes = useStyles()

  const { data, error } = useSWR('/api/deadline-data', fetcher)
  if (error) { console.log('Failed to fetch deadline data', { error }) }

  const newClassNumber = data?.data[1][0]
  const applicationDeadline = data?.data[1][1]

  const applicationEndDate = new Date(applicationDeadline).toLocaleString(
    'en',
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }
  )

  if (applicationDeadline) {
    return (
      <Content>
        <Typography className={classes.deadline}>
          <span className={classes.newClassNumber}>Class {newClassNumber}</span> Application Deadline is on {applicationEndDate}
        </Typography>
        <Container>
          <Timer date={applicationEndDate} />
        </Container>
      </Content>
    )
  } else {
    return null
  }
}
