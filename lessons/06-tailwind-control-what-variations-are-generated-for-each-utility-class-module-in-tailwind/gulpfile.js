const gulp = require("gulp");
const postcss = require("gulp-postcss");
const tailwindcss = require("tailwindcss");
const browserSync = require("browser-sync").create();

const PATHS = {
  css: "./src/styles.css",
  config: "./tailwind.js",
  dist: "./"
};

gulp.task("css", () => {
  return gulp
    .src(PATHS.css)
    .pipe(postcss([tailwindcss(PATHS.config), require("autoprefixer")]))
    .pipe(gulp.dest(PATHS.dist));
});

gulp.task("serve", ["css"], function() {
  browserSync.init({
    server: "./",
    notify: false
  });
  gulp.watch([PATHS.css, PATHS.config], ["css"]);
  gulp.watch(PATHS.dist + "*.html").on("change", browserSync.reload);
});

gulp.task("default", ["serve"]);
