const gulp  = require('gulp');
const gutil = require('gulp-util');
const config = require('../config.json');
const eslint = require('gulp-eslint');

// lint js code
gulp.task('eslint', () => {

	// files
	const filePath = 'js/**/*.js';
	const src = config.paths.src;

	// run task
	const run = (path) => {
		return gulp.src(path)
			.pipe(eslint())
			.pipe(eslint.format());
	};

	// watch task
	if (gutil.env.dev) {
		gulp.watch(filePath, { cwd: src }, file => {
			gutil.log(file);
			run(file.path);
		});
	}

	return run([src + filePath,'!node_modules/**']);
});
