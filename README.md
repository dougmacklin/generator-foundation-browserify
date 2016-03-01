# Foundation + Browserify Project Generator

Improve your workflow by harnessing the power of [Browserify](http://browserify.org/) with your [Foundation](http://foundation.zurb.com/) projects!

Head to the [Quick Start Guide](#quick-start) if you're ready to go. If you're not sure why you should be using this generator, or aren't familiar with some of the tools it offers, check out the [Generator Overview Wiki](https://github.com/dougmacklin/generator-foundation-browserify/wiki/Generator-Overview).

## This Generator Comes With

* Foundation 6 / Foundation 5
* Browserify dependency bundling
* Gulp task management
* Sass compiling
  * LibSass
  * Compass (option for Foundation 5)
* BrowserSync server with live reloading
* Babel for ECMAScript 6, 2015 preset (option)
* Autoprefixer for CSS Vendor Prefixes (option)
* Bourbon Sass Mixin Library (option)
* Motion UI Sass Library (option for Foundation 6)
* Source Maps (option)
* Font Awesome iconic font (option)
* Jade Template Engine (option)

## <a name="quick-start"></a>Quick Start Guide

#### Installation

If Yeoman isn't already installed:

```
npm install -g yo
```

Install the generator from [npm](https://www.npmjs.com/package/generator-foundation-browserify):

```
npm install -g generator-foundation-browserify
```

Already installed? Update to the latest version of the generator by running `yo` and selecting `Update your generators`

#### Generate a Project

Navigate to your project folder and initiate the generator:

```
yo foundation-browserify
```

Answer the configuration prompts and allow the installation to complete.

#### Workflow

Within your project folder, run `gulp` to start the server and watch for changes:

```
gulp
```

Include the `--prod` flag to export production-ready minified files (note: increases gulp task time, leave off for dev purposes):

```
gulp --prod
```

Edit the html/jade, scss and js files in the `src` directory

Gulp will serve finalized versions to the `build` directory

## License

MIT
