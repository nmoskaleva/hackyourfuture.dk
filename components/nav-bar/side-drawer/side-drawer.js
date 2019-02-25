import React from 'react'
import styles from './side-drawer.scss'
import links from '../links.json'
import Link from 'next/link'
import BackIcon from 'mdi-material-ui/BackspaceOutline'
import uuid from 'uuid/v4'

export default ({ show, onGoBackClick }) => {
  return (
    <nav className={show ? 'side-drawer open' : 'side-drawer'}>
      <style jsx>{styles}</style>
      <ul>
        <li key={uuid()} onClick={onGoBackClick}>
          <a href='#'>
            <BackIcon />
          </a>
        </li>
        {/*Outer list items ---------- */}
        {links.map(({ title, url, dropdown }) => (
          <li key={uuid()}>
            <Link href={url}>
              <a>{title}</a>
            </Link>

            {/*Sub items --------- */}
            {dropdown.length > 0 && (
              <ul key={uuid()}>
                {dropdown.map(({ title, url }) => (
                  <li key={uuid()}>
                    <Link href={url}>
                      <a>- {title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
