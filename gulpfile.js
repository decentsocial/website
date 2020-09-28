'use strict'

// Load plugins
const autoprefixer = require('gulp-autoprefixer')
const browsersync = require('browser-sync').create()
const cleanCSS = require('gulp-clean-css')
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const rename = require('gulp-rename')
const sass = require('gulp-sass')

function browserSync (done) {
  browsersync.init({
    server: {
      baseDir: './'
    },
    port: 3000
  })
  done()
}

function browserSyncReload (done) {
  browsersync.reload()
  done()
}

function css () {
  return gulp
    .src('./scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: './node_modules'
    }))
    .on('error', sass.logError)
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest('./css'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./css'))
    .pipe(browsersync.stream())
}

function watchFiles () {
  gulp.watch('./scss/**/*', css)
  gulp.watch('./**/*.html', browserSyncReload)
}

const build = gulp.series(css)
const watch = gulp.series(build, gulp.parallel(watchFiles, browserSync))

exports.css = css
exports.build = build
exports.watch = watch
exports.default = build
