import styled from "styled-components"

export const Heading = styled.h3`
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
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 0;
  margin-bottom: ${props => (props.noMarginBottom ? 0 : "1rem")};
  color: ${({ color }) => (color ? `var(--${color})` : "var(--blue)")};
`

export const HeadingLink = Heading.withComponent("li")

export const LinkList = styled.ul`
  li {
    margin-bottom: 1rem;
  }

  li:last-of-type {
    margin-bottom: 0;
  }
  
  margin-left: ${props => (props.marginLeft ? props.marginLeft : 0)};
`

export const Icon = styled.div`
  width: 13px;
  height: 13px;
  margin-right: 13px;
  background-color: #6772e5;
  opacity: 0.8;
  display: inline-block;
`

export const DropdownSection = styled.div`
  padding: 28px;
  position: relative;
  z-index: 1;
`
