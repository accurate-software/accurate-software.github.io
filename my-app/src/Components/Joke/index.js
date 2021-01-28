import React from "react";
import "./style.css";

const Joke = (joke) => {
  return (
    <div className="joke-box">
      <h3 className="joke">{joke.joke}</h3>
      <p className="joke-category-box">
        <p>Category:</p> <p className="joke-category">{joke.category}</p>
      </p>
      <div className="joke-flags-container">{renderFlags(joke.flags)}</div>
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
  return <p className="joke-flag">{flag}</p>;
};

export default Joke;
