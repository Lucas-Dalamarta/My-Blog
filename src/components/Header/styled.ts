import styled, { keyframes } from "styled-components";

export const Header = styled.header`
  padding: 0 2rem;
  margin: 2rem;

  width: 1200px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10rem;
  align-items: center;
  justify-items: center;
`

const blinkCursor = keyframes`
  0% {
    border-left: 2px solid #f2f2f2;
  }
  50% {
    border-left: 2px solid transparent;
  }
  100% {
    border-left: 2px solid #f2f2f2;
  }
`;

export const DeveloperTitle = styled.div`
  height: 64px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 370px;

  cursor: pointer;
  
  .name {
    color: var(--color-primary);
    font-family: Roboto, sans-serif;
    font-size: 1.7rem;
    font-weight: 600;
    padding: 0rem 1rem;

    animation: ${blinkCursor} 1s linear infinite;
  }
`

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px;
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
    color: var(--color-text);
    text-decoration: none;
  }

  a::link {
    text-decoration: none;
  }
`

