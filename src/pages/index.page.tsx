import Head from "next/head";
import { BlogLayout } from "../components/BlogLayout";
import { BlogPage } from "../lib/types";

import { SITE_TITLE } from "../shared/constants";

const Home: BlogPage = () => {
  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <section>
        <h1>Home</h1>
      </section>
    </>
  );
}

Home.Layout = BlogLayout;
export default Home;
