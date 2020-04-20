import React from 'react'
import press from './press.json'
import styles from './partners.scss'
import CarouselComponent from '../carousel/carousel'

export default () => (
  <section className='partners'>
    <style jsx>{styles}</style>
    <h2 className='center'>Featured in</h2>
    <div className='wrapper'>
      <CarouselComponent>
        {press.map(({ id, logo, url, title }) => (
          <div className='partner' key={id}>
            <a aria-label='Media link' rel='noopener' target='_blank' href={url}>
              <img className='carousel-img' alt={title} src={`/static/media/${logo}`} width='170vw' />
            </a>
          </div>
        ))}
      </CarouselComponent>
    </div>

  </section>
)
