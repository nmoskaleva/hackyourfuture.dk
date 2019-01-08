import Head from 'next/head'
import Footer from '../Footer/Footer'
import ProgressBar from '../ProgressBar'
import NavBar from '../NavBar/Index'

export default ({ children }) => {
  return (
    <div>
      <Head>
        <title>HackYourFuture Copenhagen</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/static/favicon.ico"
        />
      </Head>
      {/*language=SCSS*/}
      <style global jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Space+Mono|Work+Sans');
        //font-family: 'Space Mono', monospace;
        //font-family: 'Work Sans', sans-serif;

        body {
          font-size: 1.2rem;
          line-height: 1.6rem;
          //font-family: 'Source Sans Pro', sans-serif;
          font-family: 'Work Sans', sans-serif;
          margin: 0px;
          color: #111;
          background-color: #fff !important;
        }

        img {
          max-width: 100%;
        }

        a {
          color: #111;
        }

        * {
          box-sizing: border-box;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: #293a7d;
          font-family: 'Space Mono', monospace;
          letter-spacing: 0.2px;
        }

        h1 {
          font-size: 40px;
          line-height: 50px;
          font-weight: 400;
        }

        h2 {
          letter-spacing: 0.2px;
        }

        .apply__container h1 {
          font-weight: 700;
        }

        p {
          font-family: 'Work Sans', sans-serif;
          font-size: 18px;
          line-height: 1.8rem;
        }
      `}</style>
      <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro"
        rel="stylesheet"
      />
      <link href="/static/social-icons-font/flaticon.css" rel="stylesheet" />
      <ProgressBar />
      <NavBar />
      {children}
      <Footer />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-117911945-1"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-117911945-1');
          `
        }}
      />
    </div>
  )
}
