browserify-transform-adapter
============================

Re-define bridge between browserify transforms and re-define transforms.

### Usage

```
var adapter = require('browserify-transform-adapter')
  , envify = require('envify')

//attach to re-define as normal transform
adapter(envify)
```

### Important
Internally adapter is calling function, for example `envify()` and expect to get a stream, most likely when passing config some closures would be needed.

#### TODO
Figure out how it could be used with command line, thinking about `#transform`
