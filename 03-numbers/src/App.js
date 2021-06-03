import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  // const fruits = ["Maça", "Banana", "Laranja"];

  return (
    <>
      {/* <div>
        {fruits.map((fruit) => (
          <p key={fruit}>{fruit}</p>
        ))}
      </div>

      <hr /> */}

      <h1>{number}</h1>

      <h2 className={number >= 0 ? "positive" : "negative"}>
        {number >= 0 ? "Positivo" : "Negativo"}
      </h2>

      <input
        type="number"
        name="number"
        value={number}
        onChange={({ target }) => setNumber(parseInt(target.value))}
      />

      {/* Tabuada */}
      <ul>
        {Array.from({ length: 11 }, (_, i) => i).map((i) => (
          <li key={String(i)}>
            {number} x {i} = <strong>{number * i}</strong>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
