import React from 'react'
import partners from './partners.json'
import styles from './partners.scss'

export default () => (
  <>
    <style jsx>{styles}</style>
    <section className='partners'>
      <h2 className='center'>Sponsored by</h2>
      <a
        aria-label='Partner link'
        rel='noopener'
        target='_blank'
        href='https://www.apmollerfonde.dk/'
        className='mollerske'
      >
        <img
          alt='Den A.P. Møllerske Støttefond logo'
          src={`/static/partners/mollerske.png`}
        />
      </a>
      <h2 className='center'>Supported by</h2>
      <div className='wrapper'>
        {partners.map(({ id, logo, url, title, width }) => (
          <div className='partner' key={id}>
            <a
              aria-label='Partner link'
              rel='noopener'
              target='_blank'
              href={url}
            >
              <img alt={title} src={`/static/partners/${logo}`} width='150vw' />
            </a>
          </div>
        ))}
      </div>
    </section>
  </>
)
