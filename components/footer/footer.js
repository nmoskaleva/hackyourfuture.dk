import Sponsers from './sponsors/sponsors'
import SocialIcons from './social-icons/social-icon'
import styles from './footer.scss'

export default () => (
  <footer className="footer">
    <style jsx>{styles}</style>
    <Sponsers/>
    <div className="links">
      <div className="bottom">
        {/*<Newsletter />*/}
        <SocialIcons/>
      </div>
      <div className="hyf-info">
        <div className="col-lg-6">
          Foreningen HackYourFuture <br/>
          Kongens Enghave <br/>
          2450 København <br/>
        </div>
        <div className="col-lg-6 cvrDiv">
          CVR:
          <br/>
          38 53 31 93
        </div>
      </div>
      <div className="Copyright">
        &copy; Copyright HackYourFuture Copenhagen 2018
      </div>
    </div>
  </footer>
)
