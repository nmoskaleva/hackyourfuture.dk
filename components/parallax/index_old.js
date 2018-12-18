import React from 'react'
import {Parallax} from 'react-parallax'

const MyParallax = (props) => (
  <div>
    {/*language=CSS*/}
    <style jsx>{`
        .container {
            height: 30vw;
            display: flex;
            background: linear-gradient(
                    rgba(0, 0, 0, 0.35),
                    rgba(0, 0, 0, 0.55)
            )
        }

        @media (max-width: 768px) {
            .container {
                height: 50vw;
            }
        }

    `}
    </style>
    <Parallax
      blur={{min: -15, max: 15}}
      bgImage="https://images.unsplash.com/photo-1515518554912-63b4da53597d?ixlib=rb-0.3.5…EyMDd9&s=bbe35f4…&auto=format&fit=crop&w=2850&q=80"
      bgImageAlt="the dog"
      strength={-200}
    >

      <div className="container">
        {props.children}
      </div>
    </Parallax>
  </div>
)
export default MyParallax