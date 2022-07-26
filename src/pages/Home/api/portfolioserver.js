let axios = require('axios')

export let fetchProject = async () => {
    let response = await axios("http://localhost:8001/fetch/project")
    return response.data
}

export let fetchEmployment = async () => {
    let response = await axios("http://localhost:8001/fetch/employment")
    return response.data
}

export let fetchEducation = async () => {
    let response = await axios("http://localhost:8001/fetch/education")
    return response.data
}

export let fetchSkill = async () => {
    let response = await axios("http://localhost:8001/fetch/skill")
    return response.data
}