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
const concatCss = require('gulp-concat-css');
const concat = require('gulp-concat');
const sequence = require('gulp-sequence');
const clean = require('gulp-clean');

const resolvePath = (pathToResolve = '') => path.resolve(__dirname, pathToResolve);
const joinPath = (...pathToResolve) => path.join(__dirname, pathToResolve);
const isProduction = process.env.NODE_ENV === 'production';
const dirBase = {
    less : resolvePath('src/less'),
    css : resolvePath('build/assets/css')
};

gulp.task('copy', () => {
    return gulp.src([
        './node_modules/bootstrap/dist/fonts/*',
        './node_modules/font-awesome/fonts/*'])
      .pipe(gulp.dest('./build/assets/fonts'))
});

gulp.task('css-clean', () => {
    return gulp.src([
        './build/assets/css/views/**/*.css',
        './build/assets/css/app.css'])
      .pipe(clean());
});

gulp.task('less', () => {
    return gulp.src([
        './src/less/views/**/*.less',
        './src/less/app.less'])
      .pipe(less())
      .pipe(isProduction ? cssmin() : print((filepath) => "Não mimificando em dev: " + filepath))
      .pipe(gulp.dest(function (file) {
        return file.base.replace(dirBase.less, dirBase.css);
      }));
});

gulp.task('css-concat', () => {
    return gulp.src([
        './node_modules/font-awesome/css/font-awesome.css',
        './node_modules/toastr/build/toastr.css',
        './node_modules/jquery-confirm/css/jquery-confirm.css',
        './node_modules/bootstrap-select/dist/css/bootstrap-select.css',
        './build/assets/css/app.css'])
      .pipe(concatCss("app.css"))
      .pipe(isProduction ? cssmin() : print((filepath) => "Não mimificando em dev: " + filepath))
      .pipe(gulp.dest('./build/assets/css/'))
});

gulp.task('css', sequence('css-clean', 'less', 'css-concat'));
gulp.task('default', sequence('copy', 'css'));