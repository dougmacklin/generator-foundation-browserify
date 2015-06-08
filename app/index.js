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
      'Welcome to the ' + chalk.red('Foundation') + ' generator!'
    ));

    var prompts = [{
      name: 'appName',
      message: 'What is your project name?',
      default: 'app-name'
    },
    {
      type: 'confirm',
      name: 'compass',
      message: 'Would you like to compile Scss with Compass (default: Scss with LibSass)?',
      default: false
    },
    {
      when: function(response) {
        return !response.compass;
      },
      type: 'confirm',
      name: 'bourbon',
      message: 'Would you like to include the Bourbon mixin library for Sass?',
      default: true
    },
    {
      type: 'confirm',
      name: 'jade',
      message: 'Do you want to use Jade templating?',
      default: false
    },
    {
      type: 'confirm',
      name: 'fontAwesome',
      message: 'Do you want to include Font Awesome icons?',
      default: true
    }];

    this.prompt(prompts, function(props) {
      this.props = props;

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

    // sass files
    if (this.props.compass)
      this.copy('_config.rb', 'config.rb');

    this.copy('_settings.scss', 'src/scss/_settings.scss');
    this.copy('_app.scss', 'src/scss/app.scss');

    this.copy('_main.js', 'src/js/main.js');
  },

  install: function() {
    this.installDependencies();
  }
});