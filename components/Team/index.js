import data from './data.json'


export default () => {
  return (
    <div className="mentors">
      {/*language=CSS*/}
      <style jsx>
        {`
            .mentor {
                transition: all 0.5s;
            }

            .mentor:hover {
                background: #f7f7f7;
            }

            .mentors {
                display: flex;
                flex-wrap: wrap;
                max-width: 1200px;
                margin: 0 auto;
            }

            .mentor {
                width: 50%;
                padding: 20px;
                text-align: center;
            }

            @media (min-width: 600px) {
                .mentor {
                    width: 33%;
                }

                .mentor .image {
                    height: 25vw;
                    width: 25vw;
                }
            }

            @media (min-width: 900px) {
                .mentor {
                    width: 25%;
                }

                .mentor .image {
                    height: auto;
                    width: 100%;
                    display: inline-block;
                }
            }

            .mentor img {
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

            .mentorName {
                font-family: Space Mono, monospace;
                text-align: center;
                padding: 10px;
                line-height: 1.7rem;
            }

            .socialIcons {
                margin-top: 1rem;
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
        `}
      </style>
      {data.sort((a, b) => a.name.localeCompare(b.name)).map((item, key) =>
        <div className='mentor' key={key}>
          <div className="image">
            {item.photo
              ? <div className="shine zoomIn1">
                <figure>
                  <a href={item.github}>
                    <img src={item.photo} />
                  </a>
                </figure>
              </div>
              : <img
                className="defaultPhoto"
                src={'/static/avatar.png'}
              />
            }
          </div>
          <h3 className="mentorName">
            {item.name}
            <div className="socialIcons">
              {item.github && (
                <a href={item.github}>
                  <img
                    style={{width: 33, padding: 3, opacity: 0.5}}
                    src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"
                    alt="Github"
                  />
                </a>
              )}
              {item.linkedin && (
                <a href={item.linkedin}>
                  <img
                    style={{width: 33, padding: 3, opacity: 0.5}}
                    src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg"
                    alt="Linkedin"
                  />
                </a>
              )}
            </div>
          </h3>
        </div>
      )}
    </div>
  )
}
