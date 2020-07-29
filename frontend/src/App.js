import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Users from "./user/pages/Users";
import NewRecipe from "./recipes/pages/NewRecipe";
import Navigationbar from "./shared/components/Navigation/Navigationbar";

function App() {
  return (
    <Router>
      <Navigationbar />
      <main>
        <Switch>
          <Route path="/home" exact>
            <Users />
          </Route>
          <Route path="/recipes/new" exact>
            <NewRecipe />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
