import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";

// Finally, set up the routing logic in your main App component.
/*

Routes:
~ A container that holds all your individual route definition .
It intelligently picks and render the component whose path 
matched the URL

~ Think of <Routes> as a manager that looks at URL and decided which
<Route> to display

What are the things that are happening

~ The App component now acts as the main layout.
~ The <Navbar/> is always rendered
~ The <Routes> block dynamically renders the component that matches
the current URL path defined in each <Route>

*/

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Navbar is outside Routes to be visible on all pages */}
      <Navbar />
      <main style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
