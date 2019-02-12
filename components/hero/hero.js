import styles from './hero.scss'
import Flip from 'react-reveal/Flip'

const Hero = () => (
  <div className='container'>
    <style jsx>{styles}</style>

    {/*<img className="logo" src="/static/HYF_LOGO.png"/>*/}
    <div className='logo'>
      <Flip top>
        <img src='/static/logo_white.svg' alt='HackYourFuture Copenhagen' />
      </Flip>
    </div>
  </div>
)

export default Hero
