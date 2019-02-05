import styles from './find-us.scss'
import React from 'react'

const FindUs = () => (
  <div className='find-us'>
    <style jsx>{styles}</style>

    <div className="content-extra">
      <h2>Find us on Social Media</h2>
      <div className="facebook">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhackyourfuturecopenhagen%2F&tabs&width=340&height=214&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=452614524799595"
          width="340"
          height="214"
          scrolling="no"
          frameBorder="0"
        />
      </div>
    </div>
  </div>
)
export default FindUs
