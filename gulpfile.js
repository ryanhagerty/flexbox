/**
 * @file
 * Flex Your Front-end Muscles Gulp File.
 */

'use strict';

// Modules.
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var gulp = require('gulp');
var reload = browserSync.reload;
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

// Gulp static server / browser-sync task.
gulp.task('serve', ['sass'], function() {
  gulp.watch("./scss/**/_*.scss", ['sass']);
});

// Sass task.
gulp.task('sass', function() {
  gulp.src('./scss/**/*.{scss,sass}')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded',
      errLogToConsole: true
    }))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

// Default Gulp task.
gulp.task('default', ['serve']);
