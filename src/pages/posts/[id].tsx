import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'

import { getAllPostIds , getPostData } from '../../lib/posts'

import { Layout } from '../../components/Layout' 

import * as S from '../../styles/Post'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string)
  return {
    props: {
      postData
    }
  }
}

type PostProps = {
  postData: {
    title: string
    contentHtml: string
    description: string
  }
}

export default function Post({ postData }: PostProps) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <S.PostHeader>
        <S.PostTitle>{postData.title}</S.PostTitle>
        <S.PostDescription>{postData.description}</S.PostDescription>
      </S.PostHeader>
      <S.PostContainer>
        <S.MainContent>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </S.MainContent>
      </S.PostContainer>
    </Layout>
  )
}
