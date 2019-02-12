import styles from './content.scss'
import React from 'react'

export default ({ children, id = '' }) => {
  return (
    <div className='content' id={id}>
      <style jsx>{styles}</style>
      <img className='shape-up' src='/static/shape.svg' alt='shape1' />
      {children}
      <img className='shape-down' src='/static/shape2.svg' alt='shape2' />
    </div>
  )
}
