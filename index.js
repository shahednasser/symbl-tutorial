require('dotenv').config()
const express = require('express')
const request = require('request')
const fs = require('fs')
const { WebSocketServer } = require('ws')
const port = 3000

const app = express()

app.use(express.static('public'))

app.get('/authentication', (req, res) => {
  const authOptions = {
    method: 'post',
    url: "https://api.symbl.ai/oauth2/token:generate",
    body: {
      type: "application",
      appId: process.env.APP_ID,
      appSecret: process.env.APP_SECRET
    },
    json: true
  }

  request(authOptions, (err, response, body) => {
    if (err) {
      console.error('error posting json: ', err);
      return res.json({success: false, message: 'An error occurred, please try again later'})
    }
  
    return res.json({success: true, accessToken: body.accessToken})
  })
})

const wss = new WebSocketServer({
  port: 8080
})

wss.on('connection', function connection(ws) {
  const readStream = fs.createReadStream("audio/audio.mp3");
  readStream.on('data', function(data) {
      ws.send(data)
  })
  readStream.on('close', function() {
    ws.close()
  })
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})