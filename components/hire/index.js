import alumniList from './alumni'
import ItemCard from '../team/item-card'
import Content from '../layouts/content'

class Hire extends React.Component {
  state = {
    tags: [],
    alumniList: alumniList
  }

  componentDidMount() {
    let tags = []
    alumniList.forEach(alumni => (tags = [...tags, ...alumni.tags]))
    tags = [...new Set(tags)]
    this.setState({ tags })
  }

  filterHandler = e => {
    this.setState({
      alumniList: alumniList.filter(alumni =>
        alumni.tags.includes(e.target.value)
      )
    })
  }
  render = () => {
    const { alumniList, tags } = this.state
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
          <div>
            Filter by:
            <select onChange={this.filterHandler} className='filterMenu'>
              {tags.map(tag => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </Content>

        <div className='team-members'>
          {alumniList
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(member => (
              <ItemCard item={member} key={member.id} />
            ))}
        </div>
      </div>
    )
  }
}

export default Hire
