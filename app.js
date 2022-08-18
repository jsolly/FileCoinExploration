require('dotenv').config()
let request = require('request')
const express = require('express');
const path = require('path');
const app = express();

// set up rate limiter: maximum of five requests per minute
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 500, // Limit each IP to 500 requests per `window` (here, per 15 minutes)
});

// apply rate limiter to all requests
app.use(limiter);


const listener = app.listen(process.env.PORT || 4000, function() {
  console.log('Node app is working on port ' + listener.address().port);
});


// Call the Infura API and check that the address is valid.
let options = {
    url: 'https://filecoin.infura.io',
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
    auth: {
        user: process.env.INFURA_PROJECT_ID,
        pass: process.env.INFURA_SECRET
    },
    body: `{
        "jsonrpc": "2.0",
        "id": 0,
        "method": "Filecoin.WalletValidateAddress",
        "params": ["f1abjxfbp274xpdqcpuaykwkfb43omjotacm2p3za"],
   }`
  }
let fc_response;
request(options, (error, response, body) => {
  if (error) {
    console.error('Error: ', error)
  } else {
    console.log('Response: ', body)
    fc_response = body
  }
})

app.get('/', (req, res) => {
  res.send(fc_response);
});
