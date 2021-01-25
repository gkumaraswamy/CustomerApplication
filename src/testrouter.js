import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App";
import Recipe from "./Recipe";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/recipe/:recipeId" component={Recipe} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
const FAVORITED_CLASS = 'btn btn-sm btn-primary';
const NOT_FAVORITED_CLASS = 'btn btn-sm btn-outline-primary';
const DO_NOT_FAVORITED_CLASS = 'btn btn-sm btn-outline-secondary';
const THIRD_FAVORITED_CLASS = 'btn btn-sm btn-outline-third';
const FOURTH_FAVORITED_CLASS = 'btn btn-sm btn-outline-fourth';
const SIXTH_FAVORITED_CLASS = 'btn btn-sm btn-outline-sixth';