var React = require('react');
var Router = require('react-router');
var routes = require("./app/routes.js");
var express = require('express');
var favicon = require('serve-favicon');
var app = express();
var {join} = require("path");

app.use(favicon("build/public/favicon.ico"));
app.use(express.static(join(__dirname, "public")));

app.get('*', function(req, res) {
  var path = req.url;
  var router = Router.create({
    routes: routes,
    location: path,
    onAbort: function (redirect) {
      cb(redirect);
    },
    onError: function (err) {
      console.log('Routing Error');
      console.log(err);
    }
  });

  router.run(function(Handler, state) {
    if (state.routes[0].name === "not-found") {
      res.status(404);
    }
    res.send("<!doctype html>" + React.renderToStaticMarkup(<Handler />));
  });
});

app.listen(process.env.PORT || 5000, function() {
  console.log("React router server listening on port 5000");
});
