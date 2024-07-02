import Head from "next/head"

export default function FirstPostPage() {
  console.log("[AboutPage] render")
  return (
    <>
      <Head>
        <title>First Post - My Blog</title>
      </Head>
      <main>
        <h1>First Post</h1>
        <p>This is my first ever blog post!</p>
      </main>
    </>
  )
}
