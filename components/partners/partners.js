import React from 'react'
import partners from './partners.json'
import styles from './partners.scss'

export default ({ partners, sponsor }) => (
  <>
    <style jsx>{styles}</style>
    <section className='partners'>
      <h2 className='center'>Sponsored by</h2>
      <a
        aria-label='Partner link'
        rel='noopener'
        target='_blank'
        href={sponsor.url}
        className='mollerske'
      >
        <img
          alt='Den A.P. Møllerske Støttefond logo'
          src={sponsor.logo.fields.file.url}
        />
      </a>
      <h2 className='center'>Supported by</h2>
      <div className='wrapper'>
        {partners.map(partner => (
          <div className='partner' key={partner.fields.id}>
            <a
              aria-label='Partner link'
              rel='noopener'
              target='_blank'
              href={partner.fields.url}
            >
              <img alt={partner.fields.title} src={partner.fields.logo.fields.file.url} width='150vw' />
            </a>
          </div>
        ))}
      </div>
    </section>
  </>
)
