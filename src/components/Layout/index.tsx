import React, { ReactNode } from "react"

import GlobalStyles from "../../styles/global"

import { SideBar } from "../SideBar"
import { MenuBar } from "../MenuBar"

import * as S from "./styled"
import { Header } from "../Header"

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      {/* <MenuBar />       */}
      <Header />
      {/* <S.LayoutMain>{children}</S.LayoutMain>
      <SideBar /> */}
    </S.LayoutWrapper>
  );
}
