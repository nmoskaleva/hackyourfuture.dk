import React, { Fragment } from 'react'
import styles from './item-card.scss'

const ItemCard = ({ item, children }) => {
  const { photo, github, role, name, linkedin, email, onlineCV, pdfCV } = item
  return (
    <Fragment>
      <style jsx>{styles}</style>
      <div className={`${role.replace(/ /g, '_')} team-member-card`}>
        <div className='member-image'>
          {photo ? (
            <div className='member-shine zoomIn1'>
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
        {role && <p className='memberRole'>{role}</p>}
        <div className='member-social-icons'>
          {github && (
            <a href={github}>
              <i className='flaticon-github-sign' />
            </a>
          )}
          {linkedin && (
            <a href={linkedin}>
              <i className='flaticon-linkedin-logo' />
            </a>
          )}
          {email && (
            <a href={email}>
              <i className='flaticon-opened-email-envelope' />
            </a>
          )}

          {onlineCV && (
            <a href={onlineCV}>
              <i className='flaticon-curriculum-vitae' />
            </a>
          )}

          {pdfCV && (
            <a href={pdfCV}>
              <i className='flaticon-google-drive-pdf-file' />
            </a>
          )}
        </div>
        {children}
      </div>
    </Fragment>
  )
}

export default ItemCard
