import { readFile } from "fs/promises"
import Head from "next/head"

export const getStaticProps = async () => {
  console.log("[FirstPostPage] getStaticProps()")
  const data = await readFile("content/posts/first-post.json", "utf-8")
  const post = JSON.parse(data)
  return {
    props: {
      post: {
        title: post.title,
        body: post.body
      }
    }
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
        <h1>First Post</h1>
        <p>{post.body}</p>
      </main>
    </>
  )
}
