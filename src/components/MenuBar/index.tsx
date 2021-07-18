import { Home } from "@styled-icons/boxicons-solid/Home"
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt"

import * as S from "./styled"

export const MenuBar = () => {
  
  return (
    <S.MenuBarWrapper>
      
      <S.MenuBarGroup>
        <S.MenuBarLink href="/">
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>

      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Ir para o Topo"
          onClick={() => { window.scroll({ top: 0, behavior: "smooth" }) }}
        >
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>

    </S.MenuBarWrapper>
  )
}
