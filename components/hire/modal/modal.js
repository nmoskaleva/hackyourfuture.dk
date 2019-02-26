import React from 'react'
import styles from './modal.scss'

const Modal = ({ onClose, children, show }) => {
  return (
    show && (
      <div className='overlay'>
        <style jsx>{styles}</style>
        <div className='modal'>
          <button className='close' onClick={onClose}>
            x
          </button>
          {children}
        </div>
      </div>
    )
  )
}

export default Modal
