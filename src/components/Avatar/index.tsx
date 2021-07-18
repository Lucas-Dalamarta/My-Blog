import * as S from './styled'

export type AvatarProps = {
  height: number
  width: number
}

const name = 'Lucas Felipe Dalamarta'

export const Avatar = ({ height, width }: AvatarProps) => (
  <S.ImageContainer>
    <S.ImageWrapper
      src="/images/profile.jpeg"
      height={height}
      width={width}
      alt={name}
      quality={100}
      layout='intrinsic' 
    />
  </S.ImageContainer> 
)