var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var mqpacker = require('css-mqpacker');
var csswring = require('csswring');
var less= require('gulp-less');
var path= require('path');
var htmlmin = require('gulp-htmlmin'); //html压缩
var imagemin = require('gulp-imagemin');//图片压缩
var pngquant = require('imagemin-pngquant'); //png图片压缩插件
var minifycss = require('gulp-minify-css');//css压缩
var jshint = require('gulp-jshint');//js检测
var uglify = require('gulp-uglify');//js压缩
var concat = require('gulp-concat');//文件合并
var rename = require('gulp-rename');//文件更名
var notify = require('gulp-notify');//提示信息
// 编译less
gulp.task('less', function () {
    var processors = [
        autoprefixer({browsers: ['last 2 version']}),
        mqpacker,
        csswring
    ];
    return gulp.src('./src/less/main.less')
        .pipe(less())
        .pipe(postcss(processors))
        .pipe(gulp.dest('./src/css/'));
    
});
// 压缩html
gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dest'))
    .pipe(notify({ message: 'html task ok' }));
 
});
 
gulp.task('img', function () {
    return gulp.src('src/image/**/**')
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()] //使用pngquant来压缩png图片
        }))
        .pipe(gulp.dest('./dest/image/'));
});
//检查js
gulp.task('lint', function() {
  return gulp.src('src/js/index.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(notify({ message: 'lint task ok' }));
});
// 合并、压缩js文件
gulp.task('js', function() {
  return gulp.src(['src/js/jquery.min.js','src/js/idangerous.swiper.min.js','src/js/index.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dest/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dest/js'))
    .pipe(notify({ message: 'js task ok' }));
});
 // 合并、压缩、重命名css
gulp.task('css', function() {
  return gulp.src(['src/css/idangerous.swiper.css','src/css/reset.css','src/css/main.css'])
    
    .pipe(concat('all.css'))
    .pipe(gulp.dest('dest/css'))
    .pipe(rename({ suffix: '.min' })) 
    .pipe(minifycss())
    .pipe(gulp.dest('dest/css'))  
    .pipe(notify({ message: 'css task ok' }));
});
// 默认任务
gulp.task('default', function(){
    gulp.run('less');
  gulp.run( 'img', 'lint','js','css','html');
 });