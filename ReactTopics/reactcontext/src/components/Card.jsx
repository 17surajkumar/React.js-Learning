import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Card() {
  //consume the context value using the hook
  const theme = useContext(ThemeContext);
  return (
    <div className={`card ${theme}`}>
      <h2>This is the card</h2>
      <p>
        The current theme is <strong>{theme}</strong> <br />
        This component gets their theme directly from the context without Any
        props!
      </p>
    </div>
  );
}

export default Card;
