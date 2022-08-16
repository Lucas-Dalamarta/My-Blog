import Link from "next/link";
import { useRouter } from "next/router";

import { MdLightMode as Light, MdDarkMode as Dark} from 'react-icons/md';
import { useTheme } from "../../contexts/Theme";

import { DEV_INFO } from "../../shared/constants";

import * as S from "./styled";

type themes = "light" | "dark";

export const Header = () => {
  const router = useRouter();
  const { colorMode, handleThemeChange } = useTheme();

  return (
    <S.Header>
      <div>
        <Link href="/">
          <S.DeveloperTitle
            style={{
              display: "flex",
              height: 64,
              gap: 12,
              cursor: "pointer",
            }}
          >
            <span className="name">
              {DEV_INFO.name}
            </span>
          </S.DeveloperTitle>
        </Link>
      </div>
      
      <S.Nav>
        <S.Link isActive={router.pathname.includes("/blog")}>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </S.Link>
        <span style={{ margin: "0 16px", opacity: "0.5"}}>|</span>
        <S.Link isActive={router.pathname === "/about"}>
          <Link href="/blog">
            <a>About</a>
          </Link>
        </S.Link>
      </S.Nav>

      <div>
        <button 
          onClick={handleThemeChange}
            style={{
              border: "none",
              background: "none",
            }}
        >
          {colorMode === "light" && <Light size={28} color="var(--color-primary)"/>}
          {colorMode === "dark" && <Dark size={28} color="var(--color-primary)" />}
        </button>
      </div>
    </S.Header>
  )
} 
