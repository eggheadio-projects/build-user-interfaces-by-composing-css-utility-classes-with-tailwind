const gulp = require("gulp");
const postcss = require("gulp-postcss");
const tailwindcss = require("tailwindcss");

const PATHS = {
  css: "./src/styles.css",
  confing: "./tailwind.js",
  dist: "./"
};

gulp.task("css", () => {
  return gulp
    .src(PATHS.css)
    .pipe(postcss([tailwindcss(PATHS.config), require("autoprefixer")]))
    .pipe(gulp.dest(PATHS.dist));
});

/* not used in this lesson - but leaving here as it is pretty handy */
// gulp.task("default", ["css"], () => {
//   gulp.watch(PATHS.css, ["css"]);
// });
