import styled from "styled-components";

export const Header = styled.header`
  padding: 0 2rem;
  margin: 2rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10rem;
  align-items: center;
  justify-items: center;
`

export const DeveloperTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  
  .name {
    color: var(--color-primary);
    font-family: Roboto, sans-serif;
    font-size: 1.7rem;
    font-weight: 600;
  }
`

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`

type LinkProps = {
  isActive?: boolean;
}

export const Link = styled.li<LinkProps>`
  list-style: none;
  ${props => props.isActive && `
    border-bottom: 2px solid var(--color-primary);
  `}
  
  a {
    color: #222;
    text-decoration: none;
  }

  a::link {
    text-decoration: none;
  }
`

