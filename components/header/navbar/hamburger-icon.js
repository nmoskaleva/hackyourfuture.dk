import React from 'react'
import styles from './hamburger-icon.scss'

export default props => (
  <button className='toggle-button' onClick={props.drawerClickHandler}>
    <style jsx>{styles}</style>
    <div />
    <div />
    <div />
  </button>
)
