import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const handleCountInc = () => {
    setCount((prevState) => {
      return prevState + 1;
    });
  };
  const handleCountDec = () => {
    setCount((prevState) => {
      return prevState - 1;
    });
  };
  const handleCountReset = () => {
    setCount(0);
  };
  const handleCountSet = () => {
    if (input) {
      setCount(input);
      setInput("");
    } else {
      alert("Please enter a number");
    }
  };
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <h1>{count}</h1>
      <hr />
      <button onClick={handleCountDec}>--</button>
      <button onClick={handleCountInc}>++</button>
      <button onClick={handleCountReset}>Reset</button>
      <button onClick={handleCountSet}>Set</button>{" "}
      <input type="text" value={input} onChange={handleInputChange} />
    </>
  );
};

export default Count;
