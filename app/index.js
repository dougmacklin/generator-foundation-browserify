'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function() {
    this.pkg = require('../package.json');
  },

  prompting: function() {
    var done = this.async();

    // Have Yeoman greet the user
    this.log(yosay(
      'Welcome to the ' + chalk.red('Foundation Browserify') + ' generator!'
    ));

    var prompts = [{
      name: 'appName',
      message: 'What is your project name?',
      default: 'app-name'
    },
    {
      type: 'list',
      name: 'foundationVersion',
      message: 'Which version of Foundation would you like to use?',
      choices: [
        'Foundation 6',
        'Foundation 5'
      ]
    },
    {
      when: function(response) {
        return (response.foundationVersion === 'Foundation 6');
      },
      type: 'checkbox',
      name: 'options',
      message: 'What would you like to include?',
      choices: [
        {
          name: 'Flexbox-powered grid',
          checked: true
        },
        {
          name: 'Babel for ECMAScript 6',
          checked: true
        },
        {
          name: 'Autoprefixer',
          checked: true
        },
        {
          name: 'Motion UI Sass Library',
          checked: true
        },
        {
          name: 'Bourbon Sass Mixin Library'
        },
        {
          name: 'Font Awesome Icons'
        },
        {
          name: 'Jade Templating'
        }
      ]
    },
    {
      when: function(response) {
        return (response.foundationVersion === 'Foundation 5');
      },
      type: 'list',
      name: 'scssCompiler',
      message: 'Which Sass compiler library would you like to use?',
      choices: [
        'LibSass',
        'Compass'
      ]
    },
    {
      when: function(response) {
        return (response.foundationVersion === 'Foundation 5');
      },
      type: 'checkbox',
      name: 'options',
      message: 'What would you like to include?',
      choices: [
        {
          name: 'Babel for ECMAScript 6',
          checked: true
        },
        {
          name: 'Autoprefixer',
          checked: true
        },
        {
          name: 'Bourbon Sass Mixin Library'
        },
        {
          name: 'Font Awesome Icons'
        },
        {
          name: 'Jade Templating'
        }
      ]
    }
    ];

    this.prompt(prompts, function(props) {
      this.props = props;

      if ( (props.options).indexOf('Babel for ECMAScript 6') !== -1 ) this.props.babel = true;
      if ( (props.options).indexOf('Autoprefixer') !== -1 ) this.props.autoprefixer = true;
      if ( (props.options).indexOf('Flexbox-powered grid') !== -1 ) this.props.flexbox = true;
      if ( (props.options).indexOf('Motion UI Sass Library') !== -1 ) this.props.motionUI = true;
      if ( (props.options).indexOf('Bourbon Sass Mixin Library') !== -1 ) this.props.bourbon = true;
      if ( (props.options).indexOf('Jade Templating') !== -1 ) this.props.jade = true;
      if ( (props.options).indexOf('Font Awesome Icons') !== -1 ) this.props.fontAwesome = true;
      if ( props.scssCompiler === 'Compass' ) this.props.compass = true;

      done();
    }.bind(this));
  },

  writing: function() {
    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
    this.copy('_gulpfile.js', 'gulpfile.js');
    this.copy('_README.md', 'README.md');
    this.copy('_.gitignore', '.gitignore');

    // html / jade templates
    if (this.props.jade)
      this.copy('_index.jade', 'src/templates/index.jade');
    else
      this.copy('_index.html', 'src/templates/index.html');

    // if using compass
    if (this.props.compass)
      this.copy('_config.rb', 'config.rb');

    // sass files for either foundation 6 or 5
    if (this.props.foundationVersion === 'Foundation 6') {
      this.copy('_settings-foundation-6.scss', 'src/scss/_settings.scss');
      this.copy('_app-foundation-6.scss', 'src/scss/app.scss');
    }
    else {
      this.copy('_settings-foundation-5.scss', 'src/scss/_settings.scss');
      this.copy('_app-foundation-5.scss', 'src/scss/app.scss');
    }

    this.copy('_main.js', 'src/js/main.js');
  },

  install: function() {
    this.installDependencies();
  }
});