import SocialIcons from './social-icons/social-icon'
import styles from './footer.scss'

export default () => (
  <footer>
    <style jsx>{styles}</style>
    <SocialIcons />
    <div className='content'>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/apply">Apply</a>
        </li>
        <li>
          <a href="/volunteer">Volunteer</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
      <div>
        Foreningen HackYourFuture <br />
        Kongens Enghave <br />
        2450 København <br />
      </div>
    </div>
  </footer>
)
