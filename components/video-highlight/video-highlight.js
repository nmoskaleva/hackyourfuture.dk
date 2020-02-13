import styles from './video-highlight.scss'

const Iframe = props => (
  <>
    <style jsx>{styles}</style>
    <iframe src={props.src} height={props.height} frameBorder='0' />
  </>
)

export default () => (
  <>
    <style jsx>{styles}</style>
    <section className='video-highlight'>
      <h2>Success stories</h2>
      <div className='wrapper'>
        <p>
          Watch this <strong>inspiring short film</strong> about our graduate
          Zuhair, who <strong>landed his first developer job</strong> in Denmark
          after completing the HackYourFuture program.
        </p>

        <Iframe
          src='https://player.vimeo.com/video/390957830'
          width='640'
          height='337'
        />
      </div>
    </section>
  </>
)
