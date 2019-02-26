import React from 'react'
import styles from './item-card.scss'
import Icon from '@mdi/react'
import {
  mdiEarth,
  mdiEmail,
  mdiGithubCircle,
  mdiLinkedin,
  mdiNote,
  mdiWeb
} from '@mdi/js'
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
              <Icon size={1} color='#293a7d' path={mdiGithubCircle} />
            </a>
          )}
          {linkedin && (
            <a target='_blank' href={linkedin}>
              <Icon size={1} color='#293a7d' path={mdiLinkedin} />
            </a>
          )}
          {email && (
            <a target='_blank' href={`mailto:${email}`}>
              <Icon size={1} color='#293a7d' path={mdiEmail} />
            </a>
          )}

          {onlineCV && (
            <a target='_blank' href={onlineCV}>
              <Icon size={1} color='#293a7d' path={mdiEarth} />
            </a>
          )}

          {pdfCV && (
            <a target='_blank' href={pdfCV}>
              <Icon size={1} color='#293a7d' path={mdiNote} />
            </a>
          )}

          {website && (
            <a target='_blank' href={website}>
              <Icon size={1} color='#293a7d' path={mdiWeb} />
            </a>
          )}
        </div>
        {children}
      </div>
    </Slide>
  )
}

export default ItemCard
