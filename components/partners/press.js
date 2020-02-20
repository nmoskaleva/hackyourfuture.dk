import React from 'react'
import styles from './partners.scss'
import PressCarousel from './press-carousel'

export default () => (
  <section className='partners'>
    <style jsx>{styles}</style>
    <h2 className='center'>Featured in</h2>
    <PressCarousel />
  </section>
)
