import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [inp, setInp] = useState("");

  const handleCounterDec = () => {
    setCount((prevState) => prevState - 1);
  };
  const handleCounterInc = () => {
    setCount((prevState) => prevState + 1);
  };
  const handleCounterReset = () => {
    setCount(0);
  };
  const handleCounterSet = () => {
    if (inp && !isNaN(inp)) {
      setCount(inp);
      setInp("");
    } else {
      alert("No Value Found");
    }
  };
  const handlerCounterInp = (e) => {
    setInp(e.target.value);
  };

  return (
    <>
      <div>
        <h2>{count}</h2>
        <hr />
        <button onClick={handleCounterDec}>--</button>
        <button onClick={handleCounterInc}>++</button>
        <button onClick={handleCounterReset}>reset</button>
        <button onClick={handleCounterSet}>set</button> <br />
        <input
          type="text"
          placeholder="Input Set Number"
          value={inp}
          onChange={handlerCounterInp}
        />
      </div>
    </>
  );
};

export default Counter;
