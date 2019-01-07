import React, { Fragment } from 'react'

const CardMember = ({ item }) => {
  const {
    photo,
    github,
    role,
    name,
    summary,
    tags,
    linkedin,
    email,
    onlineCV,
    pdfCV
  } = item
  return (
    <Fragment>
      {/*language=CSS*/}
      <style jsx>
        {`
          .user {
            width: 50%;
            padding: 20px;
            text-align: center;
            transition: all 0.5s;
            background: #293a7d;
            color: #fff;
            border: solid 8px white;
          }
          .avatarFigure {
            background: #293a7d;
          }
          .user:hover {
            background: #263265;
          }

          @media (min-width: 600px) {
            .user {
              width: 33%;
            }

            .user .image {
              height: 25vw;
              width: 25vw;
            }
          }

          @media (min-width: 900px) {
            .user {
              width: 25%;
            }

            .user .image {
              height: auto;
              width: 100%;
              display: inline-block;
            }
          }

          .user img {
            width: 100%;
            /*filter: grayscale(100%);*/
          }

          .image {
            height: 33vw;
            width: 33vw;
            max-width: 250px;
            max-height: 250px;
            overflow: hidden;
            /*border-radius: 100%;*/
            display: flex;
          }

          .userName {
            font-family: Space Mono, monospace;
            text-align: center;
            padding: auto 1rem;
            line-height: 1.7rem;
            color: #fff;
          }

          .socialIcons {
            margin-top: 1rem;
          }

          .socialIcons a {
            margin-right: 1rem;
            display: inline-block;
            color: #fff;
            text-decoration: none;
          }

          .socialIcons a:hover {
            color: #eff3c1;
            transition: all 0.5s;
          }

          .socialIcons a i {
            background-repeat: no-repeat;
          }

          .defaultPhoto {
            width: 150%;
            maxwidth: 100%;
            margin: auto;
          }

          /*shine effect*/
          figure {
            margin: 0;
            padding: 0;
            background: #fff;
            overflow: hidden;
          }

          figure:hover + span {
            bottom: -36px;
            opacity: 1;
          }

          .shine figure {
            position: relative;
          }

          .shine figure::before {
            position: absolute;
            top: 0;
            left: -75%;
            z-index: 2;
            display: block;
            content: '';
            width: 50%;
            height: 100%;
            background: linear-gradient(
              to right,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.3) 100%
            );
            transform: skewX(-25deg);
          }

          .shine figure:hover::before {
            -webkit-animation: shine 0.75s;
            animation: shine 0.75s;
          }

          @keyframes shine {
            100% {
              left: 125%;
            }
          }

          .zoomIn1 figure img {
            transform: scale(1);
            transition: 0.23s ease-in-out;
          }

          .zoomIn1 figure:hover img {
            transform: scale(1.2);
            filter: grayscale(100%);
          }

          .tag {
            font-size: 14px;
            border: solid 1px;
            margin: 2px 5px;
            padding: 0 5px;
            flex-wrap: wrap;
            display: inline-flex;
            background: #ffffff54;
          }
        `}
      </style>
      <div className="user">
        <div className="image">
          {photo ? (
            <div className="shine zoomIn1">
              <figure className="avatarFigure">
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
              className="defaultPhoto"
              src={'/static/avatar.png'}
            />
          )}
        </div>
        <h3 className="userName">{name}</h3>
        {role && <p className="memberRole">{role}</p>}
        {summary && <p>{summary}</p>}
        {tags && (
          <p>
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </p>
        )}

        <div className="socialIcons">
          {github && (
            <a href={github}>
              <i className="flaticon-github-sign" />
            </a>
          )}
          {linkedin && (
            <a href={linkedin}>
              <i className="flaticon-linkedin-logo" />
            </a>
          )}
          {email && (
            <a href={email}>
              <i className="flaticon-opened-email-envelope" />
            </a>
          )}

          {onlineCV && (
            <a href={onlineCV}>
              <i className="flaticon-curriculum-vitae" />
            </a>
          )}

          {pdfCV && (
            <a href={pdfCV}>
              <i className="flaticon-google-drive-pdf-file" />
            </a>
          )}
        </div>
      </div>
    </Fragment>
  )
}

export default CardMember
