import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { routesConfig } from "config/routeConfig";

const Router = () => {
  return (
    <Switch>
      {routesConfig.map((routeItem, routeIndex) => (
        <Route
          key={routeIndex}
          path={routeItem.path}
          exact={true}
          component={routeItem.component}
        />
      ))}
      <Redirect to="/" />
    </Switch>
  );
};

export default Router;
