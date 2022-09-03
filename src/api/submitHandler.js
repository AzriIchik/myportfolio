let axios = require('axios');
let config = require('config.json')

let baseUrl = config.server_url;

export let sendLetter = async (data) => {

    axios({
        method:'POST',
        url:baseUrl+'/update/letter',
        headers:{
            'Content-Type':'application/json'
        }, 
        data
    });
    
}