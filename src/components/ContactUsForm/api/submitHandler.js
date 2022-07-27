let axios = require('axios');


export let sendLetter = async (data) => {

    axios({
        method:'POST',
        url:'https://azriportfolioserver.herokuapp.com/update/letter',
        headers:{
            'Content-Type':'application/json'
        }, 
        data
    });
    
}