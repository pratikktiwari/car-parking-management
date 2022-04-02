import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import Login from "./Components/Login/Login";
import "./cssReset.css";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default App;
