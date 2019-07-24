const gulp = require("gulp");

const gulpSass = require("gulp-sass");

const gulpUseref = require("gulp-useref"); // the Files concatenate
const gulpUglify = require("gulp-uglify"); // the JS files minify
const gulpCssnano = require("gulp-cssnano"); // the CSS files minify
const gulpIf = require("gulp-if");

const gulpImagemin = require("gulp-imagemin"); // the images minify
const gulpCache = require("gulp-cache");

const del = require("del");

const files = {
  scssPath: "./App/scss/*.scss",
  cssPath: "./App/css",
  indexPath: "./App/index.html",
  distPath: "./dist",
  impPath: {
    src: "./App/img/*.+(png|jpeg|jpg|svg|gif)",
    dist: "./dist/img"
  },
  fontPath: {
    src: "./App/font/*",
    dist: "./dist/font"
  }
};

// The Compile Sass to CSS task
function compileSassToCSS() {
  return gulp
    .src(files.scssPath)
    .pipe(gulpSass())
    .pipe(gulp.dest(files.cssPath));
}

// Concatenate and Optimize the CSS and JS files
function concatAndOpt() {
  return gulp
    .src(files.indexPath)
    .pipe(gulpUseref())
    .pipe(gulpIf("*.js", gulpUglify()))
    .pipe(gulpIf("*.css", gulpCssnano()))
    .pipe(gulp.dest(files.distPath));
}

// Optimize the images
function imgOpt() {
  return gulp
    .src(files.impPath.src)
    .pipe(gulpCache(gulpImagemin()))
    .pipe(gulp.dest(fils.img.dist));
}

// Send font from App to dist
function fonts() {
  return gulp.src(files.fontPath.src).pipe(gulp.dest(files.fontPath.dist));
}

// Cleaning
function clean() {
  return del([files.distPath]);
}

// Watch Task
function watchFiles() {
  gulp.watch(files.scssPath, compileSassToCSS);
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
