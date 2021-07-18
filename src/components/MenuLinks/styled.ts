import styled from "styled-components"
import media from "styled-media-query"

import Link from 'next/link'


export const MenuLinksWrapper = styled.nav`
  ${media.lessThan("large")`
    display: none;
  `}
`

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;
  
  .active {
    color: var(--highlight);
  }
`

export const MenuLinksLink = styled(Link)`
  color: var(--texts);
  text-decoration: none;
  transition: all 0.5s ease 0s;
  
  &:hover {
    color: var(--highlight);
  }

  > a {
    color: red;
  }
`
