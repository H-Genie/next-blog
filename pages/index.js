import Head from "next/head"

export default function HomePage() {
  console.log("[HomePage] render")
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <main>
        <h1>My Blog</h1>
      </main>
    </>
  )
}
