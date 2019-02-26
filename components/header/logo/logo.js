import React from 'react'
import Link from 'next/link'
import styles from './logo.scss'

export default () => (
  <div className='logo'>
    <style jsx>{styles}</style>
    <Link href='/'>
      <a>
        <img
          className='img'
          src='/static/logo-dark.svg'
          alt='HackYourFuture Copenhagen'
        />
      </a>
    </Link>
  </div>
)
