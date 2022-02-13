import Image from "next/image";
import styled  from "styled-components";

export const BorderCircle = styled(Image)`
  border-radius: 9999px;
`

export const Heading2XL = styled.h1`
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
`

export const HeadingLG = styled.h2`
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 1rem 0;
`

export const HeadingMD = styled.section`
  font-size: 1.2rem;
  line-height: 1.5;
`

export const ColorInherit = styled.a`
  color: inherit;
  cursor: pointer;
`
