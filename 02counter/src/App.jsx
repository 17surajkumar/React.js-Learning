import { useState, useEffect } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  //Declare a counter variable and this counter element value will reflected in the whole ui and updated by using the setCounter

  const addvalue = () => {
    // console.log("Counter value: ",counter)
    if(counter>=10){
      window.alert("You cannot go above the value 10");
      counter = 9;
    }
    counter++;
    setCounter(counter);
    
  };

  const removeValue = () => {
    if(counter<=0){
      window.alert("You cannot go below the value 0");
      counter = 1;
    }
    counter--;
    setCounter(counter);
  };
  

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      {/* <button onClick={() => setCounter(counter + 1)}>Click Me</button> */}
      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>

      <p>counter: {counter}</p>
    </>
  );
}

export default App;

//Problem is coming with ui manipulation
//React manages variables updation and manipulation
// For that hooks comes in the picture
