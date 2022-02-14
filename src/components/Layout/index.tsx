
import Head from "next/head";

import { SITE_TITLE } from "../../shared/constants";

import { Sidebar } from "../Header";
import * as S from "./styled";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <S.Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            SITE_TITLE
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={SITE_TITLE} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Sidebar />

      <main style={{ padding: "48px" }}>{children}</main>
    </S.Container>
  );
}
