import members from './team'
import ItemCard from './item-card'

export default () => {
  let [c1, c2, c3, ...mentors] = members
  const coreTeam = [c1, c2, c3]
  return (
    <div>
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
