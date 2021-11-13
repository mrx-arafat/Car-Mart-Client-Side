import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CarCollection from "./Pages/CarCollection/CarCollection/CarCollection";

import PreOrder from "../src/Pages/CarCollection/CarCollection/PreOrder/PreOrder";
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
          <Route path="/pre-order">
            <PreOrder></PreOrder>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
