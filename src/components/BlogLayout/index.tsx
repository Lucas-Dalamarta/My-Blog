import * as S from "./styled"

import { Header } from "../Header"

export const BlogLayout = ({ children }: any) => {
  return (
    <S.Layout>
      <Header />
      <S.Content>
        {children}
      </S.Content>
    </S.Layout>
  )
}