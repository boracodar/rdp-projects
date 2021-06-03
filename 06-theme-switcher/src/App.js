import { useState } from "react";

import Box from "./components/Box";

import ThemeContext from "./contexts/ThemeContext";

function App() {
  const [theme, setTheme] = useState(() => {
    const storagedTheme = localStorage.getItem("theme");
    return storagedTheme || "light";
  });

  const handleThemeChange = ({ target }) => {
    const newTheme = target.checked ? "dark" : "light";

    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <main className={theme}>
        <p>Texto</p>

        <Box />

        <label>
          <input type="checkbox" checked={theme === "dark"} onChange={handleThemeChange} /> Modo
          escuro
        </label>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
