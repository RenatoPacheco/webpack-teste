'use strict';

const path = require('path');
const gulp = require('gulp');
const watch = require('gulp-watch');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const notify = require("gulp-notify");
const message = require('gulp-message');
const print = require('gulp-print');

const resolvePath = (pathToResolve = '') => path.resolve(__dirname, pathToResolve);
const joinPath = (...pathToResolve) => path.join(__dirname, pathToResolve);
const isProduction = process.env.NODE_ENV === 'production';

gulp.task('copy', () => {
    gulp.src([
        './node_modules/bootstrap/dist/fonts/*',
        './node_modules/font-awesome/fonts/*'])
      .pipe(gulp.dest('./build/assets/fonts'))
});

gulp.task('less', () => {
    gulp.src([
        './src/less/views/**/*.less',
        './src/less/app.less'])
      .pipe(less())
      .pipe(isProduction ? cssmin() : print((filepath) => "Não mimificando em dev: " + filepath))
      .pipe(gulp.dest('./build/assets/css'));
});

gulp.task('default', [ 'copy', 'less' ]);