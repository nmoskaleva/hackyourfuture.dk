import React from 'react'
import Button from '@material-ui/core/Button';


class HeaderLink extends React.Component {
  render = () =>
    <>
      {/*language=CSS*/
      }
      <style jsx>{`
          .HeaderLink {
              margin: 0 10px;
              text-decoration: none;
          }

          .HeaderLink:hover {
              text-decoration: underline;
          }
      `}</style>
      <a href={this.props.strings[1]} className="HeaderLink" key={this.props.key}>
        {this.props.strings[0]}
      </a>
    </>
}

export default HeaderLink