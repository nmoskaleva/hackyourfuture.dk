import React from 'react'
import { Facebook, GithubCircle, Linkedin, Twitter } from 'mdi-material-ui'
import styles from './social-icon.scss'

const SocialIcons = () => (
  <div className='social-icons'>
    <style jsx>{styles}</style>
    <a
      href='https://www.facebook.com/hackyourfuturecopenhagen/'
      title='facebook'
      target='_blank'
    >
      <Facebook />
    </a>
    <a
      href='https://twitter.com/HackyourfutureC'
      title='twitter'
      target='_blank'
    >
      <Twitter />
    </a>
    <a
      href='https://www.linkedin.com/school/hackyourfuture-copenhagen/'
      title='linkedin'
      target='_blank'
    >
      <Linkedin />
    </a>
    <a
      href='https://github.com/hackyourfuture-cph'
      title='github'
      target='_blank'
    >
      <GithubCircle />
    </a>
  </div>
)

export default SocialIcons
