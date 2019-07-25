const gulp = require("gulp");
const gulpBabel = require("gulp-babel");

const gulpSass = require("gulp-sass");

const gulpUseref = require("gulp-useref"); // concatenating the files
const gulpUglify = require("gulp-uglify"); // minifing the JS files
const cssnano = require("cssnano"); // minifing the CSS files
const autoprefixer = require("autoprefixer"); // auto CSS prefixes
const gulpPostcss = require("gulp-postcss");
const gulpIf = require("gulp-if");

const gulpImagemin = require("gulp-imagemin"); // minifing the images

const del = require("del");

// The files path
const files = {
  scssPath: {
    src: "./App/scss/*.scss",
    dest: "./App/css"
  },
  indexPath: "./App/index.html",
  distPath: "./dist",
  imgPath: {
    src: "./App/img/*.+(png|jpeg|jpg|svg|gif)",
    dest: "./dist/img"
  },
  fontPath: {
    src: "./App/font/*",
    dest: "./dist/font"
  }
};

// Compiling the Sass to the CSS
function compileSassToCSS() {
  return gulp
    .src(files.scssPath.src)
    .pipe(gulpSass())
    .pipe(gulp.dest(files.scssPath.dest));
}

// Concatenating and Optimizing the CSS and JS files
function concatAndOpt() {
  const cssPlugin = [autoprefixer({ browsers: ["last 2 version"] }), cssnano()];
  return gulp
    .src(files.indexPath)
    .pipe(gulpUseref())
    .pipe(gulpIf("*.js", gulpBabel()))
    .pipe(gulpIf("*.js", gulpUglify()))
    .pipe(gulpIf("*.css", gulpPostcss(cssPlugin)))
    .pipe(gulp.dest(files.distPath));
}

// Optimizing the images
function imgOpt() {
  return gulp
    .src(files.imgPath.src)
    .pipe(gulpImagemin())
    .pipe(gulp.dest(files.imgPath.dest));
}

// Just send font from App to dist
function fonts() {
  return gulp.src(files.fontPath.src).pipe(gulp.dest(files.fontPath.dest));
}

// Cleaning
function clean() {
  return del([files.distPath]);
}

// Watch
function watchFiles() {
  gulp.watch(files.scssPath.src, compileSassToCSS);
}

// Gulp tasks
const SASS_TO_CSS = gulp.series(compileSassToCSS);
const CONCAT_OPT = gulp.series(concatAndOpt);
const IMG_OPT = gulp.series(imgOpt);
const FONTS = gulp.series(fonts);
const CLEAN = gulp.series(clean);
const BUILD = gulp.series(
  clean,
  compileSassToCSS,
  concatAndOpt,
  gulp.parallel(imgOpt, fonts)
);
const WATCH = gulp.series(compileSassToCSS, watchFiles);

exports.sass = SASS_TO_CSS;
exports.concatAndOpt = CONCAT_OPT;
exports.imgOpt = IMG_OPT;
exports.fonts = FONTS;
exports.clean = CLEAN;
exports.build = BUILD;
exports.default = BUILD;
exports.watch = WATCH;
