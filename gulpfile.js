const gulp = require("gulp");
const gulpSass = require("gulp-sass");
const gulpUseref = require("gulp-useref"); // the Files concatenate
const gulpUglify = require("gulp-uglify"); // the JS files minify
const gulpCssnano = require("gulp-cssnano"); // the CSS files minify
const gulpIf = require("gulp-if");
const gulpImagemin = require("gulp-imagemin"); // the images minify

// The Compile Sass to CSS task
gulp.task("compileSassToCSS", () => {
  return gulp
    .src("./App/scss/styles.scss")
    .pipe(gulpSass())
    .pipe(gulp.dest("./App/css"));
});

// Concatenate and Optimize the CSS and JS files
gulp.task("concatAndOpt", () => {
  return gulp
    .src("./App/index.html")
    .pipe(gulpUseref())
    .pipe(gulpIf("*.js", gulpUglify()))
    .pipe(gulpIf("*.css", gulpCssnano()))
    .pipe(gulp.dest("./dist"));
});

// Optimize the images
gulp.task("imageOpt", () => {
  return gulp
    .src("./App/img/*.+(png|jpeg|jpg|svg|gif)")
    .pipe(gulpImagemin())
    .pipe(gulp.dest("./dist/img"));
});

// Watch Task
gulp.task(
  "watch",
  gulp.series("compileSassToCSS", () => {
    gulp.watch("./App/scss/*.scss", gulp.series("compileSassToCSS"));
  })
);
