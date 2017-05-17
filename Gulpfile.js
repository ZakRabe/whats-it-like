var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('src/sass/App.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/'));
});

gulp.task('default',function() {
    gulp.watch('src/sass/**/*.scss',['styles']);
});