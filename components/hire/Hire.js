import * as React from 'react'
import alumniList from './alumni.json'
import ItemCard from '../team/item-card/item-card'
import Content from '../layouts/content/content'
import Button from '@material-ui/core/Button'
import styles from './hire.scss'
import { withStyles } from '@material-ui/core/styles'
import id from 'uuid/v4'
import AlumniDetails from './alumni-details'

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
  doFiltering = () => {
    // by default: all alumni list
    let newAlumniList = alumniList
    // if any filter by skills button is clicked, then filter by skills
    if (this.state.selectedSkills.length !== 0) {
      newAlumniList = newAlumniList.filter(alumni =>
        this.state.selectedSkills.every(s => alumni.skills.includes(s))
      )
    }
    if (this.state.selectedStatus.length !== 0) {
      newAlumniList = newAlumniList.filter(alumni =>
        this.state.selectedStatus.every(s => alumni.status === s)
      )
    }
    this.setState(state => ({ alumniList: newAlumniList }))
  }

  filterSkillsHandler = skill => {
    this.setState(
      state => ({
        selectedSkills: state.selectedSkills.includes(skill)
          ? state.selectedSkills.filter(i => i !== skill)
          : [...state.selectedSkills, skill]
      }),
      () => this.doFiltering()
    )
  }

  filterStatusesHandler = status => {
    this.setState(
      state => ({
        selectedStatus: state.selectedStatus.includes(status)
          ? state.selectedStatus.filter(i => i !== status)
          : [...state.selectedStatus, status]
      }),
      () => this.doFiltering()
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
          <p>
            🔎 Here is a list of alumni students. you can filter them by one or
            more skills by clicking on buttons bellow:
          </p>
          {uniqueSkills.map(skill => {
            return (
              <Button
                key={id()}
                onClick={() => this.filterSkillsHandler(skill)}
                variant={
                  selectedSkills.includes(skill) ? 'contained' : 'outlined'
                }
                size='small'
                color='primary'
                className={classes.button}
                aria-label="Filter specific skill"
              >
                {skill}
              </Button>
            )
          })}

          {/*FILTER BY STATUS ---------------- */}
          <p>
            🏳️ You cal also filter alumni students by there status using the
            filter buttons below:
          </p>
          {uniqueStatuses.map(status => {
            return (
              <Button
                key={id()}
                onClick={() => this.filterStatusesHandler(status)}
                variant={
                  selectedStatus.includes(status) ? 'contained' : 'outlined'
                }
                size='small'
                color='primary'
                className={classes.button}
                aria-label="Filter specific status"
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
                <AlumniDetails alumni={member} />
              </ItemCard>
            ))}
        </div>
      </div>
    )
  }
}

export default withStyles(style)(Hire)
