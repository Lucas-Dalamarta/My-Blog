import { NextPage } from "next";
import Head from "next/head";

import { SITE_TITLE } from "../shared/constants";

const Home: NextPage = () => {
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

export default Home;
