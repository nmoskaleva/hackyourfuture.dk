import SocialIcons from './social-icons/social-icon'
import styles from './footer.scss'

export default () => (
  <footer>
    <style jsx>{styles}</style>
    <SocialIcons />
    <div className='info'>
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
        <p>Foreningen HackYourFuture</p>
        <p>Kongens Enghave </p>
        <p>2450 København </p>
        <p>CVR: 38 53 31 93</p>
      </div>
    </div>
  </footer>
)
