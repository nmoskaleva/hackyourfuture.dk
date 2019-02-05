import React from 'react'
import sponsors from './sponsors.json'
import styles from './sponsors.scss'

export default () => (
  <div className='footer-sponsors'>
    <style jsx>{styles}</style>
    <h2 className='center'>Official partners & supporters</h2>
    <div className='sponsors'>
      {sponsors.map(({ id, logo, url }) => (
        <div className='sponsor' key={id}>
          <a target='_blank' href={url}>
            <img alt='' src={`/static/sponsors/${logo}`} />
          </a>
        </div>
      ))}
    </div>
  </div>
)
