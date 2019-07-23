const gulp = require("gulp");
const gulpSass = require("gulp-sass");
const gulpUseref = require("gulp-useref"); // Concatenate Files
const gulpUglify = require("gulp-uglify"); // Minify JS
const gulpCssnano = require("gulp-cssnano"); // Minify CSS
const gulpIf = require("gulp-if");

// The Compile Sass to CSS task
gulp.task("compileSassToCSS", () => {
  return gulp
    .src("./App/scss/styles.scss")
    .pipe(gulpSass())
    .pipe(gulp.dest("./App/css"));
});

// Concatenate and Optimize
gulp.task("concatAndOptimize", () => {
  return gulp
    .src("./App/index.html")
    .pipe(gulpUseref())
    .pipe(gulpIf("*.js", gulpUglify()))
    .pipe(gulpIf("*.css", gulpCssnano()))
    .pipe(gulp.dest("./dist"));
});

// Watch Task
gulp.task(
  "watch",
  gulp.series("compileSassToCSS", () => {
    gulp.watch("./App/scss/*.scss", gulp.series("compileSassToCSS"));
  })
);
