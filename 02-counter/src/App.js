import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleMinusClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Contador: {count}</h1>

      {/* <button className="minus" onClick={() => setCount(count - 1)}> */}
      {/* <button className="minus" onClick={() => count > 0 && setCount(count - 1)}> */}
      <button className="minus" onClick={handleMinusClick}>
        -
      </button>

      <button className="plus" onClick={() => setCount(count + 1)}>
        +
      </button>
    </>
  );
}

export default App;
