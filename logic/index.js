const axios = require('axios')
const validate = require('../utils/validate')

const list = require('../assets/repoList')

const url = `https://api.github.com/repos/`

const logic = {
    getRepoInfo(index) {
        validate.arguments([
            { name: 'index', value: index, type: 'number', notEmpty: true }
        ])

        if (index > list.length - 1) throw new Error(`ERROR! index ${index} is not a valid index. maximum index value could be ${list.length - 1}`)

        let _url = `${url}${list[index]}`

        return (async () => {
            try {
                const response = await axios({
                    url: _url,
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })

                const { data: { description, full_name, stargazers_count } } = response
                return {
                    description,
                    full_name,
                    stargazers_count
                }
            }
            catch (error) {
                if (error.message == `Request failed with status code 404`) throw new Error(`ERROR! Repo on index ${index} not found.`)
                throw new Error(error.message)
            }
        })();
    }
}

module.exports = logic