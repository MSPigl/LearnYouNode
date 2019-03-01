let axios = require('axios');

let url1 = process.argv[2];
let url2 = process.argv[3];
let url3 = process.argv[4];

axios.get(url1).then( (response) => {
    console.log(response.data);

    axios.get(url2).then( (response) => {
        console.log(response.data);

        axios.get(url3).then( (response) => {
            console.log(response.data);
        });
    });
});