import React from 'react'
import members from './team.json'
import ItemCard from './item-card/item-card'
import styles from './team.scss'

export const CoreTeam = () => {
  const coreTeam = members.filter(member => member.role !== 'mentor')
  return (
    <>
      <style jsx>{styles}</style>
      <h2>Core team</h2>
      <div className='team-members core-team'>
        {coreTeam.map(member => (
          <ItemCard item={member} key={member.id} />
        ))}
      </div>
    </>
  )
}

export const MentorsTeam = () => {
  const mentors = members.filter(member => member.role === 'mentor')
  return (
    <>
      <style jsx>{styles}</style>
      <h2>Mentors</h2>
      <div className='team-members mentors'>
        {mentors
          .sort((a, b) => a.name.localeCompare(b.name)) // sort names alphabetically
          .map(member => (
            <ItemCard item={member} key={member.id} />
          ))}
      </div>
    </>
  )
}

export default () => {
  return (
    <div>
      <CoreTeam />
      <MentorsTeam />
    </div>
  )
}
