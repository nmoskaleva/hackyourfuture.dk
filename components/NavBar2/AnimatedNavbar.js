import React, {Component} from 'react'
import Navbar from './Navbar'
import NavbarItem from './Navbar/NavbarItem'
import {Flipper} from 'react-flip-toolkit'
import DropdownContainer from './DropdownContainer'
import {links} from './links-json'
import Dropdown from './DropdownContents/Dropdown'

export default class AnimatedNavbar extends Component {
  state = {
    activeIndices: [],
    navbarConfig: []
  }

  componentDidMount() {
    this.setState({
      navbarConfig: links.map(({title, dropdown,url}) => ({
        title,
        dropdown: Dropdown,
        url,
        dropdownList: dropdown
      }))
    })
  }

  resetDropdownState = i => {
    this.setState({
      activeIndices: typeof i === 'number' ? [i] : [],
      animatingOut: false
    })
    delete this.animatingOutTimeout
  }

  onMouseEnter = i => {
    if (this.animatingOutTimeout) {
      clearTimeout(this.animatingOutTimeout)
      this.resetDropdownState(i)
      return
    }
    if (this.state.activeIndices[this.state.activeIndices.length - 1] === i)
      return

    this.setState(prevState => ({
      activeIndices: prevState.activeIndices.concat(i),
      animatingOut: false
    }))
  }

  onMouseLeave = () => {
    this.setState({
      animatingOut: true
    })
    this.animatingOutTimeout = setTimeout(
      this.resetDropdownState,
      this.props.duration
    )
  }

  render() {
    const {duration} = this.props
    const {navbarConfig} = this.state
    let CurrentDropdown
    let PrevDropdown
    let direction
    const currentIndex = this.state.activeIndices[
    this.state.activeIndices.length - 1
      ]
    const prevIndex =
            this.state.activeIndices.length > 1 &&
            this.state.activeIndices[this.state.activeIndices.length - 2]

    if (typeof currentIndex === 'number')
      CurrentDropdown = navbarConfig[currentIndex].dropdown
    if (typeof prevIndex === 'number') {
      PrevDropdown = navbarConfig[prevIndex].dropdown
      direction = currentIndex > prevIndex ? 'right' : 'left'
    }

    return (
      <Flipper
        flipKey={currentIndex}
        spring={duration === 300 ? 'noWobble' : {stiffness: 10, damping: 10}}
      >
        <Navbar onMouseLeave={this.onMouseLeave}>
          {/*home logo button start:*/}
          <li>
            <button className="sc-htpNat logoBtn">
              <a href='/'> </a>
              {/*language=CSS*/}
              <style jsx>{`
                  .logoBtn {
                      background: url('/static/HYF_LOGO.png') center center/cover;
                      width: 100px;
                      height: 100%;
                      dispalay: flex;
                      flex-direction: column;
                      cursor: pointer;
                      border: none;
                      margin-right: 2rem;
                  }

                  .logoBtn:hover {
                      opacity: .8;
                      transition: all .5s;
                  }

                  .logoBtn:focus {
                      outline: none;
                  }

                  .logoBtn a {
                      width: 100px;
                      height: 100%;
                      dispalay: flex;
                      display: inline-block;
                  }

              `}
              </style>

            </button>
          </li>
          {/*home logo button end;*/}
          {navbarConfig.map((dropDown, index) => {

             console.log('dropDown', dropDown)
            return (
              <NavbarItem
                key={index}
                title={dropDown.title}
                index={index}
                onMouseEnter={this.onMouseEnter}
              >
                {currentIndex === index && (
                  <DropdownContainer
                    direction={direction}
                    animatingOut={this.state.animatingOut}
                    duration={duration}
                  >
                    <CurrentDropdown
                      menuURL = {dropDown.url}
                      menuTitle={dropDown.title}
                      dropDown={dropDown.dropdownList}
                    />
                    {PrevDropdown && <PrevDropdown />}
                  </DropdownContainer>
                )}
              </NavbarItem>
            )
          })}
        </Navbar>
      </Flipper>
    )
  }
}
