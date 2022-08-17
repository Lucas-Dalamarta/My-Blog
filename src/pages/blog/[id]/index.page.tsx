
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";

import { getAllPostIds, getPostData } from "../../../lib/blog";
import { BlogPage } from "../../../lib/types";
import { BlogLayout } from "../../../components/BlogLayout";

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
}

const Post: BlogPage = ({ postData }: any) => {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className='headingXl'>
          {postData.title}
        </h1>
        <br />
        <section dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </>
  )
}

Post.Layout = BlogLayout;
export default Post;

