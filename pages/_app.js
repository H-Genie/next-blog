import NavBar from "../components/NavBar"

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
