var through = require('through2')
  , format = require('util').format

module.exports = function(stream) {
  return function(globalConfig) {
    return through.obj(function(file, enc, next) {
      if(file.isNull() || file.stopProcessing) {
        this.push(file)
        next()
        return
      }

      var self = this
        , stream = through()
        , data = []

      stream.pipe(stream)
            .pipe(through(function(chunk, enc, next) {
              data.push(chunk)
              next()
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

