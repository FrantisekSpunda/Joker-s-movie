const gulp = require('gulp');
const imageMin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const nunjucksRender = require('gulp-nunjucks-render');

// Copy All PDF files
gulp.task('copyPdf', async () => {
    gulp.src('src/*.pdf')
        .pipe(gulp.dest('dist'));
});

// Copy All mp4 files
gulp.task('copyMp4', async () => {
    gulp.src('src/*.mp4')
        .pipe(gulp.dest('dist'));
});

// Optimaze Images
gulp.task('imageMin', async () => {
    gulp.src('src/assets/images/*')
        .pipe(imageMin())
        .pipe(gulp.dest('dist/images'));
});

// Minify JS
// gulp.task('minify', async () => {
//     gulp.src('src/assets/js/*.js')
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/js'));
// });

// Compile Sass
gulp.task('sass', async () => {
    gulp.src('src/assets/sass/*')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});


// Uglify Scripts
gulp.task('scripts', async () => {
    gulp.src('src/assets/js/*.js')
        .pipe(concat('index.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});


// Nunjucks setup
gulp.task('nunjucks', async () => {
    gulp.src('src/pages/**/*.html')
        .pipe(nunjucksRender({
            path: ['src/templates']
        }))
        .pipe(gulp.dest('dist'));
});

// All in one task
gulp.task('default', gulp.series('sass', 'imageMin', 'scripts', 'copyPdf', 'copyMp4', 'nunjucks'));

// Gulp watch
gulp.task('watch', () => {
    gulp.watch('src/assets/js/*.js', gulp.series('scripts'));
    gulp.watch('src/assets/images/*', gulp.series('imageMin'));
    gulp.watch('src/assets/sass/**/*.scss', gulp.series('sass'));
    gulp.watch('src/*.pdf', gulp.series('copyPdf'));
    gulp.watch('src/*.mp4', gulp.series('copyMp4'));
    gulp.watch('src/**/*.html', gulp.series('nunjucks'));
});