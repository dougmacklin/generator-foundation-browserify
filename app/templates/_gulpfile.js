var browserSync  = require('browser-sync');
var watchify     = require('watchify');
var browserify   = require('browserify');
var source       = require('vinyl-source-stream');
var buffer       = require('vinyl-buffer');
var gulp         = require('gulp');
var gutil        = require('gulp-util');
var gulpSequence = require('gulp-sequence');
<% if (props.pug) { %>var processhtml  = require('gulp-pug');<% } else { %>var processhtml  = require('gulp-minify-html');<% } %>
<% if (!props.compass) { %>var sass         = require('gulp-sass');<% } else { %>var compass      = require('gulp-compass');<% } %>
<% if (props.autoprefixer) { %>var autoprefixer = require('gulp-autoprefixer');<% } %>
var watch        = require('gulp-watch');
var cleanCSS    = require('gulp-clean-css');
var uglify       = require('gulp-uglify');
var streamify    = require('gulp-streamify');
var sourcemaps   = require('gulp-sourcemaps');
var concat       = require('gulp-concat');
<% if (props.babel) { %>var babel        = require('gulp-babel');<% } %>
var prod         = gutil.env.prod;

var onError = function(err) {
  console.log(err.message);
  this.emit('end');
};

// bundling js with browserify and watchify
var b = watchify(browserify('./src/js/main', {
  cache: {},
  packageCache: {},
  fullPaths: true
}));

gulp.task('js', bundle);
b.on('update', bundle);
b.on('log', gutil.log);

function bundle() {
  return b.bundle()
    .on('error', onError)
    .pipe(source('bundle.js'))
    .pipe(buffer())
    <% if (props.sourcemaps) { %>.pipe(sourcemaps.init())
    <% } %><% if (props.babel) { %>.pipe(prod ? babel({
      presets: ['es2015']
    }) : gutil.noop())
    <% } %>.pipe(concat('bundle.js'))
    .pipe(!prod ? sourcemaps.write('.') : gutil.noop())
    .pipe(prod ? streamify(uglify()) : gutil.noop())
    .pipe(gulp.dest('./build/js'))
    .pipe(browserSync.stream());
}

// html
gulp.task('html', function() {
  return gulp.src('./src/templates/**/*')
    .pipe(processhtml())
    .pipe(gulp.dest('build'))
    .pipe(browserSync.stream());
});

// sass
<% if (!props.compass) { %>gulp.task('sass', function() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass({
      includePaths: [].concat(<% if (props.bourbon) { %>require('node-bourbon').includePaths, <% } %>['node_modules/foundation-sites/scss'<% if (props.motionUI) { %>, 'node_modules/motion-ui/src'<% } %>])
    }))
    .on('error', onError)
    .pipe(prod ? cleanCSS() : gutil.noop())
    <% if (props.autoprefixer) { %>.pipe(prod ? autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }) : gutil.noop())
    <% } %>.pipe(gulp.dest('./build/stylesheets'))
    .pipe(browserSync.stream());
});<% } else { %>gulp.task('sass', function() {
  gulp.src('./src/scss/**/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: 'build/stylesheets',
      sass: 'src/scss'
    }))
    .on('error', onError)
    .pipe(prod ? cleanCSS() : gutil.noop())
    <% if (props.autoprefixer) { %>.pipe(prod ? autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }) : gutil.noop())
    <% } %>.pipe(gulp.dest('./build/stylesheets'))
    .pipe(browserSync.stream());
});<% } %>

// browser sync server for live reload
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './build'
    }
  });

  gulp.watch('./src/templates/**/*', ['html']);
  gulp.watch('./src/scss/**/*.scss', ['sass']);
});

// use gulp-sequence to finish building html, sass and js before first page load
gulp.task('default', gulpSequence(['html', 'sass', 'js'], 'serve'));