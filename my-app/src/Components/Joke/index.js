import React from "react";
import "./style.css";

const Joke = (joke) => {
  return (
    <div className="joke-box">
      <h3>{joke.joke}</h3>
      <p>Category: {joke.category}</p>
      <p>Flags: {renderFlags(joke.flags)}</p>
    </div>
  );
};

const renderFlags = (flags) => {
  const flagsElement = [];
  for (const flag in flags) {
    if (flags[flag] === true) {
      flagsElement.push(flagElement(flag));
    }
  }
  return flagsElement;
};

const flagElement = (flag) => {
  return <p>{flag}</p>;
};

export default Joke;
