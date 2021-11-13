import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CarCollection from "./Pages/CarCollection/CarCollection/CarCollection";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/carcollection">
            <CarCollection></CarCollection>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
