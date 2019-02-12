import styles from './content.scss'
import React from 'react'

export default ({ children, id = '' }) => {
  return (
    <div className='content' id={id}>
      <style jsx>{styles}</style>
      {children}
    </div>
  )
}
