import React from 'react'
import {DropdownSection, HeadingLink, Icon, LinkList} from './Components'

const Dropdown = (props) => {
  const dropDown = props.dropDown ? props.dropDown : []
  return (
    <div className="dropdown">
      {/*language=CSS*/}
      <style jsx>{`
          .dropdown {
              width: 18.5rem;
          }
      `}
      </style>
      <DropdownSection data-first-dropdown-section>
        <ul>

          <HeadingLink noMarginBottom>
            <a href={props.menuURL}>
              <Icon /> {props.menuTitle}...
            </a>
          </HeadingLink>

        </ul>
      </DropdownSection>
      <DropdownSection>
        <div>
          {/*<Heading>*/}
          {/*<Icon />From the Blog*/}
          {/*</Heading>*/}
          <LinkList marginLeft="25px">
            {dropDown.length > 0 && dropDown.map(item =>
              <li key={item.id}>
                <a href={item.url}>{item.title}</a>
              </li>
            )}
          </LinkList>
        </div>
      </DropdownSection>
    </div>
  )
}

export default Dropdown
