import members from './team.json'
import ItemCard from './item-card/item-card'
import styles from './team.scss'

export default () => {
  const mentors = members.filter(member => member.role === 'mentor')
  const coreTeam = members.filter(member => member.role !== 'mentor')
  return (
    <div>
      <style jsx>{styles}</style>
      {/*Core-team*/}
      <h2>Core team</h2>
      <div className='team-members core-team'>
        {coreTeam.map(member => (
          <ItemCard item={member} key={member.id} />
        ))}
      </div>

      {/*Mentors-team*/}
      <h2>Mentors</h2>
      <div className='team-members mentors'>
        {mentors
          .sort((a, b) => a.name.localeCompare(b.name)) // sort names alphabetically
          .map(member => (
            <ItemCard item={member} key={member.id} />
          ))}
      </div>
    </div>
  )
}
