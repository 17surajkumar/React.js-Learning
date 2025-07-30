import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    username: "suraj",
    age:21
  }

  return (
    <>
      <h1 className="bg-black text-white p-5 rounded-xl mb-4">
        Tailwind and Props
      </h1>
      <div id="myCards">
        <Card username="Maneesh Kumar" btnText="Click Me"/>
        <br />
        <Card username="Suraj Kumar" btnText="View Profile"/>
      </div>
    </>
  );
}

export default App;
