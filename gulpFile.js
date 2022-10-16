import gulp from 'gulp';
const { src, dest, watch, series } = gulp;
import concat from "gulp-concat"
import clipboard from "gulp-clipboard"
import { deleteAsync } from "del"


gulp.task('test', function () {
    return src("./src/test/**/*.js")
        .pipe(concat('test.js'))
        .pipe(dest('./dist'))
        .pipe(clipboard())
})

gulp.task('project', function () {
    return src("./src/project/**/*.js")
        .pipe(concat('project.js'))
        .pipe(dest('./dist'))
        .pipe(clipboard())
})

gulp.task('cleanTest', function () {
    return deleteAsync(['./dist/test.js']);
});

gulp.task('cleanProject', function () {
    return deleteAsync(['./dist/project.js']);
});



gulp.task('run', gulp.series('test', 'annotator'));

gulp.task('watch', function () {
    gulp.watch('./src/annotator/**/*.js', gulp.series('cleanProject', 'project'));
    gulp.watch('./src/test/**/*.js', gulp.series('cleanTest', 'test'));
})

gulp.task('default', gulp.series('run', 'watch'))
