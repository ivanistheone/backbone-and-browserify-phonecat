var gulp = require('gulp');
var livereload = require('gulp-livereload');
var source = require('vinyl-source-stream');  // needed for browserify
var browserify = require('browserify');

// helper functions
var handleErrors = require('./helpers/handleErrors');
var templateHelper = require('./helpers/template_helper');
 
gulp.task('browserify', function() {
  return browserify('./src/init.js')
    .bundle({debug: true})
    .on('error', handleErrors)
    //pass desired output filename to vinyl-source-stream
    .pipe(source('bundle.js'))
    //pipe stream to public dir
    .pipe(gulp.dest('./public/javascripts/'))
    .pipe(livereload());
});

gulp.task('mktemplates', function() {
  templateHelper.createJstSync('src/templates');
});

gulp.task('watch', function(){
  gulp.watch('src/**', ['browserify']);
  livereload();
});

gulp.task('build', ['mktemplates', 'browserify' ]);

gulp.task('default', ['build', 'watch' ]);



