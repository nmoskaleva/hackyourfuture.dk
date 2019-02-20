import styles from './content.scss'
import React from 'react'

export default ({ children, id = '' }) => {
  return (
    <div className='content' id={id}>
      <style jsx global>{`
      h3 {
        margin: 18px 0 18px;
      }
      p {
        margin: 12px 0 12px;
      }
      `}</style>
      <style jsx>{styles}</style>
      {children}
    </div>
  )
}
