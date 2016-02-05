# Foundation + Browserify Project Generator

Improve your workflow by harnessing the power of [Browserify](http://browserify.org/) with your [Foundation](http://foundation.zurb.com/) projects!

Head to the [Quick Start Guide](#quick-start) if you're ready to go. If you're not sure why you should be using this generator, or aren't familiar with some of the tools it offers, check out the [Generator Overview](#overview) below.

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
* Font Awesome iconic font (option)
* Jade Template Engine (option)

## <a name="quick-start"></a>Quick Start Guide

### Installation

If Yeoman isn't already installed:

```
npm install -g yo
```

Install the generator from [npm](https://www.npmjs.com/package/generator-foundation-browserify):

```
npm install -g generator-foundation-browserify
```

Already installed? Update to the latest version of the generator by running `yo` and selecting `Update your generators`

### Generate a Project

Navigate to your project folder and initiate the generator:

```
yo foundation-browserify
```

Answer the configuration prompts and allow the installation to complete.

### Workflow

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

## <a name="overview"></a>Generator Overview

This generator will scaffold out a project folder to get you up and running with Foundation and Browserify, along with a number of other tools. Here's a brief overview of what each component does, starting with the generator itself:

### Yeoman Project Generator

The [Yeoman](http://yeoman.io/) scaffolding tool allows us to do the actual generation of the starter project, including all of the various subdirectories, dependencies, and files it contains. Prior to scaffolding out the project, it allows us to ask the user for input and use their answers to determine what to include in the project folder.

After running `yo foundation-browserify`, you will be asked a series of project configuration questions about the following libraries that will ultimately determine what goes into your starter project folder.

### Foundation Framework

The [Foundation](http://foundation.zurb.com/) framework is the most advanced responsive front-end framework in the world. This generator provides the option to scaffold out either a Foundation 6 or Foundation 5 project.

### Browserify

The main advantage this generator provides is the ability to use [Browserify](http://browserify.org/) dependency bundling. What problem does Browserify solve? Without Browserify, if you want to include an external plugin, you have to go to the plugin's site, download the latest version, add it to your project directory, and then include it with a `<script src="">` tag. This process is a hassle to set up, and if you want to update a plugin to a new version, you have to start all over again.

With Browserify, you can say goodbye to this hassle. For example, say that you want to include the [Moment.js](http://momentjs.com/) plugin. All you'd have to do is run:

```
npm install moment --save
```

And then inside `main.js`, import it like so:

```
var moment = require('moment');
```

And you're done. You're ready to start calling the `moment()` function like you normally would.

On top of that, the `moment.js` version is saved in your `package.json` folder underneath `dependencies`. If you want to update to a different version, simply adjust it here and run `npm update`.

### Gulp

[Gulp](http://gulpjs.com/) is a task manager that allows us to automate our workflow. The tasks specified in `gulpfile.js` handle everything from compiling Sass into CSS to bundling our javascript to automatically reloading the browser when a file has changed. Many of the more time consuming tasks only run when the `--prod` (for 'production') flag is specified (minifying files, applying CSS prefixes, etc.).

### Sass

Foundation is incredibly forward-thinking in how it uses [Sass](http://sass-lang.com/), the CSS language extension. Customize every Foundation component in the `_settings.scss` file and include only the modules you need / make your own in `app.scss`.

This generator uses [LibSass](http://sass-lang.com/libsass). Foundation 5 projects have the option to use [Compass](http://compass-style.org/) instead, however be aware that it is significantly slower than LibSass.

### BrowserSync Server with Live Reloading

[BrowserSync](https://www.browsersync.io/) allows us to refresh the browser automatically when files change, dramatically improving any web developer's workflow.

### Babel for ECMAScript 6, 2015 preset

[Babel](http://babeljs.io/) allows us to use the newest javascript syntax without worrying about backwards compatibility with older browsers.

*Only runs when the `--prod` flag is specified.*

### Autoprefixer

[Autoprefixer](https://css-tricks.com/autoprefixer/) automatically applies CSS vendor prefixes so you never have to worry about all the `-webkit-`, `-ms-transform-`, etc.

*Only runs when the `--prod` flag is specified.*

### Bourbon Sass Mixin Library

The [Bourbon](http://bourbon.io/) library includes a number of useful Sass mixins, saving you from reinventing the wheel.

### Motion UI Sass Library

Created by Zurb, the same company responsible for Foundation, [Motion UI](http://zurb.com/playground/motion-ui) allows you to create flexible CSS transitions and animations. Several of Foundation's own components use it, so be sure to include it if you plan on using one of them.

### Font Awesome iconic font

If you're in need of icons, chances are [Font Awesome](https://fortawesome.github.io/Font-Awesome/) has you covered.

### Jade Template Engine

The [Jade](http://jade-lang.com/) template engine is a common HTML template language for Node.js projects.

## License

MIT
