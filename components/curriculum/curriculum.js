import styles from './curriculum.scss'
import React from 'react'
import modules from './curriculum.json'

const Curriculum = () => (
  <div className='curriculum'>
    <style jsx>{styles}</style>
    <ul>
      {
        modules.map(module => (
          <li key={module.id}>
            <h3>
              {module.title}
            </h3>
            <span>
              {module.duration}
            </span>
          </li>
        ))
      }
      </ul>
  </div>
)

export default Curriculum
