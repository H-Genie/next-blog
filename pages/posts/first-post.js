import Head from "next/head"

export const getStaticProps = async () => {
  console.log("[FirstPostPage] getStaticProps()")
  return {
    props: {
      post: {
        title: "First Post",
        body: "My First post, as static props."
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
