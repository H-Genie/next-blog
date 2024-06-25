import Head from "next/head"
import NavBar from "../components/NavBar"
import "../style/globals.css"

export default function App({ Component, pageProps }) {
  console.log("[App] render")
  return (
    <>
      <Head>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <header>
        <NavBar />
      </header>
      <Component {...pageProps} />
    </>
  )
}
