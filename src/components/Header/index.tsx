import Head from "next/head";
import Link from "next/link";

import { ArrowDownward } from "@mui/icons-material";

import {
  HeaderContainer,
  LinkList,
  BlogName,
  Separator,
  LanguagePickerContainer,
} from "./styled";

export const Header = () => (
  <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather&family=Montserrat:wght@400;600&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <HeaderContainer>
      <LinkList>
        <li>
          <Link href="/">
            <a>About me</a>
          </Link>
        </li>
        <Separator />
        <li>
          <Link href="/">
            <a>Blog</a>
          </Link>
        </li>
      </LinkList>
      <BlogName>
        <span>Lfdalamarta.dev</span>
      </BlogName>

      <LanguagePickerContainer>
        <span>PT</span>
        <ArrowDownward />
      </LanguagePickerContainer>
    </HeaderContainer>
  </>
);