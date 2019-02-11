import styles from './social-icon.scss'
import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import { Facebook, GithubCircle, Linkedin, Twitter } from 'mdi-material-ui'

const socialLinks = [
  {
    title: 'facebook',
    Icon: () => <Facebook />,
    href: 'https://www.facebook.com/hackyourfuturecopenhagen/'
  },
  {
    title: 'twitter',
    Icon: () => <Twitter />,
    href: 'https://twitter.com/HackyourfutureC'
  },
  {
    title: 'linkedin',
    Icon: () => <Linkedin />,
    href: 'https://www.linkedin.com/school/hackyourfuture-copenhagen/'
  },
  {
    title: 'github',
    Icon: () => <GithubCircle />,
    href: 'https://github.com/hackyourfuture-cph'
  }
]

const SocialIcons = () => (
  <div className='social-icons'>
    <style jsx>{styles}</style>

    {socialLinks.map(({ title, Icon, href }) => (
      <IconButton color='inherit' href={href}>
        <Icon fontSize='large' />
      </IconButton>
    ))}
  </div>
)

export default SocialIcons
