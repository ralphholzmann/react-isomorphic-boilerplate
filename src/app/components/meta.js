import React from "react";
import Router from "react-router";

var {State} = Router;

var Meta = React.createClass({
  mixins: [State],

  getInitialState() {
    var metaName = this.props.name;
    var metaParts =  this.getRoutes().map((route) => {
      return (route.handler.meta && route.handler.meta[metaName]) || "";
    }).filter(Boolean);

    return {
      content: metaParts.join(" ")
    };
  },

  render() {
    return (
      <meta name={this.props.name} content={this.state.content}></meta>
    );
  }
});

export default Meta;
