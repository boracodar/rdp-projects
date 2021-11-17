import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

import "./styles.css";

const Footer = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChangeButton = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <footer>
      <button onClick={handleThemeChangeButton}>Mudar tema!</button>
    </footer>
  );
};

export default Footer;
