'use strict';

var gulp = require('gulp');
var jscs = require('gulp-jscs');
var hint = require('gulp-jshint');

gulp.task('jscs', function() {
	return gulp.src('./src/**/*.js')
		.pipe(jscs());
});

gulp.task('jshint', ['jscs'], function() {
	return gulp.src('./src/**/*.js')
		.pipe(hint('.jshintrc'))
		.pipe(hint.reporter('jshint-stylish'));
});

gulp.task('default', ['jshint']);
