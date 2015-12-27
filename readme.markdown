## l33tsp34k-stream

[![build status](http://img.shields.io/travis/jekrb/l33tsp34k-stream.svg?style=flat)](http://travis-ci.org/jekrb/l33tsp34k-stream)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)


streamable l33tsp34k

```
npm install l33tsp34k-stream -S
```

### Usage

``` js
const leet = require('l33tsp34k-stream')

process.stdin
  .pipe(leet())
  .pipe(process.stdout)
```

### API

#### const stream = leet()


##### `stream.write('makes this stream 1337')`
##### `stream.end('end this 1337 stream \n')`
##### `stream.pipe(<writeable stream>)`



### License

MIT
