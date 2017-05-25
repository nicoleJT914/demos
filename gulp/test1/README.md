gulp:
node应用，打造前端工作流
简单，速度快，插件多

note：
- jshint
忽略分号
项目根目录添加.jshintrc文件，并设置
```
{
  "asi": true
}

- gulp-gutil
```
gulp.task('js', function() {
  gulp.src('./src/js/**/*.js')
      .pipe(concat('merge.js'))
      .pipe(uglify())
      .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
      .pipe(gulp.dest('./dist/js/'))
})
```
将uglify的错误输出到控制台
