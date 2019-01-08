const SocialIcons = _ =>
  <div className="social-icons">
    {/*language=CSS*/}
    <style jsx>{`
        .social-icons a {
            color: #fff;
            margin-left: 1rem;
            box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
        }

        .social-icons a:hover {
            opacity: .7;
            transition:all .3s;
              box-shadow: none;
        }
    `}
    </style>
    <a target='_blank' title='facebook'
       href='https://www.facebook.com/hackyourfuturecopenhagen/'>
      <i className="flaticon-linkedin-logo" />
    </a>
    <a target='_blank' title='twitter'
       href='https://twitter.com/HackyourfutureC'>
      <i className="flaticon-facebook-logo" />
    </a>
    <a target='_blank' title='linkedin'
       href='https://www.linkedin.com/school/hackyourfuture-copenhagen/'>
      <i className="flaticon-twitter-logo" />
    </a>
    <a target='_blank' title='github'
       href='https://github.com/hackyourfuture-cph'>
      <i className="flaticon-github-sign" />
    </a>
  </div>

export default SocialIcons

