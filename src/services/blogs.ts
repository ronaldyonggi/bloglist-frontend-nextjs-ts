import axios from "axios"
const baseUrl = 'http://localhost:3001/api/blogs'

let token: string | null = null;

const setToken = (newToken: string | null) => {
  newToken ?
  token = `Bearer ${newToken}` : 
  token = null
};

const getAll = () => {
  return axios.get<IBlog[]>(baseUrl)
}

const exportedFunctions = {
  getAll,
  setToken
}

export default exportedFunctions;