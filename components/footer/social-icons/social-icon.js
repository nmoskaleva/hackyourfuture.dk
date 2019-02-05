import styles from  './social-icon.scss'
import React from 'react'

const SocialIcons = () => (
  <div className='social-icons'>
    <style jsx>{styles}</style>

    <a
      target='_blank'
      title='facebook'
      href='https://www.facebook.com/hackyourfuturecopenhagen/'
    >
      <i className='flaticon-linkedin-logo' />
    </a>
    <a
      target='_blank'
      title='twitter'
      href='https://twitter.com/HackyourfutureC'
    >
      <i className='flaticon-facebook-logo' />
    </a>
    <a
      target='_blank'
      title='linkedin'
      href='https://www.linkedin.com/school/hackyourfuture-copenhagen/'
    >
      <i className='flaticon-twitter-logo' />
    </a>
    <a
      target='_blank'
      title='github'
      href='https://github.com/hackyourfuture-cph'
    >
      <i className='flaticon-github-sign' />
    </a>
  </div>
)

export default SocialIcons
