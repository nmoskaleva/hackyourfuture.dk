import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import { Facebook, GithubCircle, Linkedin, Twitter } from 'mdi-material-ui'
import styles from './social-icon.scss'

const SocialIcons = () => (
  <div className='social-icons'>
    <style jsx>{styles}</style>
    <IconButton
      href='https://www.facebook.com/hackyourfuturecopenhagen/'
      color='inherit'
      title='facebook'
      target='_blank'
    >
      <Facebook />
    </IconButton>
    <IconButton
      href='https://twitter.com/HackyourfutureC'
      color='inherit'
      title='twitter'
      target='_blank'
    >
      <Twitter />
    </IconButton>
    <IconButton
      href='https://www.linkedin.com/school/hackyourfuture-copenhagen/'
      color='inherit'
      title='linkedin'
      target='_blank'
    >
      <Linkedin />
    </IconButton>
    <IconButton
      href='https://github.com/hackyourfuture-cph'
      color='inherit'
      title='github'
      target='_blank'
    >
      <GithubCircle />
    </IconButton>
  </div>
)

export default SocialIcons
