import Head from "next/head"
import Link from "next/link"

export default function HomePage() {
  console.log("[HomePage] render")
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <main>
        <h1>My Blog</h1>
        <ul>
          <li>
            <Link href="/posts/first-post">First Post</Link>
          </li>
          <li>Two</li>
          <li>Three</li>
        </ul>
      </main>
    </>
  )
}
