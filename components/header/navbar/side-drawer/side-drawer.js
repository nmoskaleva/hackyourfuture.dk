import React, { useEffect, useState } from 'react'
import styles from './side-drawer.scss'
import links from '../../links.json'
import Link from 'next/link'
import Icon from '@mdi/react'
import { mdiBackspaceOutline } from '@mdi/js'
import uuid from 'uuid/v4'

export default ({ show, onGoBackClick }) => {
  const [path, setPath] = useState('')
  useEffect(() => setPath(window.location.pathname + window.location.hash), [
    path
  ])

  return (
    <nav className={show ? 'side-drawer open' : 'side-drawer'}>
      <style jsx>{styles}</style>
      <ul>
        <li key={uuid()} onClick={onGoBackClick}>
          <Icon color='#293a7d' size={1} path={mdiBackspaceOutline} />
        </li>
        {/*Outer list items ---------- */}
        {links.map(({ title, url, dropdown }) => (
          <li className={url === path && 'active'} key={uuid()}>
            <Link href={url}>
              <a rel="noopener">{title}</a>
            </Link>

            {/*Sub items --------- */}
            {dropdown.length > 0 && (
              <ul key={uuid()}>
                {dropdown.map(({ title, url }) => (
                  <li className={url === path && 'active'} key={uuid()}>
                    <Link href={url}>
                      <a rel="noopener">- {title}</a>
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
