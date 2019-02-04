import alumniList from './alumni'
import ItemCard from '../team/item-card'
import Content from '../layouts/content'
import SimpleExpansionPanel from './expansionPanel'
import Button from '@material-ui/core/Button'

class Hire extends React.Component {
  state = {
    skills: [],
    selectedSkills: [],
    selectedStatus: [],
    statusList: [],
    alumniList: alumniList
  }

  componentDidMount() {
    let skills = []
    let statusList = []

    alumniList.forEach(alumni => {
      skills = [...skills, ...alumni.skills]
      statusList = [...statusList, alumni.status]
    })
    this.setState({
      // get distinct unique items from an array
      skills: [...new Set(skills)],
      statusList: [...new Set(statusList)]
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
        console.log(this.state.selectedSkills)
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
      skills,
      selectedSkills,
      statusList,
      selectedStatus
    } = this.state
    return (
      <div>
        {/*language=CSS*/}
        <style jsx>
          {`
            .members {
              display: flex;
              flex-wrap: wrap;
              max-width: 1200px;
              margin: 0 auto;
              justify-content: center;
            }

            .center {
              text-align: center;
              margin: 4rem;
            }

            .filterMenu {
              padding: 0.3rem 5rem;
              font-size: 1rem;
              margin-left: 1rem;
              border-radius: 3px;
            }
          `}
        </style>

        <h2 className='center'>Alumni</h2>
        <Content>
          {/*FILTER BY SKILLS ---------------- */}
          {skills.map((skill, index) => {
            return (
              <Button
                key={index + 1}
                onClick={() => this.filterHandler(skill)}
                variant={
                  selectedSkills.includes(skill) ? 'contained' : 'outlined'
                }
                size='small'
                color='primary'
                style={{ marginRight: '0.5rem' }}
              >
                {skill}
              </Button>
            )
          })}

          {/*FILTER BY STATUS ---------------- */}
          {statusList.map((status, index) => {
            return (
              <Button
                key={index + 1}
                onClick={() => this.filterHandler(status)}
                variant={
                  selectedStatus.includes(status) ? 'contained' : 'outlined'
                }
                size='small'
                color='primary'
                style={{ marginRight: '0.5rem' }}
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

export default Hire
