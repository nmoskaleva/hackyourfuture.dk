import React from 'react'
import styles from './item-card.scss'
import IconButton from '@material-ui/core/IconButton'
import { GithubCircle, Linkedin, Email, Note, Earth, Web } from 'mdi-material-ui'
import Slide from 'react-reveal/Slide'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ItemCard = ({ item, children }) => {
  const { photo, github, role, name, linkedin, email, onlineCV, pdfCV, website } = item
  return (
    <Slide duration={300} effect='fadeInUp'>
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
          <LazyLoadImage
            alt={name}
            src={role === 'alumni'
            ? '/static/alumni/photos/' + photo
            : photo} // use normal <img> attributes as props
          />
        ) : (
          <LazyLoadImage
            alt={name}
            className='member-default-avatar'
            src={'/static/avatar.png'}
          />
        )}
        <h3 className='member-name'>{name}</h3>
        {role && <p className='member-role'>{role}</p>}
        <div className="social-media">
          {github && (
            <IconButton color='inherit' target="_blank" href={github}>
              <GithubCircle />
            </IconButton>
          )}
          {linkedin && (
            <IconButton color='inherit' target="_blank" href={linkedin}>
              <Linkedin />
            </IconButton>
          )}
          {email && (
            <IconButton color='inherit' target="_blank" href={`mailto:${email}`}>
              <Email />
            </IconButton>
          )}

          {onlineCV && (
            <IconButton color='inherit' target="_blank" href={onlineCV}>
              <Earth />
            </IconButton>
          )}

          {pdfCV && (
            <IconButton color='inherit' target="_blank" href={pdfCV}>
              <Note />
            </IconButton>
          )}

          {website && (
            <IconButton color='inherit' target="_blank" href={website}>
              <Web />
            </IconButton>
          )}
        </div>
        {children}
      </div>
    </Slide>
  )
}

export default ItemCard
