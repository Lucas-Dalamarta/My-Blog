
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import { FiChevronLeft } from "react-icons/fi";

import { getAllPostIds, getPostData } from "../../lib/blog";

import Layout from "../../components/Layout";
import utilStyles from "../../styles/utils.module.css";

import * as S from './styled';
import Link from "next/link";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);

  return {
    props: {
      postData,
    },
  };
};
interface IPostDataProps {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  }
}

export default function Post({ postData }: IPostDataProps) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <section dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>

      <S.BackToHome>
        <Link href="/">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
            }}
          >
            <FiChevronLeft color="#2B2C28" />
            <a style={{ textDecoration: "none", color: "#2B2C28" }}>
              Voltar para a Home
            </a>
          </div>
        </Link>
      </S.BackToHome>
    </Layout>
  );
}

