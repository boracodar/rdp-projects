import { useState, useCallback } from "react";

import Child from "./components/Child";

function App() {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");

  const incrementCounter = useCallback(() => setCounter(counter + 1), [counter]);

  return (
    <main>
      <h1>Componente pai: {counter}</h1>

      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <br />
      <br />
      <input type="text" value={input} onChange={({ target }) => setInput(target.value)} />

      <Child counter={counter} incrementCounter={incrementCounter} />
    </main>
  );
}

export default App;
