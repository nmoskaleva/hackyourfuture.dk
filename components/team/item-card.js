import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

const styles = theme => ({
  memberCard: {
    padding: '20px',
    textAlign: 'center',
    transition: 'all 0.5s',
    background: '#293a7d',
    color: '#fff',
    border: 'solid 5px white',
    width: '10%',
    maxWidth: 'calc(100% / 5)',
    minWidth: '260px',
    '&:hover': {
      background: '#263265'
    },
    [theme.breakpoints.down('xs')]: {
      borderWidth: '2px 20px',
      maxWidth: '100%',
      width: '100%',
      marginBottom: '0.4rem'
    }
  },
  memberName: {
    color: '#fff',
    fontFamily: 'Space Mono, monospace',
    h3: {
      margin: '0 auto'
    }
  },
  memberImage: {
    margin:'auto',
    overflow: 'hidden',
    height: 'inherit',
    width: '100%',
    maxWidth: '250px',
    maxHeight: 'inherit',
    minHeight: 'inherit',
    display: 'flex',
    justifyContent: 'center',
    },
  img: {
    objectFit: 'cover',
    display: 'flex',
    width: '210px',
    height: '210px'
  },
  avatarFigure: {
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    width: '210px',
    height: '210px',
    position: 'relative',
    '&:hover + span': {
      bottom: '-36px',
      opacity: 1
    },

    img: {
      margin: 'auto',
      borderRadius: '50%'
    },

    '&:hover:before': {
      webkitAnimation: 'shine 0.75s',
      animation: 'shine 0.75s'
    },
    '&:before': {
      position: 'absolute',
      top: 0,
      left: '-75%',
      zIndex: 2,
      display: 'block',
      content: '',
      width: '50%',
      height: '100%',
      background:
        'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%)',
      transform: 'skewX(-25deg)'
    },
    [theme.breakpoints.down('xs')]: {
      borderRadius: '50%'
    }
  },
  '@keyframes shine': {
    '100%': '{left: 125%}'
  },
  zoomIn1: {
    img: {
      transform: 'scale(1)'
    },
    '&:hover img': {
      transform: 'scale(1.2)',
      filter: 'grayscale(100%)',
      transition: '0.23s ease-in-out'
    }
  },
  memberSocialIcons: {
    marginTop: '1rem',
    '& a': {
      margin: '0.5rem',
      color: '#fff',
      textDecoration: 'none'
    },
    '& a:hover': {
      opacity: 0.9,
      transition: 'all 0.5s'
    },
    '& a i': {
      backgroundRepeat: 'no-repeat'
    }
  },
  memberTag: {
    fontSize: '14px',
    border: 'solid 1px',
    margin: '2px 5px',
    padding: '0 5px',
    flexWrap: 'wrap',
    display: 'inline-flex',
    background: '#ffffff54'
  },
  memberDefaultAvatar: {
    margin: 'auto',
    height: '210px'
  }
})

const ItemCard = ({ item, children, classes }) => {
  const { photo, github, role, name, linkedin, email, onlineCV, pdfCV } = item
  return (
    <Fragment>
      <div className={classNames(classes.memberCard, role.replace(/ /g, '_'))}>
        <div className={classes.memberImage}>
          {photo ? (
            <div className={classNames(classes.memberShine, classes.zoomIn1)}>
              <figure className={classes.avatarFigure}>
                <a href={github || '#'}>
                  <img
                    className={classes.img}
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
              style={{ height: '210px' }}
              className={classes.memberDefaultAvatar}
              src={'/static/avatar.png'}
            />
          )}
        </div>
        <h3 className={classes.memberName}>{name}</h3>
        {role && <p className='memberRole'>{role}</p>}
        <div className={classes.memberSocialIcons}>
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

export default withStyles(styles)(ItemCard)
