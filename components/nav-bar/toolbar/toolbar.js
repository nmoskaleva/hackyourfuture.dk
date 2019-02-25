import React from 'react'
import Link from 'next/link'
import styles from './toolbar.scss'
import links from '../links.json'
import uuid from 'uuid/v4'

export default props => (
  <header className='toolbar'>
    <style jsx>{styles}</style>

    <nav className='navigation'>
      {/*drawer toggle button*/}
      <button className='toggle-button' onClick={props.drawerClickHandler}>
        <div />
        <div />
        <div />
      </button>

      <div className='logo'>
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
      <div className='spacer' />
      <div className='items'>
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
      </div>
    </nav>
  </header>
)
