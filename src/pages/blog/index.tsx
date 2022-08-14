import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import moment from "moment";

import { Divider, Card } from "antd";

import { getSortedPostsData } from "../../lib/blog";

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

const Blog: NextPage = ({ allPostsData } : any) => {
  return (
    <>
      <h1>Postagens</h1>
      <Divider />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12}}>
        {allPostsData.map(({ id, date, title, description }) => (
          <Card
            key={id}
            title={<Link href={`/blog/${id}`}>{title}</Link>}
          >
            <p>{moment(date).format("DD/MM/YYYY")}</p>
            <p>{description}</p>
          </Card>
        ))}
      </div>
    </>
  )
}

export default Blog;

