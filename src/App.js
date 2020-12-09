import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Splash from "./Pages/Splash";
import Main from "./Pages/Main";
import "./App.css";

function App() {
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
}

export default App;
