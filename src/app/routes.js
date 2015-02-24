import React from "react";
import Router from "react-router";
import Application from "./handlers/application";
import Index from "./handlers/index";
import NotFound from "./handlers/not-found";

var {DefaultRoute, Link, Route, RouteHandler, NotFoundRoute} = Router;

var routes = [
  <Route handler={Application} path="">
    <DefaultRoute handler={Index} />
  </Route>,
  <NotFoundRoute name="not-found" handler={NotFound}/>
];

export default routes;
