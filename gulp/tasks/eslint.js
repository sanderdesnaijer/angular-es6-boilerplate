const gulp  = require('gulp');
const gutil = require('gulp-util');
const config = require('../config.json');
const eslint = require('gulp-eslint');

// lint js code
gulp.task('eslint', () => {

	// src
	const filePath = 'js/**/*.js';
	const src = config.paths.src;

	// run task
	const run = (e, path) => {
		return gulp.src([src + filePath,'!node_modules/**'])
			.pipe(eslint())
			.pipe(eslint.format());
	};

	// watch task
	if (gutil.env.dev) {
		gulp.watch(filePath, { cwd: src }, file => {
			gutil.log(file);
			run();
		});
	}

	return run();
});
