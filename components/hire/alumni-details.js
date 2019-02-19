import React, { useState } from 'react'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import styles from './alumni-details.scss'
import MoreIcon from 'mdi-material-ui/DotsHorizontal'

export default props => {
  const [open, setOpen] = useState(false)
  const { name, summary, skills } = props.alumni

  return (
    <div>
      <style jsx>{styles}</style>
      <Button
        size='small'
        variant='contained'
        fullWidth
        onClick={() => setOpen(true)}
      >
        details <MoreIcon />
      </Button>
      <Modal
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className='alumni-details'>
          <h3 className='hyf-title'>{name}</h3>
          <h3>Summary:</h3>
          <p>{summary}</p>
          <h3>Skills:</h3>
          <p> {skills.join(', ')}</p>
          <Button
            color='secondary'
            variant='contained'
            onClick={() => setOpen(false)}
          >
            x
          </Button>
        </div>
      </Modal>
    </div>
  )
}
