import React from 'react'
import Questioning from './questioning-card'
import questions from './questions'

// imports material UI
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

// styling
const useStyles = makeStyles(() => ({
  title: {
    color: '#293a7d',
    fontFamily: 'Space Mono, monospace',
    fontSize: '2rem',
    margin: '10px 0 40px 0'
  }
}))

export default function faq() {
  const classes = useStyles()
  return (
    <Container>
      <Typography className={classes.title}>
        Frequently Asked Questions
      </Typography>
      {questions.map(({ id, question, answer }) => (
        <Questioning key={id} question={question} answer={answer} />
      ))}
    </Container>
  )
}
