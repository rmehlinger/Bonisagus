#
# Ref:
# * https://gist.github.com/vojd/a2d277bc161a2674aeaa
# * https://gist.github.com/Sigmus/9253068
#

source = require 'vinyl-source-stream'
gulp = require 'gulp'
gutil = require 'gulp-util'
browserify = require 'browserify'
watchify = require 'watchify'
notify = require 'gulp-notify'
coffeeify = require 'coffeeify'
uglify = require 'gulp-uglify'
buffer = require 'vinyl-buffer'
coffeelint = require 'browserify-coffeelint'
connect = require 'gulp-connect'

paths =
  srcFiles: ['./src/main.coffee']
  build: './dist/'
  tmp: './.tmp'
  buildFile: 'main.js'

coffeelintOptions = {
  "max_line_length": {
    "value": 80,
    "level": "ignore",
    "limitComments": true
  }
}

buildScript = (files, watch) ->
  rebundle = ->
    stream = bundler.bundle()
    stream.on("error", notify.onError {
      title: "Compile Error"
      message: "<%= error.message %>"
    }).pipe source paths.buildFile
      .pipe buffer()
#      .pipe uglify()
      .pipe gulp.dest if watch then paths.tmp else paths.build

  props = watchify.args
  props.entries = files
  props.debug = true

  bundler = if watch then watchify browserify props else browserify props
  bundler.transform coffeelint, coffeelintOptions
  bundler.transform coffeeify, sourceMap: true
  bundler.on "update", ->
    rebundle().pipe(connect.reload())
    gutil.log "Rebundled..."
    gutil.log paths.srcFiles
    return

  rebundle()

gulp.task "connect", -> connect.server {
  livereload: true
  root: ['.', '.tmp']
  fallback: 'index.html'
}

gulp.task "watch", -> buildScript paths.srcFiles, true
gulp.task "build", -> buildScript paths.srcFiles, false

gulp.task "default", ['connect', 'watch']
