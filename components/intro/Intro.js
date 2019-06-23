import React from 'react'
import styles from './intro.scss'
import {
  title,
  subTitle,
  title1,
  content1,
  title2,
  content2,
  title3,
  content3
} from '../content/_intro'

export default () => (
  <section className='intro'>
    <style jsx>{styles}</style>
    <h2>{title}</h2>
    <h3>{subTitle}</h3>
    <ul>
      <li>
        <h3>{title1}</h3>
        <p>{content1}</p>
      </li>
      <li>
        <h3>{title2}</h3>
        <p>{content2}</p>
      </li>
      <li>
        <h3>{title3}</h3>
        <p>{content3}</p>
      </li>
    </ul>
    <img src='/static/logo-dark.svg' alt='HackYourFuture Copenhagen' />
  </section>
)
