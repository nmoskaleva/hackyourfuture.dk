import React, { useState } from 'react'
import Modal from './modal'
import styles from './alumni-details.scss'
import Icon from '@mdi/react'
import { mdiDotsHorizontal, mdiWindowClose } from '@mdi/js'

export default props => {
  const [open, setOpen] = useState(false)
  const { name, summary, skills, photo } = props.alumni

  return (
    <div>
      <style jsx>{styles}</style>
      <button className='details-button' onClick={() => setOpen(true)}>
        details <Icon color='#fff' size={1} path={mdiDotsHorizontal} />
      </button>
      <Modal show={open} onClose={() => setOpen(false)}>
        <div className='alumni-details'>
          <img
            className={`photo ${!photo && 'defaultAvatar'}`}
            src={
              photo ? `/static/alumni/photos/${photo}` : `/static/avatar.png`
            }
            alt={name}
          />
          <h3 className='hyf-title'>{name}</h3>
          <h3>Summary:</h3>
          <p>{summary}</p>
          <h3>Skills:</h3>
          <p> {skills.join(', ')}</p>
          <span className='close' onClick={() => setOpen(false)}>
            <Icon size={1} path={mdiWindowClose} />
          </span>
        </div>
      </Modal>
    </div>
  )
}
