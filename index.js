const leet = require('l33tsp34k')
const through = require('through2')

module.exports = () => through(write)

function write (buf, _, next) {
  this.push(leet(buf.toString()))
  next()
}
