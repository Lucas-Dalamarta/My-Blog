import { ReactNode } from "react"

import GlobalStyles from "../../styles/global"

import { SideBar } from "../SideBar"
import { MenuBar } from "../MenuBar"

import * as S from "./styled"

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <SideBar />
      
      <S.LayoutMain>{children}</S.LayoutMain>
      <MenuBar />
    </S.LayoutWrapper>
  )
}
