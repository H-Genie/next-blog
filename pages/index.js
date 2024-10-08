import Head from "next/head"
import Link from "next/link"
import { getPosts } from "../lib/posts"

export const getStaticProps = async () => {
  const posts = await getPosts()
  return {
    props: { posts }
  }
}

export default function HomePage({ posts }) {
  console.log("[HomePage] render:", posts)
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <main>
        <h1>My Blog</h1>
        <ul>
          {posts.map(post => (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}
