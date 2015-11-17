var Fannypack = require('fannypack')
var gulp      = require('gulp')
var $         = Fannypack.$

var templateCache = require('gulp-angular-templatecache')

Fannypack.Tasks['ngTemplates'] = function(config){
  if(!config.ngTemplates) return

  var paths = {
    src: $.Pather.join(config.root.src, config.ngTemplates.src, '/**/*.' + config.ngTemplates.extensions),
    dest: $.Pather.join(config.root.dest, config.ngTemplates.dest)
  }

  gulp.task('ngTemplates', function () {
    return gulp.src(paths.src)
      .pipe( templateCache(config.ngTemplates.options) )
      .pipe( gulp.dest(paths.dest) )
      .pipe( $.BrowserSync.reload({stream:true}) )
  })
};
