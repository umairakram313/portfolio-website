import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

const initialTheme =
  document.documentElement.dataset.theme === "light" ? "light" : "dark"
document.documentElement.dataset.theme = initialTheme
document.documentElement.style.colorScheme = initialTheme

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
