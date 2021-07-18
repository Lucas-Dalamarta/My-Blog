import styled from 'styled-components'

import Image from 'next/image'

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`

export const ImageWrapper = styled(Image)`
  border-radius: 5%;
`