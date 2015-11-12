require('babel-core/register')

var gulp = require('gulp'),
	mocha = require('gulp-mocha');

gulp.task('spec', function() {
	gulp.src('./exporter/converters/__spec/**/*_spec.js')
		.pipe(mocha({ reporter: 'spec' }));
})