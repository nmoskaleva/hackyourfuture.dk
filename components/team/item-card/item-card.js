import React from 'react'
import styles from './item-card.scss'
import {
  GithubCircle,
  Linkedin,
  Email,
  Note,
  Earth,
  Web
} from 'mdi-material-ui'
import Slide from 'react-reveal/Slide'

const ItemCard = ({ item, children }) => {
  const {
    photo,
    github,
    role,
    name,
    linkedin,
    email,
    onlineCV,
    pdfCV,
    website
  } = item
  return (
    <Slide duration={300} effect='fadeInUp'>
      <style jsx>{styles}</style>
      <style jsx global>{`
        .social-media > a {
          padding: 6px;
        }
      `}</style>
      <div className='team-member-card'>
        {photo ? (
          <img
            alt={name}
            src={role === 'alumni' ? '/static/alumni/photos/' + photo : photo}
          />
        ) : (
          <img
            alt={name}
            className='member-default-avatar'
            src={'/static/avatar.png'}
          />
        )}
        <h3 className='member-name'>{name}</h3>
        {role && <p className='member-role'>{role}</p>}
        <div className='social-media'>
          {github && (
            <a target='_blank' href={github}>
              <GithubCircle />
            </a>
          )}
          {linkedin && (
            <a target='_blank' href={linkedin}>
              <Linkedin />
            </a>
          )}
          {email && (
            <a target='_blank' href={`mailto:${email}`}>
              <Email />
            </a>
          )}

          {onlineCV && (
            <a target='_blank' href={onlineCV}>
              <Earth />
            </a>
          )}

          {pdfCV && (
            <a target='_blank' href={pdfCV}>
              <Note />
            </a>
          )}

          {website && (
            <a target='_blank' href={website}>
              <Web />
            </a>
          )}
        </div>
        {children}
      </div>
    </Slide>
  )
}

export default ItemCard
