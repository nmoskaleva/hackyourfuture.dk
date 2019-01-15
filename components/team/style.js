{
  /*language=CSS*/
}
export default () => (
  <style jsx>
    {`
      .member-card {
        padding: 20px;
        text-align: center;
        transition: all 0.5s;
        background: #293a7d;
        color: #fff;
        border: solid 5px white;
        width: 10%;
        max-width: calc(100% / 5);
        min-width: 260px;
      }

      .team-members {
        display: flex;
        max-width: 1300px;
        margin: 0 auto;
        flex-wrap: wrap;
        justify-content: center;
      }

      .member-name {
        color: #fff;
        font-family: Space Mono, monospace;
      }

      .member-card:hover {
        background: #263265;
      }

      .member-image {
        overflow: hidden;
        height: 33vw;
        width: 100%;
        max-width: 250px;
        max-height: 250px;
        min-height: 250px;

        /*border-radius: 100%;*/
        /*display: flex;*/
      }
      .avatar-figure img {
        object-fit: cover;
        display: flex;
        width: 210px;
        height: 210px;
      }

      .member-social-icons {
        margin-top: 1rem;
      }

      .member-social-icons a {
        margin-right: 1rem;
        margin-bottom: 1rem;
        /*display: inline-block;*/
        color: #fff;
        text-decoration: none;
      }

      .member-social-icons a:hover {
        color: #eff3c1;
        transition: all 0.5s;
      }

      .member-social-icons a i {
        background-repeat: no-repeat;
      }

      .member-default-avatar {
        /*width: 150%;*/
        /*max-width: 100%;*/
        margin: auto;
      }

      /*shine effect start */
      /*shine effect*/
      .avatar-figure {
        margin: 0;
        padding: 0;
        overflow: hidden;
        max-height: 250px;
      }

      .avatar-figure:hover + span {
        bottom: -36px;
        opacity: 1;
      }

      .member-shine .avatar-figure {
        position: relative;
      }

      .member-shine .avatar-figure::before {
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

      .member-shine .avatar-figure:hover::before {
        -webkit-animation: shine 0.75s;
        animation: shine 0.75s;
      }

      @keyframes shine {
        100% {
          left: 125%;
        }
      }

      .zoomIn1 .avatar-figure img {
        transform: scale(1);
        transition: 0.23s ease-in-out;
      }

      .zoomIn1 .avatar-figure:hover img {
        transform: scale(1.2);
        filter: grayscale(100%);
      }
      /* end shine effect*/

      .member-tag {
        font-size: 14px;
        border: solid 1px;
        margin: 2px 5px;
        padding: 0 5px;
        flex-wrap: wrap;
        display: inline-flex;
        background: #ffffff54;
      }

      /* large screen */
      @media (min-width: 769px) {
        .member-card .member-image {
        }

        .avatar-figure {
        }
      }

      /* small screen */
      @media (max-width: 519px) {
        .member-card {
          max-width: 100%;
          width: 100%;
        }
        .member-image,
        .avatar-figure img {
          margin: auto;
        }
        .member-name > h3 {
          margin: 0 auto;
        }
        .member-image {
          height: inherit;
          max-height: inherit;
          min-height: inherit;
        }
      }
    `}
  </style>
)
