# Yeoman Foundation Generator

[Yeoman](http://yeoman.io) generator for [Zurb Foundation](http://foundation.zurb.com/) with:

* Foundation 6 (Foundation 5 option)
* Sass compiling (LibSass / Compass options)
* Browserify dependency bundling
* Gulp automation
* BrowserSync server with live reloading
* Babel for ECMAScript 6 ([2015 preset](http://babeljs.io/docs/plugins/preset-es2015/))
* Bourbon mixin library (option)
* Jade templating engine (option)
* Font Awesome (option)

## Getting Started

If Yeoman isn't already installed:
```
npm install -g yo
```

Install the generator from [npm](https://www.npmjs.com/package/generator-foundation-browserify):
```
npm install -g generator-foundation-browserify
```

Navigate to your target directory and initiate the generator:
```
yo foundation-browserify
```

Run `gulp` to start the server and watch for changes:
```
gulp
```

Include the `--prod` flag to export production-ready minified files with ES2015 polyfills (note: increases gulp task time, leave off for dev purposes):
```
gulp --prod
```

## Editing

Edit html/jade, scss and js files in the `src` directory

Gulp will serve finalized versions to the `build` directory

## License

MIT
