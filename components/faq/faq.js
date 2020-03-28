import React from 'react'
import { useEffect, useState } from 'react'
import Questioning from './questioning-card'

// imports material UI
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

// Contentful client
import client from '../../contentful'

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
  async function fetchEntries() {
    const entries = await client.getEntries({
      content_type: 'faq',
      order: 'fields.id'
    })
    const faqData = entries.items
    if (entries.items) return faqData
    else console.log(`error`)
  }

  const [faqs, setFaqs] = useState([])

  useEffect(() => {
    async function getFaqs() {
      const allFaqs = await fetchEntries()
      setFaqs([...allFaqs])
    }
    getFaqs()
  }, [])

  const classes = useStyles()

  return (
    < React.Fragment >
      <h2>Frequently Asked Questions</h2>
      <Container>
        {faqs.map(faq => (
          <Questioning key={faq.fields.id} question={faq.fields.question} answer={faq.fields.answer} />
        ))}
      </Container>
    </React.Fragment >
  )
}