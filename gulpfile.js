var gulp = require('gulp');
var $    = require('gulp-load-plugins')();
var gulpSequence = require('gulp-sequence').use(gulp);
var panini = require('panini');
var browserSync = require('browser-sync').create();
var del = require('del');

var sassPaths = [
  'bower_components/normalize.scss/sass',
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

gulp.task('panini', function() {
  return gulp.src('pages/**/*{.html,.xml}')
    .pipe(panini({
      root: 'pages/',
      layouts: 'layouts/',
      partials: 'partials/',
      helpers: 'helpers/',
      data: 'data/'
    }))
    .pipe(gulp.dest('./build'));
});

// empty out the build folder
gulp.task('clean:build', function () {
  return del([
    'build/**/*'
  ]);
});

// copy any static assets into the build root
gulp.task('static', ['static:jquery', 'static:foundation', 'static:files']);


gulp.task('static:jquery', function () {
  return gulp.src('./bower_components/jquery/dist/jquery.js')
    .pipe(gulp.dest('./build/bower_components/jquery/dist'));
});
gulp.task('static:foundation', function () {
  return gulp.src('./bower_components/foundation-sites/dist/js/foundation.js')
    .pipe(gulp.dest('./build/bower_components/foundation-sites/dist/js'));
});
gulp.task('static:files', function () {
  return gulp.src('./static/**/*')
    .pipe(gulp.dest('./build'));
});

// refresh panini's helpers, templates
gulp.task('refresh', function () {
  panini.refresh();
  // gulp.start('taskname');
});

gulp.task('refreshBrowser', function () {
  setTimeout(function() {
    browserSync.reload();
  }, 500); // wait for the filesystem to write
});


gulp.task('sass', function() {
  return gulp.src('static/scss/embl-design-language-framework.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
    .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('static/css'));
});


gulp.task('browser-sync', function() {
  browserSync.init({
    // proxy: "yourlocal.dev"
    server: {
      baseDir: './build/'
    }
  },function(){
    // something you want to do
  });
});


// gulp.task('dev', ['panini', 'browser-sync'], function() {
//   var watcher = gulp.watch(['build/**/*'], function(event) {
//     console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
//     setTimeout(function() {
//       browserSync.reload();
//     }, 500); // wait for the filesystem to write
//   });
// });

gulp.task('default', ['static', 'sass', 'panini', 'browser-sync'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);

  var watcher = gulp.watch(['./{layouts,partials,data,pages,static}/**/*'], function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    gulpSequence(['refresh', 'static'], 'panini', 'refreshBrowser')(function (err) {
      if (err) console.log(err)
    })
  });
});

gulp.task('clean', ['clean:build']); // purge ./build
gulp.task('init', ['clean:build', 'static']); // empty ./build and then make images, add static asssets
gulp.task('deploy', function() {
  gulpSequence('static', 'panini')(function (err) {
    if (err) console.log(err)
  })
}); // for travis
