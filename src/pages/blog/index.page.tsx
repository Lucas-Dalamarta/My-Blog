import { GetStaticProps } from "next";
import Link from "next/link";
import moment from "moment";

import { getSortedPostsData } from "../../lib/blog";
import { BlogPage } from "../../lib/types";
import { BlogLayout } from "../../components/BlogLayout";

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

const Blog: BlogPage = ({ allPostsData } : any) => {
  return (
    <>
      <h1>Postagens</h1>
      <br />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12}}>
        {allPostsData.map(({ id, date, title, description }) => (
          <>
            <Link href={`/blog/${id}`}>
              <div style={{
                padding: "1rem",
                cursor: "pointer",
                borderRadius: "4px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#FBFBFF",
              }}>
                
                <div 
                  style={{ 
                    borderBottom: "1px solid #e8e8e8",
                    paddingBottom: "0.3rem",
                  }}
                >
                  <span style={{
                    color: "var(--color-primary)",
                    fontSize: "1rem",
                    fontWeight: 500,
                    height: "100%",
                  }}>
                    {title}
                  </span>
                </div>

                <div 
                  style={{
                    paddingTop: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      color: "#333232",
                    }}
                  >
                    {moment(date).format("DD/MM/YYYY")}
                  </span>
                  <p
                    style={{
                      paddingTop: "0.5rem",
                      fontFamily: "Roboto",
                      fontWeight: 400,
                      fontSize: "0.8rem",
                    }}
                  >
                    {description}
                  </p>
                </div>
              </div>

            </Link>
          </>
        ))}
      </div>
    </>
  )
}

Blog.Layout = BlogLayout;
export default Blog;

