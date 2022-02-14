import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

import moment from "moment";


import utilStyles from "../styles/utils.module.css";
import Layout from "../components/Layout";
import { getSortedPostsData } from "../lib/blog";
import { SITE_TITLE } from "../shared/constants";

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
    <Layout>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, description }) => (
            <li
              key={id}
              className={utilStyles.listItem}
              style={{
                border: "1px solid #e6e6e6",
                padding: "14px",
                borderRadius: "8px",
              }}
            >
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

