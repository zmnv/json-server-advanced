const gulp = require('gulp');
const babel = require('gulp-babel');
const runSequence = require('run-sequence');
const del = require('del');
const nodemon = require('gulp-nodemon');

var nodemonOptions = {
    script: 'dist/app.js',
    ext: 'js',
    env: { 'NODE_ENV': 'development' },
    verbose: false,
    ignore: [],
    watch: ['dist/**/*']
};

gulp.task('start', function () {
    nodemon(nodemonOptions)
        .on('restart', function () {
            console.log('restarted!')
        });
});

gulp.task('babel', () =>
  gulp
    .src('src/**/*.js')
    .pipe(
      babel({
        presets: ['@babel/env'],
      }),
    )
    .pipe(gulp.dest('dist')),
);

gulp.task('jsons', () => gulp.src('src/**/*.json').pipe(gulp.dest('dist')));

gulp.task('clean:dist', function() {
  return del.sync(['dist/**/*']);
});

gulp.task('build', function(callback) {
  runSequence('clean:dist', ['babel', 'jsons'], callback);
});


gulp.task('default', function(callback) {
  runSequence('build', 'start', callback);
});
