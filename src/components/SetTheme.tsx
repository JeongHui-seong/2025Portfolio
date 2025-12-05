import { useEffect, useState } from "react";

export default function SetTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else{
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="theme-box">
      <div className="theme-wrapper">
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? "🌙" : "☀️"}
      </button>
      </div>
    </div>
  )
}