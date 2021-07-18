import * as S from "./styled"

type PostItemProps = {
  id: string
  background: string
  category: string
  date?: string
  timeToRead?: string
  title: string
  description: string
}

export const PostItem = ({ id, background, category, title, description }: PostItemProps) => {
  return (
    <S.PostItemContainer>
      <S.PostItemLink href={id}>
        <S.PostItemWrapper>
          <S.PostItemTag background={background}>{category}</S.PostItemTag>
          <S.PostItemInfo>
            <S.PostItemTitle>{title}</S.PostItemTitle>
            <S.PostItemDescription>{description}</S.PostItemDescription>
          </S.PostItemInfo>
        </S.PostItemWrapper>
      </S.PostItemLink>
    </S.PostItemContainer>
  )
}
