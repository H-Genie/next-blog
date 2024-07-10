import { useState } from "react"
import DarkTheme from "./DarkTheme"

const loadDarkMode = () => {
  if (typeof localStorage === "undefined") return false
  const value = localStorage.getItem("darkMode")
  return value === null ? false : JSON.parse(value)
}

export default function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(loadDarkMode)

  const handkeClick = () => {
    localStorage.setItem("darkMode", JSON.stringify(!darkMode))
    setDarkMode(!darkMode)
  }

  console.log("🚀 ~ ThemeSwitch ~ darkMode:", darkMode)
  const text = darkMode ? "Light Mode" : "Dark Mode"
  return (
    <>
      <button onClick={() => handkeClick()} suppressHydrationWarning>
        {text}
      </button>
      <style jsx>{`
        button {
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
        }
      `}</style>
      {darkMode && <DarkTheme />}
    </>
  )
}
