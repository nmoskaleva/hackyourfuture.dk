import * as React from 'react'
import alumniList from './alumni.json'
import ItemCard from '../team/item-card/item-card'
import Content from '../layouts/content/content'
import styles from './hire.scss'
import id from 'uuid/v4'

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
    this.setState({ alumniList: newAlumniList })
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
    return (
      <div>
        <style jsx>{styles}</style>
        <h2 className='center'>Find the right candidate</h2>
        <p className='sub-header'>
          Meet the HackYourFuture alumni. Making a good match between our
          dedicated graduates and hiring companies is super important to us. We
          hope that this database will help you find your next favourite
          employee or colleague!
        </p>
        <Content>
          {/*FILTER BY SKILLS ---------------- */}
          <p>
            <strong>Select competency</strong>
          </p>
          {uniqueSkills.map(skill => {
            return (
              <button
                key={id()}
                onClick={() => this.filterSkillsHandler(skill)}
                className={`${
                  selectedSkills.includes(skill) ? 'active' : 'outlined'
                } filter`}
                color='primary'
                aria-label='Filter specific skills'
              >
                {skill}
              </button>
            )
          })}

          {/*FILTER BY STATUS ---------------- */}
          <p>
            <strong>Select status</strong>
          </p>
          {uniqueStatuses.map(status => {
            return (
              <button
                key={id()}
                onClick={() => this.filterStatusesHandler(status)}
                className={`${selectedStatus.includes(status) &&
                  'active'} filter`}
                color='primary'
                aria-label='Filter specific status'
              >
                {status}
              </button>
            )
          })}
        </Content>

        <div className='team-members'>
          {alumniList.length > 0 ? (
            alumniList
              .sort((a, b) => a.name.localeCompare(b.name))
              .map(member => <ItemCard item={member} key={member.id} />)
          ) : (
            <div className='no-results'>
              <h3>No students found</h3>
              <p>Try change your search filter</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Hire
