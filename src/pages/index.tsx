import { GetStaticProps } from 'next'
import Head from 'next/head'

import { Layout } from '../components/Layout'
import { PostItem } from '../components/PostItem'

import { getSortedPostsData } from '../lib/posts'

import * as S from '../styles/Home'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    category: string;
    title: string
    // date: string;
    background: string;
    description: string;
    id: string
  }[]
}) {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <S.List>
        {allPostsData.map(({ id, title, category, background, description }) => (
          <PostItem
            id={`/posts/${id}`}
            background={background}
            category={category}
            title={title}
            description={description}
            key={id}
          />           
        ))}
      </S.List>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}