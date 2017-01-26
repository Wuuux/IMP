var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('scss/styleww.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'compact' }))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('css'))
  })

gulp.task('watch', function(){
  browserSync.init({
    server: {
        baseDir: "./"
    }
      });
      gulp.watch("scss/**/*.scss", function () {
          browserSync.notify("Compiling, please wait!");
          gulp.src('scss/style.scss')
              .pipe(sourcemaps.init())
              .pipe(sass({outputStyle: 'compact' }))
              .pipe(sourcemaps.write())
              .pipe(gulp.dest('css'))
              .pipe(browserSync.stream().on('end', function () {
                  browserSync.notify("Compiled");
              }));
      });
      gulp.watch("index.html", browserSync.reload);

  })

  gulp.task('jshint'
  , function() {
  return gulp.src('js/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
  })
