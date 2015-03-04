gulp       = require 'gulp'
source     = require 'vinyl-source-stream'
streamify  = require 'gulp-streamify'
uglify     = require 'gulp-uglify'
browserify = require 'browserify'
reactify   = require 'reactify'

gulp.task 'default', ['build', 'watch']

gulp.task 'build', ->
  b = browserify()
  b.transform(reactify)
  b.add('./src/js/app.js')
  b.bundle()
  .pipe(source('bundle.js'))
  .pipe(streamify(uglify()))
  .pipe(gulp.dest('./public/scripts/'))

gulp.task 'watch', ->
  gulp.watch ['src/js/**/*.js', 'src/js/**/*.jsx'], ['build']
