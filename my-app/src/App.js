import React from "react";
import { Home, List } from "./Pages";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route path="/list" render={(props) => <List {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
