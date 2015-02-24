import React from "react";
import Router from "react-router";
var RouteHandler = Router.RouteHandler;

var Index = React.createClass({
  statics: {
    title: "This will be the page title",
    meta: {
      description: "This will be the meta description"
    }
  },

  render() {
    return (
      <div>
        Welcome! {process.browser ? 'Client' : 'Server'}
        <RouteHandler/>
      </div>
    );
  }
});

export default Index;
