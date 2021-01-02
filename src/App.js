import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import API from "./Utils/API";
import Splash from "./Pages/Splash";
import Main from "./Pages/Main";

export const App = () => {
  // state for data that comes in for the API call and the search term in the search bar
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [response, setResponse] = useState([]);

  // On mount state will display tattoo images
  useEffect(() => {
    getDefault();
    fsPlaces();
  }, []);

  // Function that sets state to tattoo images
  function getDefault() {
    API.defaultData()
      .then((res) => {
        setResults(res.data.results);
      })
      .catch((err) => console.log(err));
  }

  function fsPlaces() {
    API.foursquare()
      .then((res) => {
        console.log(res.data.response.groups[0].items);
        setResponse(res.data.response.groups[0].items);
      })
      .catch((err) => console.log(err));
  }

  // Search for an image
  function getPics(query) {
    API.getData(query)
      .then((res) => setResults(res.data.results))
      .catch((err) => console.log(err));
  }

  // Set search state to what the user enters
  function handleInputChange(event) {
    setSearch(event.target.value);
  }

  // Submit the users search
  function handleFormSubmit(event) {
    event.preventDefault();
    getPics(search);
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Splash />
        </Route>
        <Route path="/main">
          <Main
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            results={results}
            search={search}
            response={response}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
