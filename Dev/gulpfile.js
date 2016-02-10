// Variables
var variables = {
  version: '1.1.0' // Added to the CSS/JS includes as querystring (e.g. ?v=1.0.0)
};

// Global packages
var gulp = require('gulp');
var livereload = require('gulp-livereload');

// Image & font packages
var iconfont = require('gulp-iconfont');
var rename = require('gulp-rename');
var consolidate = require("gulp-consolidate");

// Templating system
var nunjucksRender = require('gulp-nunjucks-render');

// Stylesheet packages
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var mqpacker = require('css-mqpacker');
var pxtorem = require('postcss-pxtorem');
var minifyCss = require('gulp-minify-css');

// Javascript packages
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// Image & font tasks
gulp.task('iconfont', function () {
  // Variables
  var iconFontName = 'cegeka';

  return gulp.src(['src/assets/icons/*.svg'])
    .pipe(iconfont({
      fontName: iconFontName,
      normalize: true,
      appendCodepoints: false,
      centerHorizontally: true,
      fontHeight: 100 // IMPORTANT
    }))
    .on('glyphs', function (glyphs) {
      var options = {
        glyphs: glyphs.map(function (glyph) {
          //process.stdout.write(JSON.stringify(glyph));
          //process.stdout.write('\n');
          // this line is needed because gulp-iconfont has changed the api from 2.0
          return {
            name: glyph.name,
            codePoint: glyph.unicode[0].charCodeAt(0).toString(16).toUpperCase()
          }
        }),
        fontName: iconFontName,
        filename: 'cegeka.scss',
        fontPath: '../fonts/icons/', // set path to font (from your CSS file if relative)
        cssClass: 'icon' // set class name in your CSS
      };

      gulp.src('src/scss/icons/_template.scss.nunj')
        .pipe(consolidate('nunjucks', options))
        .pipe(rename('_icons.scss'))
        .pipe(gulp.dest('src/scss/icons')); // set path to export your SCSS

      // Sample HTML
      gulp.src('src/pages/partials/component/list-icons.nunjucks')
        .pipe(consolidate('nunjucks', options))
        .pipe(rename('list-icons.html'))
        .pipe(gulp.dest('./src/pages/partials/component/')); // set path to export your sample HTML
    })
    .pipe(
      gulp.dest('./fonts/icons')
    );
});

// Templating tasks
gulp.task('templates', function () {
  nunjucksRender.nunjucks.configure(['src/pages/'], {watch: false});

  return gulp.src(['src/pages/*.html'])
    .pipe(consolidate('nunjucks', variables))
    //.pipe(nunjucksRender(variables))
    .pipe(gulp.dest('./'))
    .pipe(livereload());
});

// Stylesheet tasks
gulp.task('sass', function () {
  return gulp.src([
      './src/scss/**/*.scss',
    ])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
gulp.task('postcss', ['sass'], function () {
  var processors = [
    autoprefixer({
      browsers: ['IE 9', 'IE 10', 'IE 11', 'last 3 versions'],
      cascade: false
    }),
    mqpacker({
      sort: true
    }),
    pxtorem({
      rootValue: 16,
      unitPrecision: 5,
      propWhiteList: ['font', 'font-size', 'line-height', 'letter-spacing'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0
    })
  ];
  return gulp.src('./css/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./css'))
    .pipe(livereload());
});
gulp.task('concat-css', ['postcss'], function () {
  return gulp.src([
    './node_modules/jeet.css',
  ]).pipe(concat('vendor.css'))
    .pipe(gulp.dest('./css'));
});
gulp.task('css', ['postcss'], function () {
  return gulp.src('./css/*.css')
    .pipe(minifyCss({compatibility: 'ie9'}))
    .pipe(gulp.dest('./css'));
});

// Javascript tasks
gulp.task('lint-js', function () {
  return gulp.src('./src/js/custom/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
});
gulp.task('concat-js', ['lint-js'], function () {
  return gulp.src([
      './src/js/custom/cegeka.js',
      './src/js/custom/**/*.js'
    ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./js'))
    .pipe(livereload());
});
gulp.task('concat-vendor-js', function () {
  return gulp.src(['./src/js/vendor/**/*.js'])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./js'))
    .pipe(livereload());
});
gulp.task('js', ['concat-js', 'concat-vendor-js'], function () {
  return gulp.src('./js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./js'));
});

// Watch, development & production tasks
gulp.task('dev', ['iconfont', 'postcss', 'concat-js', 'concat-vendor-js', 'templates']);
gulp.task('default', ['iconfont', 'css', 'js', 'templates']);
gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('src/js/custom/**/*', ['concat-js']);
  gulp.watch('src/js/vendor/**/*', ['concat-vendor-js']);
  gulp.watch('src/scss/**/*', ['postcss']);
  gulp.watch('src/pages/**/*', ['templates']);
  gulp.watch('gulpfile.js', ['dev']);
});