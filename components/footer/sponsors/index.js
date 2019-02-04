import React from 'react'
import sponsors from './sponsors.json'
import './sponsors.scss'

export default () => (
  <div className='wrapper'>
    <h2 className='center'>Official partners & supporters</h2>
    <div className='sponsors'>
      {sponsors.map(({ id, logo, url }) => (
        <div className='sponsor' key={id}>
          <a target='_blank' href={url}>
            <img alt='' src={'/static/sponsors/new/blue-color/' + logo} />
          </a>
        </div>
      ))}
    </div>
  </div>
)
