var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');


gulp.task('styles', function() {
    gulp.src(['assets/sass/screen.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(gulp.dest('assets/css'))
})


gulp.task('default', function() {
    gulp.watch('assets/sass/**',['styles']);
})