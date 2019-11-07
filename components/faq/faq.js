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
    fontSize: '2rem',
    fontFamily: "'Space Mono', 'monospace'",
    fontWeight: 'bold',
    marginBottom: '30px'
  }
}))

export default function faq() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Typography className={classes.title}>
        Frequently Asked Questions
      </Typography>
      <Container>
        {questions.map(({ id, question, answer }) => (
          <Questioning key={id} question={question} answer={answer} />
        ))}
      </Container>
    </React.Fragment>
  )
}
