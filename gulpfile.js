/**
 * @file
 * Flex Your Front-end Muscles Gulp File.
 */

'use strict';

// Modules.
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var gulp = require('gulp');
var reload = browserSync.reload;
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

// Gulp static server / browser-sync task.
gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: "./"
  });
  gulp.watch("./scss/*.scss", ['sass']).on('change', browserSync.reload);
  gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
  return gulp.src("./scss/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
});

// Default Gulp task.
gulp.task('default', ['serve']);
