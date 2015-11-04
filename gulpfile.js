require('babel/register');

var gulp = require('gulp'),
	babel = require('gulp-babel'),
	sass = require('gulp-sass'),
	watch = require('gulp-watch'),
	mocha = require('gulp-mocha');

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

gulp.task('spec', function() {
	gulp.src('./wp_migration/converters/__spec/field_spec.js')
		.pipe(mocha({ reporter: 'spec' }));
});