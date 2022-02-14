import Image from "next/image";
import styled  from "styled-components";

export const BorderCircle = styled(Image)`
  border-radius: 9999px;
`
export const Sidebar = styled.aside`
  min-width: 20vw;
  max-width: 20vw;
  min-height: 100vh;
  max-height: 100vh;
  border-right: 1px solid #e6e6e6;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  
  padding: 16px;

  position: sticky;
  top: 0;
`

export const Heading2XL = styled.h1`
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
`

export const HeadingLG = styled.h2`
  font-size: 1.2rem;
  line-height: 1.2rem;
  margin: 0.5rem 0;
`

export const HeadingMD = styled.section`
  font-size: 1rem;
  line-height: 1rem;
  margin: 0.5rem 0;
`

export const ColorInherit = styled.a`
  color: inherit;
  cursor: pointer;
`
