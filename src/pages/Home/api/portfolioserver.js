let axios = require('axios')

export let fetchProject = async () => {
    let response = await axios("http://localhost:8001/fetch/project")
    return response.data
}
