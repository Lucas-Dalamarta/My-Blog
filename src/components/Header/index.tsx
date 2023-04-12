import Link from "next/link";
import { useRouter } from "next/router";

import { MdLightMode as Light, MdDarkMode as Dark} from 'react-icons/md';
import { useTheme } from "../../contexts/Theme";

import { DEV_INFO } from "../../shared/constants";

import * as S from "./styled";
import RandomizeTextOnHover from "../RandomizeTextOnHover";

type themes = "light" | "dark";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const Header = () => {
  const router = useRouter();
  const { colorMode, handleThemeChange } = useTheme();

  return (
    <S.Header>
      <div>
        <Link href="/">
          <S.DeveloperTitle>
            <RandomizeTextOnHover text={DEV_INFO.name} />
          </S.DeveloperTitle>
        </Link>
      </div>
      
      <S.Nav>
        <S.Link isActive={router.pathname.includes("/blog")}>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </S.Link>
        <span style={{ margin: "0 16px", opacity: "0.2", color: "var(--color-text)"}}>|</span>
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
          {
            colorMode === "light"
              ? <Light size={28} color="var(--color-primary)" />
              : <Dark size={28} color="var(--color-primary)" />
          }
        </button>
      </div>
    </S.Header>
  )
} 
