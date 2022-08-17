import * as S from "./styled"

import { Header } from "../Header"

export const BlogLayout = ({ children }: any) => {
  return (
    <div style={{ display: "flex", justifyContent: "center"}}>
      <S.Layout style={{ maxWidth: 1400 }}>
        <Header />
        <S.Content>
          {children}
        </S.Content>
      </S.Layout>
    </div>
  )
}