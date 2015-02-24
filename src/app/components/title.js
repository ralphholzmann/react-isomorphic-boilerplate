import React from "react";
import Router from "react-router";

var {State} = Router;

var Title = React.createClass({
  mixins: [State],

  getInitialState() {
    var titleParts = this.getRoutes().map(function(route) {
      return route.handler.title || "";
    }).filter(Boolean);
    titleParts.unshift("Hometown Tickets");

    return {
      title: titleParts.join(" | ")
    };
  },

  render() {
    return (
      <title>{this.state.title}</title>
    );
  }
});

export default Title;
