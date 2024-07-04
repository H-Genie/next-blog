import Head from "next/head"
import { getPost } from "../../lib/posts"

export const getStaticProps = async () => {
  console.log("[FirstPostPage] getStaticProps()")
  const post = await getPost("first-post")
  return {
    props: { post }
  }
}

export default function FirstPostPage({ post }) {
  console.log("[AboutPage] render : ", post)
  return (
    <>
      <Head>
        <title>{`${post.title} - My Blog`}</title>
      </Head>
      <main>
        <p>{post.date}</p>
        <h1>First Post</h1>
        <article dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </>
  )
}
