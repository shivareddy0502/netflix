import React from "react"
import './App.css';
import Welcome from "./Components/Home/Home";
import Home from "./Components/Screens/Home";
import Watch from "./Components/Watch";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Home />
          </Route>
          <Route path="/tv">
            <Home />
          </Route>
          <Route path="/movies">
            <Home />
          </Route>
          <Route path="/news">
            <Home />
          </Route>
          <Route path="/mylist">
            <Home />
          </Route>
          <Route path="/play">
            <Watch />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
