import { memo, useMemo } from "react";

import "./styles.css";

const Child = ({ counter, incrementCounter }) => {
  console.log("Início da renderização...");

  const lastElement = useMemo(() => {
    const array = Array.from({ length: 15_000_000 }, (_, i) => Math.tan(i));

    return array.slice(-1)[0];
  }, []);

  console.log("Componente filho está sendo renderizado!");

  return (
    <div className="child">
      <h2>Componente filho: {counter}</h2>
      <button onClick={incrementCounter}>+1</button>

      <h3>{lastElement}</h3>
    </div>
  );
};

export default memo(Child);
