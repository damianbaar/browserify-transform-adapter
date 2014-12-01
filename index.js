var through = require('through2')

module.exports = function(browserifyStream) {
  return function() {
    return through.obj(function(file, enc, next) {
      if(file.isNull() || file.stopProcessing) {
        this.push(file)
        next()
        return
      }

      var self = this
        , stream = browserifyStream(file.path)
        , data = []

        stream
          .pipe(through(function(chunk, enc, cb) {
            data.push(chunk)
            cb()
          }, function() {
            var _content = data.join('')
            file.contents = new Buffer(_content)

            self.push(file)
            next()
          }))

      stream.write(file.contents)
      stream.end()
    })
  }
}

