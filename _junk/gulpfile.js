var gulp = require('gulp');
var sass = require('gulp-sass');
// var browserSync = require('browser-sync').create();
// var reload = browserSync.reload;

gulp.task('default', ['sass', 'serve']);

gulp.task('sass', function () {
    gulp.src('./app/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./app/css'));
        // .pipe(browserSync.stream());;

    console.log('sass gulp task...');
});

// gulp.task('sass:watch', function () {
//   gulp.watch('./cda/sass/**/*.scss', ['sass']);
// });

gulp.task('serve', function() {
  // browserSync.init({   proxy: "localhost:8888"     });
  gulp.watch('./app/sass/**/*.scss', ['sass']);
  // gulp.watch('./*').on("change", reload);
  // gulp.watch('./**/*').on("change", reload);

});
