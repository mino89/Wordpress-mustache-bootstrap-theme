var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync');
var minifyjs = require('gulp-js-minify');
var gulpImports = require('gulp-imports');
var uncss = require('gulp-uncss');
var googleWebFonts = require('gulp-google-webfonts');
var uglify = require('gulp-uglify');


module.exports = gulp;
var options = {};
// task for building css
gulp.task('styles',function(){
    return gulp.src('src/scss/**/styles.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/css/'))
        .on('finish', browserSync.reload);

})

// task for clear unused css
gulp.task('uncss', function () {
    return gulp.src('./build/css/styles.css')
        .pipe(uncss({html: ['http://localhost/']}))
        .pipe(gulp.dest('./build/css/'));
});

// task for building js
gulp.task('scripts', function () {
    return gulp.src('src/js/*.js')
        .pipe(gulpImports())
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'))
        .on('finish', browserSync.reload);
})


gulp.task('default', function () {
    browserSync.init({
        proxy: "localhost:80",
    });
    gulp.watch('./**/*.php', gulp.series(browserSync.reload));
    gulp.watch('./src/js/*.*', gulp.series('scripts'));
    gulp.watch('./src/scss/*.*', gulp.series('styles'));
})

gulp.task('fonts', function () {
    return gulp.src('./src/fonts.list')
        .pipe(googleWebFonts(options))
        .pipe(gulp.dest('./build/css/fonts'));
});

gulp.task('build', gulp.series('scripts', 'styles', 'fonts'))

gulp.task('uncss', gulp.series('uncss'))