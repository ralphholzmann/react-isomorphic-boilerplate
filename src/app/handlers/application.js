import React from "react";
import Router from "react-router";
import Title from "../components/title";
import Meta from "../components/meta";

var RouteHandler = Router.RouteHandler;

var Application = React.createClass({

  renderBodyContents() {
    return (
      <div>
        <RouteHandler/>
      </div>
    );
  },

  renderApplication() {
    return (
      <html>
        <head>
          <meta name="charset" content="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <Meta name="description" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="" />
          <Title></Title>
        </head>
        <body>
          {this.renderBodyContents()}
          <script src="app.js"></script>
        </body>
      </html>
    );
  },

  render() {
    return process.browser ? this.renderBodyContents() : this.renderApplication();
  }
});

export default Application;
