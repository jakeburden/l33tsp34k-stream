const leet = require('../')
const test = require('tape')
const concat = require('concat-stream')

test('simple', t => {
  t.plan(1)
  const stream = leet()
  stream.end('LEETspeak')

  stream.pipe(concat(body => {
    t.same(body.toString('utf8'), '1337$p34k')
  }))
})

