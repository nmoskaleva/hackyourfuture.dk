import React from 'react'
import { useEffect, useState } from 'react'
import styles from './partners.scss'

// Contentful client
import client from '../../contentful'

// Contentful entry id
const pressEntryId = '3EdwVQtZsN7jEnaxwe9qbm'

export default () => {
  async function fetchEntry() {
    const entry = await client.getEntry(pressEntryId)
    const press = entry.fields.list
    if (entry.fields) return press
    else console.log(`error`)
  }

  const [press, setPress] = useState([])

  useEffect(() => {
    async function getPress() {
      const pressData = await fetchEntry()
      setPress([...pressData])
    }
    getPress()
  }, [])

  return (
    <div className='partners'>
      <style jsx>{styles}</style>
      <h2 className='center'>Featured in</h2>
      <div className='wrapper'>
        {press.map(press => (
          <div className='partner' key={press.fields.id}>
            <a aria-label='Media link' rel='noopener' target='_blank' href={press.fields.url}>
              <img alt={press.fields.title} src={press.fields.logo.fields.file.url} width='170vw' />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}