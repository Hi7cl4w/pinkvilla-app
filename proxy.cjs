const express = require('express')
const app = express()
const port = 4000
var cors = require('cors')
var request = require('request')
const https = require('https')
const path = require('path')
const fs = require('fs')
var base = process.env.PWD

app.use(cors())
app.get('/*', (req, res) => {
  var url = 'https://englishapi.pinkvilla.com/' + req.url
  req.pipe(request(url)).pipe(res)
})
https
  .createServer(
    {
      key: fs.readFileSync('key.pem'),
      cert: fs.readFileSync('cert.pem'),
    },
    app,
  )
  .listen(port, () => {
    console.log(`Proxy app listening on port ${port}`)
  })
