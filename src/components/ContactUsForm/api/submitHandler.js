let axios = require('axios');

export let sendLetter = async (data) => {

    axios({
        method:'POST',
        url:'http://localhost:8001/update/letter',
        headers:{
            'Content-Type':'application/json'
        }, 
        data
    });
    
}