const gulp = require("gulp");
const gulpSass = require("gulp-sass");

gulp.task("compileSassToCSS", () => {
  return gulp
    .src("./App/scss/styles.scss")
    .pipe(gulpSass())
    .pipe(gulp.dest("./App/css"));
});

gulp.task(
  "watch",
  gulp.series("compileSassToCSS", () => {
    gulp.watch("./App/scss/*.scss", gulp.series("compileSassToCSS"));
  })
);
