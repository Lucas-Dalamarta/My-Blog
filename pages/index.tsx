import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

import moment from "moment";

import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/blog";

import utilStyles from "../styles/utils.module.css";

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    id: string;
    title: string;
    date: string;
    description: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Desenvolvedor Fullstack na UseMobile</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, description }) => (
            <li className={utilStyles.listItem} key={id}>
              <p>{moment(date).format("DD/MM/YYYY")}</p>
              <Link href={`/blog/${id}`}>
                <a>{title}</a>
              </Link>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

