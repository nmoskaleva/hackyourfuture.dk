import React from 'react'
import Link from 'next/link'
import links from '../links.json'
import uuid from 'uuid/v4'
import styles from './navbar.scss'

export default () => (
  <nav className='items'>
    <style jsx>{styles}</style>
    <ul>
      {/*loop json links*/}
      {links.map(({ id, title, url }) => (
        <li key={uuid()}>
          <Link href={url}>
            <a>{title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)
