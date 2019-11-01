import React from 'react'
import Questioning from './questioning-card'
import questions from './questions'

export default function faq() {
  return (
    <React.Fragment>
      {questions.map(({ id, question, answer }) => (
        <Questioning key={id} question={question} answer={answer} />
      ))}
    </React.Fragment>
  )
}
