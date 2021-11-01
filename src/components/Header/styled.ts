import styled from "styled-components";
import media from "styled-media-query";

export const HeaderContainer = styled.header`
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: 1fr 2fr 1fr;
  
  width: 100vw;
  margin: 16px 64px;
  
  font-size: 24px;
  color: #fff;

  padding: 2rem;
  ${media.lessThan("large")`
    padding: 0.5rem;
  `}
`;

export const BlogName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  span {
    border-bottom: 1px solid #E0C879;
    line-height: 48px;
    text-align: center;
    
    font-family: 'Merriweather';
    font-style: normal;
    font-size: 32px;
  }
`;

export const LinkList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-family: 'Montserrat';
    font-style: normal;
    font-size: 24px;
  }
`;

export const Separator = styled.div`
  border-right: 1px solid #E0C879;
  height: 32px;
  margin: 0 16px;
`

export const LanguagePickerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`