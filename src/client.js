import React from "react";
import Router from "react-router";
import routes from "./app/routes.js";

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(React.createElement(Handler, null), document.body);
});
