'use strict'

const request = require('request')
const endpoint = `http://${process.env.host}`

module.exports.send = (event, callback) => {
  request(endpoint, (err, response) => {
    callback(err, response)
  })
}
