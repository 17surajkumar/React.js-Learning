import { useState } from "react";
import { ThemeContext } from "./components/ThemeContext";
import "./App.css";
import Card from "./components/Card";
import Profile from "./components/Profile";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`App ${theme}`}>
        <h1
          className={`text-center text-5xl font-mono heading text-purple-500 ${theme}`}
        >
          Learning React Context Hook
        </h1>
        <h1>Use Context Theme Switcher</h1>
        <button onClick={toggleTheme} className="theme-button">
          Switch to {theme === "light" ? "dark" : "light"} Mode
        </button>
        <Card />
        <Profile />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

// Steps to create the context

/*
1. Create a Context: You create a "context object" using React.createContext(). Think of this as creating a global data channel.

2. Provide the Context: You wrap a parent component with a Context.Provider. This Provider "provides" a value to all components inside it.

3. Consume the Context: Any child component can then use the useContext() hook to directly access that value, no matter how deeply nested it is.

4. Going

*/

/*

PART 1: Creating the Theme Context(Radio station)

STEP 1: Create the "Radio Station"
First, you create a central channel that your app components can  listen to.

we have just created the radio station but currently it does not 
broadcasting anything yet.


STEP 2: Set up the Broadcast Tower

you need to make a parent component broadcast the theme information to all its children

in your App.jsx file , you wrap your components with a provider 

The Provider is your broadcast tower. The value={theme} part tells the tower what signal to broadcast. If your theme state is 'light', the tower sends out the 'light' signal to every component inside it.


STEP 3:  "Tune In" with a Radio

In a child component (e.g., Card.jsx), you use the useContext hook.

const theme = useContext(ThemeContext);

In simple terms: This line of code is your radio. It tunes directly into the ThemeContext station, listens for the signal ('light' or 'dark'), and stores it in a local theme variable. This avoids having to pass the theme down as a prop.

Part 2: How the css is applied (Chain reaction)

STEP 1: The state changes

You click the button. This calls the setTheme function, and the state in your App.jsx changes from 'light' to 'dark'.

STEP 2: The html class name changes

React sees that the theme state has changed, so it re-renders the App component. The className of your main div is updated in the browser's HTML.

Before: <div class="App light">

After: <div class="App dark">









*/
