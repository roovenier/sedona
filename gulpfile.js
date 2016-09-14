var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var pug = require('gulp-pug');
var runSequence = require('run-sequence');
var stylus = require('gulp-stylus');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var del = require('del');
var svgSprite = require('gulp-svg-sprite');
var gulpif = require('gulp-if');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var statsLogger = require('webpack-stats-logger');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('serve', function() {
	browserSync.init({
		server: {
			baseDir: "./build"
		}
	});
});

gulp.task('clean', function() {
	return del(['blocks', 'build']);
});

gulp.task('pages', function() {
	return gulp.src(['src/**/*.pug', '!src/pages/layout.pug'], {base: './src/pages/'})
		.pipe(pug())
		.pipe(gulp.dest('build/'))
});

gulp.task('styles', function() {
	return gulp.src('src/styles/base.styl')
		.pipe(stylus({
			compress: true
		}))
		.pipe(autoprefixer())
		.pipe(rename('styles.css'))
		.pipe(gulp.dest('build/css'))
});

gulp.task('images', function() {
	return gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('build/images'))
});

var svgSpriteConfig = {
	mode: {
		css: {
			dest: '.',
			bust: false,
			sprite: '../icons/icons.svg',
			layout: 'horizontal',
			prefix: '$',
			dimensions: true,
			render: {
				styl: {
					dest: 'svg-sprite.styl'
				}
			}
		}
	}
};

gulp.task('icons', function() {
	return gulp.src(['src/icons/*.svg'])
		.pipe(svgSprite(svgSpriteConfig))
		.pipe(gulpif(/\.styl$/, gulp.dest('src/styles')))
		.pipe(gulpif(/\.svg$/, gulp.dest('build/icons')))
});

function runWebpack(watch) {
	const webpackConfig = {
		watch,
		bail: false,
		profile: true,
		output: {
			filename: 'scripts.js',
			pathinfo: false
		},
		devtool: 'eval',
		debug: true,
		resolve: {
			modulesDirectories: [
				'node_modules'
			],
			extensions: ['.js', '']
		},
		module: {
			loaders: [
				{
					test: /\.js$/,
					loader: 'babel',
					exclude: /node_modules/,
					query: {
						presets: ['es2015']
					}
				}
			]
		},
		plugins: [
			new webpack.optimize.DedupePlugin(),
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false
				},
				output: {
					comments: false
				}
			})
		],
		externals: {
			jquery: "$"
		},
	};

	return gulp
		.src('src/**/*.js')
		.pipe(webpackStream(webpackConfig, null, statsLogger))
		.pipe(gulp.dest('build/js'));
}

gulp.task('scripts', function() {
	return runWebpack(false);
});

gulp.task('videos', function() {
	return gulp.src('src/blocks/video/*.{mp4,avi}', {base: './src/blocks/video'})
		.pipe(gulp.dest('build/videos'))
});

gulp.task('default', function(callback) {
	runSequence('clean', 'pages', 'images', 'icons', 'styles', 'scripts', 'videos', 'serve', callback);

	gulp.watch("src/**/*.pug", ['pages', browserSync.reload]);
	gulp.watch("src/**/*.styl", ['styles', browserSync.reload]);
	gulp.watch("src/images/*", ['images', browserSync.reload]);
	gulp.watch("src/icons/*", ['icons', browserSync.reload]);
	gulp.watch("src/**/*.js", ['scripts', browserSync.reload]);
});

gulp.task('build', function(callback) {
	runSequence('clean', 'pages', 'images', 'icons', 'styles', 'scripts', 'videos', callback);
});
