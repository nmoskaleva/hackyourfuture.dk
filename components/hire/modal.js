import React from 'react'
import PropTypes from 'prop-types'
import styles from './modal.scss'

const Modal = ({ onClose, children, show }) => {
  return (
    show && (
      <div className='wrapper'>
        <style jsx>{styles}</style>
        <div className='modal'>
          <button className='close' onClick={onClose}>
            x
          </button>
          {children}
          <div className='footer' />
        </div>
      </div>
    )
  )
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool
}

export default Modal
