const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const config = require('../config.json');

// Static server
gulp.task('server', () => {
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
		files : [
			// templates
			config.paths.src + '**/*.html',
			// images
			config.paths.src + 'img/**/*.{gif,jpg,png,svg}',
			// js
			config.paths.dest + 'js/scripts.js',
			// css
			config.paths.dest + 'css/style.css'
		]
    })
});
