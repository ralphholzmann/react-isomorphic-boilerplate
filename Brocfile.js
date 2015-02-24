var esTranspiler = require('broccoli-babel-transpiler');
var pickFiles = require('broccoli-static-compiler');
var concat = require('broccoli-concat');
var mergeTrees = require('broccoli-merge-trees');
var filterES6Modules = require('broccoli-es6-module-filter');
var cjsWrap = require("broccoli-cjs-wrap");
var browserify = require('broccoli-browserify');

var serverTree = pickFiles("src", {
  srcDir: "",
  files: [
    'app/**/*.js',
    'server.js'
  ],
  destDir: '/'
});
serverTree = esTranspiler(serverTree);

var clientTree = pickFiles("src", {
  srcDir: "",
  files: [
    "app/**/*.js",
    "client.js"
  ],
  destDir: '/public'
});
clientTree = esTranspiler(clientTree);
clientTree = browserify(clientTree, {
  entries: ["./public/client.js"],
  outputFile: "./public/app.js"
});

var assetsTree = pickFiles("src/assets", {
  srcDir: "",
  files: ["*"],
  destDir: "public"
});

module.exports = mergeTrees([serverTree, clientTree, assetsTree]);
