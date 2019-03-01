const axios = require('axios');

let url = process.argv[2];

axios.get(url).then( (response) => {
    console.log(response.data.length);
    console.log(response.data);
});