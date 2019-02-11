import React, { Fragment } from 'react'
import styles from './item-card.scss'
import IconButton from '@material-ui/core/IconButton'
import { GithubCircle, Linkedin, Email, Note, Earth } from 'mdi-material-ui'

const ItemCard = ({ item, children }) => {
  const { photo, github, role, name, linkedin, email, onlineCV, pdfCV } = item
  return (
    <Fragment>
      <style jsx>{styles}</style>
      <div className='team-member-card'>
        <div className='member-image'>
          {photo ? (
            <div className='member-shine zoom-in-1'>
              <figure className='avatar-figure'>
                <a href={github || '#'}>
                  <img
                    alt={name}
                    src={
                      role === 'alumni'
                        ? '/static/alumni/photos/' + photo
                        : photo
                    }
                  />
                </a>
              </figure>
            </div>
          ) : (
            <img
              alt={name}
              className='member-default-avatar'
              src={'/static/avatar.png'}
            />
          )}
        </div>
        <h3 className='member-name'>{name}</h3>
        {role && <p className='member-role'>{role}</p>}
        <div>
          {github && (
            <IconButton color='inherit' href={github}>
              <GithubCircle />
            </IconButton>
          )}
          {linkedin && (
            <IconButton color='inherit' href={linkedin}>
              <Linkedin />
            </IconButton>
          )}
          {email && (
            <IconButton color='inherit' href={email}>
              <Email />
            </IconButton>
          )}

          {onlineCV && (
            <IconButton color='inherit' href={onlineCV}>
              <Earth />
            </IconButton>
          )}

          {pdfCV && (
            <IconButton color='inherit' href={pdfCV}>
              <Note />
            </IconButton>
          )}
        </div>
        {children}
      </div>
    </Fragment>
  )
}

export default ItemCard
