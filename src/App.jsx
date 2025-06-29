import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <div className="wrapper text-center flex flex-wrap flex-col items-center justify-center h-screen font-primary">
        <div className="content text-7xl p-7">{count}</div>
        <div className="btn-holder">
          <button
            onClick={decrement}
            className="text-white cursor-pointer transition-colors bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Decrement
          </button>
          <button
            onClick={increment}
            className="text-white cursor-pointer transition-colors bg-green-700 hover:bg-green-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700"
          >
            Increment
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
