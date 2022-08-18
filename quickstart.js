require('dotenv').config()
let request = require('request')
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

request(options, (error, response, body) => {
  if (error) {
    console.error('Error: ', error)
  } else {
    console.log('Response: ', body)
  }
})