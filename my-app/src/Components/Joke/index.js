import React from "react";
import "./style.css";

const Joke = ({
    joke,
    flags
}) => {
  return (
    <p>
        {joke},
        flags.forEach(element => {
            <i>{element}</i>
        });
    </p>
  );
};

export default Joke;