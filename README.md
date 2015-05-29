# Yeoman Foundation Generator

[Yeoman](http://yeoman.io) generator for [Zurb Foundation](http://foundation.zurb.com/) with:

* Sass compiling (LibSass / Compass options)
* Jade templating engine (option)
* BrowserSync server with Live Reloading
* Font Awesome (option)
* Gulp automation
* Browserify with Watchify and Browserify Shim

## Getting Started

If Yeoman isn't already installed:
```
npm install -g yo
```

Install the generator from [npm](https://www.npmjs.com/package/generator-foundation-gulp-browserify):
```
npm install -g generator-foundation-gulp-browserify
```

Navigate to your target directory and initiate the generator:
```
yo foundation-gulp-browserify
```

Run `gulp` to start the server and watch for changes:
```
gulp
```

Include the `--prod` flag to export production-ready minified files (note: increases gulp task time, leave off for dev purposes):
```
gulp --prod
```

## Editing

Edit html/jade, scss and js files in the `src` directory

Gulp will serve finalized versions to the `build` directory

## License

MIT
