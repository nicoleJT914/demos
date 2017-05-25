var gulp = require('gulp'),
    cssnano = require('gulp-cssnano'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename"),
    clean = require('gulp-clean'),
    jshint = require('gulp-jshint'),
    imagemin = require('gulp-imagemin'),
    gutil = require('gulp-util');



gulp.task('css', function() {
  gulp.src('./src/css/*.css')
      .pipe(concat('merge.css'))
      .pipe(cssnano())
      .pipe(gulp.dest('./dist/css/'))
})
gulp.task('js', function() {
  gulp.src('./src/js/**/*.js')
      /*.pipe(jshint())
      .pipe(jshint.reporter('default'))*/
      .pipe(concat('merge.js'))
      .pipe(uglify())
      .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
      .pipe(gulp.dest('./dist/js/'))
})
gulp.task('img', function() {
  gulp.src('./src/img/*')
      .pipe(imagemin())
      .pipe(gulp.dest('./dist/img'))
})
gulp.task('clean', function() {
  gulp.src('./dist/*',{read: false})
      .pipe(clean())
})

gulp.task('build', ['css', 'js', 'img'])

