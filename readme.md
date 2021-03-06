# [React Isomorphic Boilerplate](https://github.com/ralphholzmann/iso-react-broccoli-boilerplate)

A boilerplate for a React app that renders on the server and automatically
rehydrates on the client. Includes title and meta description support for SEO.

## Getting started
```sh
npm install
npm install -g grunt
grunt
```

#### Title and Meta support
To get your app to render dynamic title and meta tags for SEO, set the `title`
and `meta` static properties on your [route handler](https://github.com/ralphholzmann/iso-react-broccoli-boilerplate/blob/master/src/app/handlers/index.js#L6-L11).

```javascript
var Index = React.createClass({
  statics: {
    title: "This will be the page title",
    meta: {
      description: "This will be the meta description"
    }
  }

  /* … */

});
```

#### Server vs client rendering
You can [fine tune](https://github.com/ralphholzmann/iso-react-broccoli-boilerplate/blob/master/src/app/handlers/index.js#L16) what renders on the server and the client by leveraging
browserify’s `process.browser` flag. 

![Demo](http://i.ralph.io/sb479b34.png)

## Todo
* Make the nodemon server only restart after a Broccoli build completes
* Data layer
* Testing boilerplate

## Built with these awesome projects
* [React](https://facebook.github.io/react/)
* [React Router](https://github.com/rackt/react-router)
* [Broccoli](https://github.com/broccolijs/broccoli)
* [Babel.js](https://babeljs.io/)
* [Browserify](http://browserify.org/)
* [Express](http://expressjs.com/)
* [Grunt](http://gruntjs.com/)
* [Nodemon](http://nodemon.io/)

## License
MIT
