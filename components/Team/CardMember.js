import React, {Fragment} from 'react'

const CardMember = ({item}) =>
  <Fragment>
    {/*language=CSS*/}
      <style jsx>
        {`

            .user:hover {
                background: #f7f7f7;
            }

            .user {
                width: 50%;
                padding: 20px;
                text-align: center;
                                transition: all 0.5s;

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
            }

            .socialIcons {
                margin-top: 1rem;
            }

            .socialIcons a {
                margin-right: 1rem;
                display: inline-block;
                color: #6c6c6c;
            }

            .socialIcons a:hover {
                color: #293a7d;
                transition: all .5s;
            }

            .socialIcons a i {
                background-repeat: no-repeat;
            }

            .defaultPhoto {
                width: 150%;
                maxWidth: 100%;
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
                background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, .3) 100%);
                transform: skewX(-25deg);
            }

            .shine figure:hover::before {
                -webkit-animation: shine .75s;
                animation: shine .75s;
            }

            @keyframes shine {
                100% {
                    left: 125%;
                }
            }

            .zoomIn1 figure img {
                transform: scale(1);
                transition: .23s ease-in-out;
            }

            .zoomIn1 figure:hover img {
                transform: scale(1.2);
                filter: grayscale(100%)
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
      <div className='user'>
        <div className="image">
          {item.photo
            ? <div className="shine zoomIn1">
              <figure>
                <a href={item.github}>
                  <img src={item.role === 'alumni'
                    ? '/static/alumni/photos/' + item.photo
                    : item.photo} />
                </a>
              </figure>
            </div>
            : <img className="defaultPhoto" src={'/static/avatar.png'} />
          }
        </div>
        <h3 className="userName">
          {item.name}
        </h3>
        {item.role && <p className="memberRole">{item.role}</p>}
        {item.summary && <p>{item.summary}</p>}
        {item.tags && <p>{item.tags.map(tag => <span className="tag">{tag}</span>)}</p>}

        <div className="socialIcons">
          {item.github && (
            <a href={item.github}>
              <i className="flaticon-github-sign" />
            </a>
          )}
          {item.linkedin && (
            <a href={item.linkedin}>
              <i className="flaticon-linkedin-logo" />
            </a>
          )}
          {item.email && (
            <a href={item.email}>
              <i className="flaticon-opened-email-envelope" />
            </a>
          )}

          {item.onlineCV && (
            <a href={item.onlineCV}>
              <i className="flaticon-curriculum-vitae" />
            </a>
          )}

          {item.pdfCV && (
            <a href={item.pdfCV}>
              <i className="flaticon-google-drive-pdf-file" />
            </a>
          )}
        </div>


      </div>
  </Fragment>

export default CardMember

