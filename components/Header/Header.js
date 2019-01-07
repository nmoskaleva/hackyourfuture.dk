import {links} from './Navigation'
import MobileMenu from '../MobileMenu'
import * as PropTypes from 'prop-types'
import HeaderLink from './HeaderLink'

HeaderLink.propTypes = {
  strings: PropTypes.arrayOf(PropTypes.string),
  key: PropTypes.number
}
export default () => {
  return (
    <div className="header">
      {/*language=CSS*/}
      <style jsx>
        {`
            .header {
                min-height: 65px;
                display: flex;
                align-items: center;
                border-bottom: 2px solid #b8c1cb;
                background: white;
                padding: 0 20px;
                overflow: auto;
            }

            .logo {
                height: 60px;
                margin-right: 30px;
                display: block;
            }

            .navigation {
                display: none;
            }

            .menuicon {
                position: absolute;
                right: 10px;
                padding: 10px;
                z-index: 1;
                cursor: pointer;
            }

            @media (min-width: 900px) {
                .navigation {
                    display: block;
                }

                .menuicon {
                    display: none;
                }
            }
        `}
      </style>
      <a href="/">
        <img src="/static/hackyourfuture-logo-white.png" className="logo"  alt="HackYourFuture Copenhagen"/>
      </a>
      <div className="navigation">
        {links.map((link, key) => (
          <HeaderLink strings={link} key={key} />
        ))}
      </div>
      <div className="menuicon" id="togglemenu">
        <svg
          height="32"
          viewBox="0 0 32 32"
          width="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#111"
            d="M4 10h24a2 2 0 0 0 0-4H4a2 2 0 0 0 0 4zm24 4H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4zm0 8H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4z"
          />
        </svg>
      </div>
      <MobileMenu />
      <script
        dangerouslySetInnerHTML={{
          __html: `
        togglemenu.addEventListener('click', e => {
          mobilemenu.classList.toggle('showmenu')
        })
      `
        }}
      />
    </div>
  )
}