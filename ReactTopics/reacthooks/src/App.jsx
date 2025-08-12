import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(currCounter => currCounter + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.log(`The count is now ${count}. Running effect...`);
    document.title = `Count is ${count}`;
  }, [count]);

  return (
    <>
      <h1 className="text-center text-blue-500 text-5xl font-mono">
        Learning hooks
      </h1>

      <div
        className="card"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
          fontSize: "2rem",
        }}
      >
        <p className="read-the-docs">Count is: {count}</p>

        <div
          className="buttons"
          style={{ display: "flex", flexDirection: "row", gap: "10px" }}
        >
          <button
            style={{
              border: "2px solid",
              borderRadius: "15px",
              cursor: "pointer",
              padding: "10px",
              backgroundColor: "blue",
              color: "white",
            }}
            onClick={increment}
          >
            Increment +{" "}
          </button>
          <button
            style={{
              border: "2px solid",
              borderRadius: "15px",
              cursor: "pointer",
              padding: "10px",
              backgroundColor: "red",
              color: "white",
            }}
            onClick={decrement}
          >
            Decrement +
          </button>

          <button
            style={{
              border: "2px solid",
              borderRadius: "15px",
              cursor: "pointer",
              padding: "10px",
              backgroundColor: "green",
              color: "white",
            }}
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
