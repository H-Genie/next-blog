import NavBar from "../components/NavBar"
import "../style/globals.css"

export default function App({ Component, pageProps }) {
  console.log("[App] render")
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Component {...pageProps} />
    </>
  )
}
