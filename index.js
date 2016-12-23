'use strict'

const sender = require('./lib/sender')

module.exports.handler = (event, context, callback) => {
  sender.send(event, (err, result) => {
    callback(err, result)
  })
}
