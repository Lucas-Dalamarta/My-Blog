import styled from "styled-components"
import media from "styled-media-query"

import Link from 'next/link'


export const MenuBarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  padding: 0.8rem 0;
  height: 100vh;
  right: 0;
  width: 3.75rem;
  
  background: var(--mediumBackground);
  border-left: 1px solid var(--borders);
  
  transition: all 0.5s ease 0s;
  
  ${media.lessThan("large")`
    flex-direction: row;

    border-top: 1px solid var(--borders);
    bottom: 0;
    height: auto;
    padding: 0;
    position: fixed;
    width: 100vw;
  `}
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
  ${media.lessThan("large")`
    flex-direction: row;
  `}
`

export const MenuBarLink = styled(Link)`
  display: block;
  &.active {
    span {
      color: var(--highlight);
    }
  }
`

export const MenuBarItem = styled.span`
  color: var(--texts);
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem;

  transform: color 0.5s ease 0s;

  &:hover {
    color: var(--highlight);
  }

  &.display {
    ${media.lessThan("large")`
      display: none;
    `}
  }

  ${media.greaterThan("large")`
    &:hover {
      color: var(--highlight);
    }
  `}
  
  ${media.lessThan("large")`
    position: relative;
    
    height: 3.2rem;
    padding: .9rem;
    width: 3.2rem;
  `}
`
