import React from 'react'
import Icon from '@mdi/react'
import { mdiSend } from '@mdi/js'
import styles from './contact-form.scss'

export default ({ email }) => {
  return (
    <form
      action={`https://formspree.io/${email}`}
      className='contact-form'
      method='POST'
    >
      <style jsx>{styles}</style>

      {/*name*/}
      <label>
        <input type='text' required='required' />
        <span>Username</span>
      </label>

      {/*email*/}
      <label>
        <input type='email' required='required' />
        <span>email</span>
      </label>

      {/*message*/}
      <label>
        <input type='text' required='required' />
        <span>message</span>
      </label>

      <button type='submit'>
        <Icon color='white' size={1} path={mdiSend} /> SEND
      </button>
    </form>
  )
}
