import Head from 'next/head'
import Footer from '../footer'
import ProgressBar from '../ProgressBar'
import NavBar from '../nav-bar/Index'
import Style from './global-style'
export default ({ children }) => {
  return (
    <div>
      <Style/>
      <Head>
        <title>HackYourFuture Copenhagen</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link
          rel='shortcut icon'
          type='image/x-icon'
          href='/static/favicon.ico'
        />
      </Head>
      {/*language=SCSS*/}

      <link
        href='https://fonts.googleapis.com/css?family=Source+Sans+Pro'
        rel='stylesheet'
      />
      <link href='/static/social-icons-font/flaticon.css' rel='stylesheet' />
      <ProgressBar />
      <NavBar />
      {children}
      <Footer />
      <script
        async
        src='https://www.googletagmanager.com/gtag/js?id=UA-117911945-1'
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
