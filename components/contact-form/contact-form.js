import React from 'react'
import Send from 'mdi-material-ui/Send'

import styles from './contact-form.scss'

export default ({ email }) => {
  return (
    <form action={`https://formspree.io/${email}`} className='contact-form'>
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

      <button className='material-btn' type='submit'>
        <Send /> SEND
      </button>
    </form>
  )
}
