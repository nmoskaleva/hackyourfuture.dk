import LinearProgress from '@material-ui/core/LinearProgress'

class ProgressBar extends React.Component {
  state = {
    completed: 0,
    progressClass: 'progress-div'
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 300)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  progress = () => {
    const {completed} = this.state
    if (completed === 100) {
      // this.setState({completed: 0})
      this.setState({progressClass: 'hidden'})
    } else {
      const diff = Math.random() * 40
      this.setState({completed: Math.min(completed + diff, 100)})
    }
  }

  render = () =>
    <div className={this.state.progressClass}>
      {/*language=SCSS*/}
      <style jsx>{`
        .progress-div {
          flex-grow: 1;
          position: absolute;
          left: 0;
          right: 0;
          z-index: 100;
        }

        .hidden {
          display: none;
        }
      `}
      </style>
      <LinearProgress color="secondary" variant="determinate" value={this.state.completed} />
    </div>
}


export default ProgressBar