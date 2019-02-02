import members from './team'
import ItemCard from './item-card'
import itemCardsLayout from './item-cards-layout'
import {withStyles} from '@material-ui/core/styles'

const Index= ({classes}) => {
  let [c1, c2, c3, ...mentors] = members
  const coreTeam = [c1, c2, c3]

  return (
    <div>
      {/*Core-team*/}
      <h2>Core team</h2>
      <div className={classes.cards}>
        {coreTeam.map(member => (
          <ItemCard item={member} key={member.id} />
        ))}
      </div>

      {/*Mentors-team*/}
      <h2>Mentors</h2>
      <div className={classes.cards}>
        {mentors
          .sort((a, b) => a.name.localeCompare(b.name)) // sort names alphabetically
          .map(member => (
            <ItemCard item={member} key={member.id} />
          ))}
      </div>
    </div>
  )
}

export default withStyles(itemCardsLayout)(Index)
