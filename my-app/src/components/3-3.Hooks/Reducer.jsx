import React, { useReducer } from "react";

export default function Reducer() {
  const initialState = { count: 0, name: "iam454" };

  function reducer(state, action) {
    switch (action.type) {
      case "reset":
        return initialState;
      case "decrement":
        return { count: state.count - 1, name: "decrement button clicked" };
      case "increment":
        return { count: state.count + 1, name: "increment button clicked" };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Name: {state.name}
      <br />
      Count(useReducer): {state.count}
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </div>
  );
}
