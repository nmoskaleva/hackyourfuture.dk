import React from 'react'
import styles from './partners.scss'

export default ({ press }) => (
  <div className='partners'>
    <style jsx>{styles}</style>
    <h2 className='center'>Featured in</h2>
    <div className='wrapper'>
      {press.map(media => (
        <div className='partner' key={media.fields.id}>
          <a aria-label='Media link' rel='noopener' target='_blank' href={media.fields.url}>
            <img alt={media.fields.title} src={media.fields.logo.fields.file.url} width='170vw' />
          </a>
        </div>
      ))}
    </div>
  </div>
)