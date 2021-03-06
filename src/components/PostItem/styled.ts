import styled from "styled-components"
import media from "styled-media-query"

import Link from 'next/link'

export const PostItemContainer = styled.li`
  cursor: pointer;
`

export const PostItemLink = styled(Link)`
  color: var(--texts);
  display: flex;
  text-decoration: none;
  transition: all 0.5s ease 0s;
  cursor: pointer;
  
  body #grid & {
    background-color: var(--background);
  }
  
`

export const PostItemWrapper = styled.section`
  align-items: center;
  border-bottom: 1px solid var(--borders);
  display: flex;
  padding: 2rem 3rem;
  width: 100%;
  transition: all 0.5s ease 0s;
  
  body#grid & {
    border: none;
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;
  }
  
  ${media.lessThan("large")`
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem 1rem;
  `}

  
`

type PostItemProps = {
  background: string
}

export const PostItemTag = styled.div<PostItemProps>`
  align-items: center;
  background: ${props =>
    props.background ? props.background : "var(--highlight)"};
  border-radius: 50%;
  color: #fff;
  display: flex;
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  min-height: 90px;
  min-width: 90px;
  text-transform: uppercase;
  
  ${media.lessThan("large")`
    border-radius: 0;
    font-size: 1rem;
    min-height: auto;
    min-width: auto;
    padding: .2rem .5rem;
    margin-bottom: .7rem;
  `}
  
  body#grid & {
    margin-bottom: 1.5rem;
  }
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  
  ${media.lessThan("large")`
    margin: 0;
  `}
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
  color: var(--texts);
  
  body #grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }

  &:hover {
    color: var(--highlight);
  }
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
  color: var(--texts);
`
