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
import { LazyLoadImage } from 'react-lazy-load-image-component'

const ItemCard = ({ item, children }) => {
  const {
    photo,
    github,
    roles,
    name,
    linkedin,
    email,
    onlineCV,
    pdfCV,
    website,
    roleDescription,
    skills
  } = item
  return (
    <div>
      <style jsx>{styles}</style>
      <style jsx global>{`
        .social-media > a {
          padding: 6px;
        }
        .team-member-card img {
          border-radius: 100%;
          object-fit: cover;
          display: flex;
          width: 210px;
          height: 210px;
          margin-bottom: 12px;
          background-color: #f4f4f4;
        }

        @media (max-width: 519px) {
          .team-member-card img {
            width: 36vw;
            height: 36vw;
          }
        }
      `}</style>
      <div className='team-member-card'>
        {photo ? (
          <LazyLoadImage alt={name} src={photo} />
        ) : (
          <LazyLoadImage
            alt={name}
            className='member-default-avatar'
            src={'/static/avatar.png'}
          />
        )}
        <h3 className='member-name'>{name}</h3>

        {roles && <p className='member-role'>{roleDescription}</p>}

        {skills && (
          <div className='skills'>
            <p>{skills.join(', ')}</p>
          </div>
        )}
        <div className='social-media'>
          {github && (
            <a
              rel='noopener'
              aria-label='Github link'
              target='_blank'
              href={github}
            >
              <Icon size={1} color='#293a7d' path={mdiGithubCircle} />
            </a>
          )}
          {linkedin && (
            <a
              rel='noopener'
              aria-label='Linkedin link'
              target='_blank'
              href={linkedin}
            >
              <Icon size={1} color='#293a7d' path={mdiLinkedin} />
            </a>
          )}
          {email && (
            <a
              rel='noopener'
              aria-label='email link'
              target='_blank'
              href={`mailto:${email}`}
            >
              <Icon size={1} color='#293a7d' path={mdiEmail} />
            </a>
          )}

          {onlineCV && (
            <a
              rel='noopener'
              aria-label='Online cv link'
              target='_blank'
              href={onlineCV}
            >
              <Icon size={1} color='#293a7d' path={mdiEarth} />
            </a>
          )}

          {pdfCV && (
            <a
              rel='noopener'
              aria-label='Pdf cv link'
              target='_blank'
              href={pdfCV}
            >
              <Icon size={1} color='#293a7d' path={mdiNote} />
            </a>
          )}

          {website && (
            <a
              rel='noopener'
              aria-label='website link'
              target='_blank'
              href={website}
            >
              <Icon size={1} color='#293a7d' path={mdiWeb} />
            </a>
          )}
        </div>
        {children}
      </div>
    </div>
  )
}

export default ItemCard
