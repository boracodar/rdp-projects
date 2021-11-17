import { useContext } from "react";

import ThemeContext from "../../contexts/ThemeContext";

import "./styles.css";

const Box = () => {
  const { theme } = useContext(ThemeContext);

  return <div className={`box ${theme}`}></div>;
};

export default Box;
