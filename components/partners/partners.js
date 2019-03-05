import React from 'react'
import partners from './partners.json'
import styles from './partners.scss'
console.log(4);


export default () => (
  <div className='partners'>
    <style jsx>{styles}</style>
    <h2 className='center'>Official partners</h2>
    <div className='wrapper'>
      {partners.map(({ id, logo, url, title, width }) => (
        <div className='partner' key={id}>
          <a rel='noopener' target='_blank' href={url}>
            <img alt={title} src={`/static/partners/${logo}`} width={width ? width: ''} />
          </a>
        </div>
      ))}
    </div>
  </div>
)
