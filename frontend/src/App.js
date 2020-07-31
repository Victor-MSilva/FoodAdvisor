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
import UserRecipes from "./recipes/pages/UserRecipes";
import LandingPage from "./shared/pages/LandingPage";

function App() {
  return (
    <Router>
      <Navigationbar/>
      <main className="marginNav">
        <Switch>
          <Route path="/home" exact>
            <Users />
          </Route>
          <Route path="/:userId/recipes" exact>
            <UserRecipes />
          </Route>
          <Route path="/:userId/recipes/new" exact>
            <NewRecipe />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
