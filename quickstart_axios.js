require('dotenv').config()



const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
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
        "method": "Filecoin.ChainHead"
    }`
  }

  axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });