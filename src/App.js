import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
function App() {
  const [resourceType, setResourceType] = useState("posts");

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
