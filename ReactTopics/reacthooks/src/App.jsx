import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((currCounter) => currCounter + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.log(`The count is now ${count}. Running effect...`);
    document.title = `Count is ${count}`;
  }, [count]);

  //----------------------------------------useRef--------------------------------

  const [name, setName] = useState("");
  // 1. Create a ref to store the render count, initialized to 0
  const renderCount = useRef(0);

  useEffect(() => {
    // 2. Increment the .current property on every render
    //    This does NOT cause another re-render, avoiding an infinite
    renderCount.current = renderCount.current + 1;
  });

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

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: '20px',
        }}
      >
        <h1 className="text-3xl text-fuchsia-500 font-mono">Learnign useRef Hook</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input style={{
            border: '2px solid',
            borderRadius: '7px',
            padding: '5px',
            width: '250px',
            marginTop: '20px'
          }}
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Type to re-render"
          />
          <p>My name is {name}</p>
          <p>This component has rendered {renderCount.current} times...</p>
        </div>
      </div>
    </>
  );
}

export default App;
