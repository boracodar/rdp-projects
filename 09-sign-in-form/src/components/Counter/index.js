import { useReducer } from "react";

import { sum } from "../../reducers/operations";

const Counter = () => {
  const [total, dispatch] = useReducer(sum, 0);

  return (
    <>
      <h2>{total}</h2>

      <button onClick={() => dispatch(1)}>+1</button>
      <button onClick={() => dispatch(2)}>+2</button>
    </>
  );
};

export default Counter;
