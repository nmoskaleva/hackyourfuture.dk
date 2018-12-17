// polyfill es6/es7 methods
import 'core-js/fn/object/entries'
import 'core-js/fn/array/from'
// ponyfill CSS vars
import cssVars from 'css-vars-ponyfill'

import React, {Component} from 'react'
import AnimatedNavbar from './AnimatedNavbar'
import DemoControls from './DemoControls'
import styled from 'styled-components'
// import './index.css'

cssVars()

const AppContainer = styled.div`
  background: linear-gradient(150deg, #53f 15%, #05d5ff);
  display: flex;
  flex-direction: column;
  min-height: 100vh;

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
        {/*language=CSS*/}
        <style jsx>{`
            * {
                box-sizing: border-box;
            }

            :root {
                --white: #fff;
                --grey: #f1f4f8b0;
                --dark-grey: #6b7c93;
                --green: #24b47e;
                --teal: #4F96CE;
                --blue: #6772e5;
                --dark-blue: #4F3EF5;
                --spacer: 28px;
            }

            body {
                font-family: karla, -apple-system, system-ui, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif;
                -webkit-font-smoothing: antialiased;
                color: var(--dark-grey);
            }

            a {
                text-decoration: none;
                color: var(--blue);
            }

            a:hover,
            a:focus {
                color: var(--dark-blue);
            }

            ul {
                list-style: none;
                padding-left: 0;
            }

            p {
                margin-top: 0;
                margin-bottom: 1rem;
            }

        `}
        </style>
        <AnimatedNavbar duration={this.state.duration} />
        <DemoControls
          duration={this.state.duration}
          onChange={this.onChange}
        />
      </AppContainer>
    )
  }
}

