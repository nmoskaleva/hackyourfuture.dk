import SocialIcons from './social-icons/social-icon'
import styles from './footer.scss'
import Link from 'next/link'

export default () => (
  <footer>
    <style jsx>{styles}</style>
    <SocialIcons />
    <div className='info'>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/apply">
            <a>Apply</a>
          </Link>
        </li>
        <li>
          <Link href="/volunteer">
            <a>Volunteer</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
      <div>
        <p>Foreningen HackYourFuture</p>
        <p>Kongens Enghave </p>
        <p>2450 København </p>
        <p>CVR: 38533193</p>
        <p><a href="mailto:cph@hackyourfuture.net">cph@hackyourfuture.net</a></p>
      </div>
    </div>
  </footer>
)
