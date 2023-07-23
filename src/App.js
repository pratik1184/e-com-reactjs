import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductsList from "./components/ProductsList"; // Make sure the path is correct
import ProductDetails from "./components/ProductDetails"; // Make sure the path is correct

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Products</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/product/:id">
            <ProductDetails />
          </Route>
          <Route path="/">
            <ProductsList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
