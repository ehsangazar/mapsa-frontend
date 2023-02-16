var gulp = require("gulp");
var sass = require("gulp-ruby-sass");
var browserSync = require("browser-sync");
var reload = browserSync.reload;

gulp.task("sass", () =>
  sass("app/scss/style.scss", { sourcemap: true })
    .on("error", sass.logError)
    // for inline sourcemaps
    .pipe(sourcemaps.write())
    // for file sourcemaps
    .pipe(
      sourcemaps.write("maps", {
        includeContent: false,
        sourceRoot: "source",
      })
    )
    .pipe(gulp.dest("result"))
);

// watch Sass files for changes, run the Sass preprocessor with the 'sass' task and reload
gulp.task(
  "serve",
  gulp.series("sass", function () {
    browserSync({
      server: {
        baseDir: "app",
      },
    });

    gulp.watch("scss/*.scss", gulp.series("sass"));
  })
);
