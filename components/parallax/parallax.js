import styles from  './parallax.scss'

const Parallax = () => (
  <div className='container'>
    <style jsx>{styles}</style>

    {/*<img className="logo" src="/static/HYF_LOGO.png"/>*/}
    <div className='logo'>
      <img src='/static/logo_white.svg' alt='HackYourFuture Copenhagen' />
    </div>
  </div>
)

export default Parallax
