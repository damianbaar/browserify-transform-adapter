browserify-transform-adapter
============================

Re-define bridge between browserify transforms and re-define transforms.

### Usage

```
var adapter = require('browserify-transform-adapter')
  , envify = require('envify')

//attach to re-define as normal transform
adapter(envify({config}))
```
