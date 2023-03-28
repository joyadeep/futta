import axios from 'axios'

const instance=axios.create({baseURL:'https://api.futta.fi/api/'})

const axiosInstance = axios.create({
    baseURL: 'https://api.futta.fi/api/',
    timeout: 10000,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  });

export default instance;
export {axiosInstance}