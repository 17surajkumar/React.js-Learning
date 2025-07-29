import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from 'react';
import ReactDOM from 'react-dom/client';


function MyApp() {
  return(
    <>
    <h1>This is new custom react app...</h1>
    </>
  )
}

const ReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'

    },
    children: 'Click me to visit google'
}

const anotherElement = (
  <a href="https://google.com" target="_blank">Visit google</a>
)

ReactDOM.createRoot(document.getElementById("root")).render(

    anotherElement
  
);
 