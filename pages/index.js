import Link from "next/link"

export default function HomePage() {
  console.log("[HomePage] render")
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>My Blog</h1>
      </main>
    </>
  )
}
