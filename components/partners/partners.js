import React from 'react'
import partners from './partners.json'
import styles from './partners.scss'

export default () => (
  <div className='partners'>
    <style jsx>{styles}</style>
    <h2 className='center'>Sponsored by</h2>
    <div className='partner'>
    <a aria-label="Partner link" rel='noopener' target='_blank' href="https://www.apmollerfonde.dk/">
      <img alt="mollerske" src={`/static/partners/mollerske.png`} width="800vw"/>
    </a>
    </div>
    <h2 className='center'>Supported by</h2>
    <div className='wrapper'>
      {partners.map(({ id, logo, url, title, width }) => (
        <div className='partner' key={id}>
          <a aria-label="Partner link" rel='noopener' target='_blank' href={url}>
            <img alt={title} src={`/static/partners/${logo}`} width="150vw" />
          </a>
        </div>
      ))}
    </div>
  </div>
)
