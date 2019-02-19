import Head from 'next/head'
import Footer from '../footer/footer'
import NavBar from '../nav-bar/Navbar'
import React from 'react'

export default ({ children }) => {
  return (
    <div>
      {/*language=CSS*/}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Space+Mono|Work+Sans');

        body {
          font-size: 1.2rem;
          line-height: 1.6rem;
          // font-family: 'Source Sans Pro', sans-serif;
          font-family: 'Work Sans', sans-serif;
          margin: 0;
          color: #111;
          background-color: #fff !important;
          overflow-x: hidden;
        }

        img {
          max-width: 100%;
        }

        a {
          color: #111;
          word-break: break-all;
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
          margin: 0;
        }

        h1 {
          font-size: 40px;
          line-height: 50px;
          font-weight: 400;
        }

        h2 {
          letter-spacing: 0.2px;
          text-align: center;
          margin: 2rem 0;
        }

        @media (max-width: 768px) {
          h1,
          h2 {
            font-size: 24px;
          }
        }

        p {
          font-family: 'Work Sans', sans-serif;
          font-size: 18px;
          line-height: 1.8rem;
          margin: 0;
        }

        .hyf-title {
          border-bottom: 2px solid #293a7d;
        }

        .hyf-title > a {
          text-decoration: none;
        }

        header {
          background-color: white !important;
          box-shadow: none !important;
          font-weight: bold;
        }

        header button {
          color: #293a7d !important;
          transition: background-color: 0.3s;
          font-weight: bold !important;
          font-size: 1rem !important;
        }

        header button:hover {
          color: black !important;
          background-color: inherit !important;
        }
      `}</style>
      <Head>
        <title>HackYourFuture Copenhagen</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

        <meta
          name='description'
          content='HackYourFuture Refugee Coding School In Copenhagen'
        />
        <meta
          name='keywords'
          content='HackYourFuture, copenhagen, denmark, coding, school, dk, programming'
        />
        <meta
          name='og:title'
          content='HackYourFuture Refugee Coding School In Copenhagen'
        />
        <meta
          name='og:description'
          content='HackYourFuture Refugee Coding School In Copenhagen'
        />
        <meta name='og:image' content='/static/logo-dark.svg' />
        <meta name='og:url' content='http://hackyourfuture.dk/' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@hyf' />
        <link
          rel='shortcut icon'
          type='image/x-icon'
          href='/static/favicon.ico'
        />
      </Head>

      <link
        href='https://fonts.googleapis.com/css?family=Source+Sans+Pro'
        rel='stylesheet'
      />
      <NavBar />
      {children}
      <Footer />
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
