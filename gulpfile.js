var gulp = require('gulp'),
	babel = require('gulp-babel'),
	sass = require('gulp-sass'),
	watch = require('gulp-watch');

gulp.task('script', function() {
	return gulp.src('./scripts/site.js')
		.pipe(babel())
		.pipe(gulp.dest('./public'));
});

gulp.task('style', function() {
	return gulp.src('./styles/site.scss')
		.pipe(sass())
		.pipe(gulp.dest('./public'));
});

gulp.task('dev', function() {
	gulp.watch('scripts/**/*', [ 'script' ]);
	gulp.watch('styles/**/*', [ 'style' ]);
});	