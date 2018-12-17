// polyfill es6/es7 methods
import 'core-js/fn/object/entries'
import 'core-js/fn/array/from'
// ponyfill CSS vars
import cssVars from 'css-vars-ponyfill'
import React, {Component} from 'react'
import AnimatedNavbar from './AnimatedNavbar'
import styled from 'styled-components'
import jsxStyle from './style'

cssVars()

const AppContainer = styled.div`
  background: linear-gradient(150deg, #53f 15%, #05d5ff);
  display: flex;
  flex-direction: column;
  //min-height: 100vh;

  > div:first-of-type {
    flex: 1 0 70vh;
  }
`

export default class NavBar2 extends Component {
  state = {duration: 300}

  onChange = data => {
    this.setState(data)
  }

  render() {
    return (
      <AppContainer>
        <jsxStyle />
        <AnimatedNavbar duration={this.state.duration} />
      </AppContainer>
    )
  }
}

