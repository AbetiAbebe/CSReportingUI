import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { IRoute } from './route-interface';

export  function RouteWithSubRoutes(route:IRoute) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props:any) => <route.component {...props} routes={route.routes} />}
    />
  );
}


//
export function RenderRoutes({ routes }:any) {
  return (
    <Switch>
      {routes.map((route:IRoute, i:number) => {
        return <RouteWithSubRoutes key= {route.id} {...route} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );

    }

// handles   menu routes recursively
export function displayRouteMenu(routes:IRoute[]) {
  /**
   * Render a single route as a list item link to the config's pathname
   */
  function singleRoute(route:IRoute) {
    return (
      <li key={route.id}>
        <Link to={route.path}>
          {route.id} ({route.path})
        </Link>
      </li>
    );
  }

  // loop through the array of routes and generate an unordered list
  return (
    <ul>
      {routes.map(route => {

        if (route.routes) {
          return (
            <React.Fragment key={route.id}>
              {singleRoute(route)}
              {displayRouteMenu(route.routes)}

            </React.Fragment>
          );
        }

        // no nested routes, so just render a single route
        return singleRoute(route);
      })}
    </ul>
  );
}
