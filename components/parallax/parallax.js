import styles from './parallax.scss'
import Flip from 'react-reveal/Flip'

const Parallax = () => (
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

export default Parallax
