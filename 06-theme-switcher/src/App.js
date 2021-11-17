import { useState, useEffect } from "react";

import Box from "./components/Box";
import Footer from "./components/Footer";

import ThemeContext from "./contexts/ThemeContext";

function App() {
  const [theme, setTheme] = useState(() => {
    const storagedTheme = localStorage.getItem("theme");
    return storagedTheme || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <main className={theme}>
        <p>Texto</p>

        <Box />

        <label>
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={({ target }) =>
              setTheme(target.checked ? "dark" : "light")
            }
          />{" "}
          Modo escuro
        </label>

        <Footer />
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
