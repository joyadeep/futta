import axios from 'axios'

const instance=axios.create({baseURL:'https://api.futta.fi/api/'})

export default instance;