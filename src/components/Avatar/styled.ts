import styled from 'styled-components'
import media from "styled-media-query"

import Image from 'next/image'

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;

  ${media.lessThan("large")`
    height: 1.875rem;
    width: 1.875rem;
  `}
`

export const ImageWrapper = styled(Image)`
  border-radius: 5%;
`