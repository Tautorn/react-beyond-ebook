import React, { useState, useLayoutEffect } from "react"
import App from "./App"

function ApplyTheme() {
  const [theme, setTheme] = useState("light")

  useLayoutEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "#fff" : "#000";
  }, [theme])

  return <App />
}