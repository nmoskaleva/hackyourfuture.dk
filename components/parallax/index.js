import React from 'react'

const MyParallax = _ =>
  <div className="container">
    {/*language=CSS*/}
    <style jsx>{`
        .container {
            display: flex;
            flex-direction: column;
            height: 50vh;
            background: fixed url('/static/background.jpeg') no-repeat center center/cover;
            alin-items: center;
            jsutify-content: center;
            text-align: center;
        }

        .logo {
            max-height: 50vh;
            max-width: 50vh;
            display: block;
            margin: auto;
        }
    `}
    </style>
    <img className="logo" src="/static/HYF_LOGO.png" />
  </div>

export default MyParallax

