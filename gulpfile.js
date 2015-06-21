var gulp = require('gulp'),
	vars = require('./index');

gulp.task('css',function () {
	gulp.src('input/css')
		.pipe(vars())
		.pipe(gulp.dest('output'));
});