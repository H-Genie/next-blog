export default function DarkTheme() {
  return (
    <style jsx global>
      {`
        :root {
          --background-color: black;
          --text-color: white;
        }
      `}
    </style>
  )
}
