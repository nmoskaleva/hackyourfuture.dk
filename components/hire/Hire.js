import * as React from 'react'
import alumniList from './alumni.json'
import ItemCard from '../team/item-card/item-card'
import Content from '../layouts/content/content'
import SimpleExpansionPanel from './expansion-panel'
import Button from '@material-ui/core/Button'
import styles from './hire.scss'
import { withStyles } from '@material-ui/core/styles'
import id from 'uuid/v4'

const style = () => ({
  button: {
    marginRight: '0.5rem'
  }
})

class Hire extends React.Component {
  state = {
    uniqueSkills: [],
    selectedSkills: [],
    selectedStatus: [],
    uniqueStatuses: [],
    alumniList: alumniList
  }

  componentDidMount() {
    let skills = []
    let statuses = []

    alumniList.forEach(alumni => {
      skills = [...skills, ...alumni.skills]
      statuses = [...statuses, alumni.status]
    })

    this.setState({
      // get distinct unique items from an array
      uniqueSkills: [...new Set(skills)],
      uniqueStatuses: [...new Set(statuses)]
    })
  }

  filterHandler = skill => {
    this.setState(
      state => ({
        selectedSkills: state.selectedSkills.includes(skill)
          ? state.selectedSkills.filter(i => i !== skill)
          : [...state.selectedSkills, skill]
      }),
      () => {
        return this.setState(state => ({
          alumniList:
            state.selectedSkills.length === 0
              ? alumniList
              : alumniList.filter(alumni =>
                  state.selectedSkills.every(s => alumni.skills.includes(s))
                )
        }))
      }
    )
  }

  render = () => {
    const {
      alumniList,
      uniqueSkills,
      selectedSkills,
      uniqueStatuses,
      selectedStatus
    } = this.state
    const { classes } = this.props
    return (
      <div>
        <style jsx>{styles}</style>
        <h2 className='center'>Alumni</h2>
        <Content>
          {/*FILTER BY SKILLS ---------------- */}
          {uniqueSkills.map(skill => {
            return (
              <Button
                key={id()}
                onClick={() => this.filterHandler(skill)}
                variant={
                  selectedSkills.includes(skill) ? 'contained' : 'outlined'
                }
                size='small'
                color='primary'
                className={classes.button}
              >
                {skill}
              </Button>
            )
          })}

          {/*FILTER BY STATUS ---------------- */}
          {uniqueStatuses.map(status => {
            return (
              <Button
                key={id()}
                onClick={() => this.filterHandler(status)}
                variant={
                  selectedStatus.includes(status) ? 'contained' : 'outlined'
                }
                size='small'
                color='primary'
                className={classes.button}
              >
                {status}
              </Button>
            )
          })}
        </Content>

        <div className='team-members'>
          {alumniList
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(member => (
              <ItemCard item={member} key={member.id}>
                <SimpleExpansionPanel item={member} />
              </ItemCard>
            ))}
        </div>
      </div>
    )
  }
}

export default withStyles(style)(Hire)
