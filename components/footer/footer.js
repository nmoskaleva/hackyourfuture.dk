import Partners from '../partners/partners'
import SocialIcons from './social-icons/social-icon'
import styles from './footer.scss'

export default () => (
  <footer>
    <style jsx>{styles}</style>
    <Partners />
    <div className='wrapper'>
      <div className='social-icons'>
        <SocialIcons />
      </div>
      <div className='info'>
        <div className='col-lg-6'>
          Foreningen HackYourFuture <br />
          Kongens Enghave <br />
          2450 København <br />
        </div>
        <div className='col-lg-6 cvr'>
          CVR:
          <br />
          38 53 31 93
        </div>
      </div>
      <div className='copyright'>
        &copy; Copyright HackYourFuture Copenhagen 2018
      </div>
    </div>
  </footer>
)
