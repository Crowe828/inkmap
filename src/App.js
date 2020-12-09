import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import API from "./Utils/API";
import Splash from "./Pages/Splash";
import Main from "./Pages/Main";
import "./App.css";

export const App = () => {
  // state for data that comes in for the API call and the search term in the search bar
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");

  // on mount, state will show popular animes
  useEffect(() => {
    getPics();
  }, []);

  function getPics() {
    API.getData()
      .then((res) => {
        console.log(res.data.results);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Splash />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
