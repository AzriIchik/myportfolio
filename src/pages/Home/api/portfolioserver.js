let axios = require('axios')

let baseUrl = 'https://azriportfolioserver.herokuapp.com/'

export let fetchProject = async () => {
    let response = await axios(baseUrl + "fetch/project")
    return response.data
}

export let fetchEmployment = async () => {
    let response = await axios(baseUrl + "fetch/employment")
    return response.data
}

export let fetchEducation = async () => {
    let response = await axios(baseUrl + "fetch/education")
    return response.data
}

export let fetchSkill = async () => {
    let response = await axios(baseUrl + "fetch/skill")
    return response.data
}