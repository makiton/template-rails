gulp = require('gulp')
browserify = require('browserify')
concat = require('gulp-concat')

gulp.task('build:css', function() {
  gulp.src([
    'node_modules/bootstrap/dist/css/bootstrap.min.css'
  ])
  .pipe(concat('application.css'))
  .pipe(gulp.dest('public/assets/stylesheets/'))
})

gulp.task('build:js', function() {
  gulp.src([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js'
  ])
  .pipe(concat('application.js'))
  .pipe(gulp.dest('public/assets/javascripts/'))
})

gulp.task('build', ['build:css', 'build:js'])
gulp.task('default', ['build'])
