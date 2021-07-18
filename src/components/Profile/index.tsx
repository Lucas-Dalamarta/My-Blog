import React from "react"

import { Avatar } from "../Avatar"
import * as S from "./styled"

const info = {
  name: 'Lucas Felipe Dalamarta',
  position: 'Fullstack Engineer',
  description: `Um blog feito por um jovem Desenvolvedor Fullstack`
}

export const Profile = () => {
  return (
    <S.ProfileWrapper>
      <Avatar height={64} width={64}/>
      <S.ProfileLink href="/">
        <S.ProfileAuthor>
          {info.name}
          <S.ProfilePosition>{info.position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{info.description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

