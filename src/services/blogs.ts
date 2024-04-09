import axios from "axios"
const baseUrl = 'http://localhost:3001/api/blogs'

let token: string | null = null;

const setToken = (newToken: string | null) => {
  newToken ?
  token = `Bearer ${newToken}` : 
  token = null
};

// GET all blogs
const getAll = () => {
  return axios.get<IBlog[]>(baseUrl)
}

// CREATE a blog
const create = async (newObject: object) => {
  // Sets token to authorization header
  const config = {
    headers: {
      Authorization: token
    }
  }

  const res = await axios.post(baseUrl, newObject, config)
  return res
}

const deleteBlog = async (id: string) => {
  const config = {
    headers: {
      Authorization: token
    }
  }

  const res = await axios.delete(`${baseUrl}/${id}`, config)
  return res
}

const exportedFunctions = {
  getAll,
  setToken,
  create,
  deleteBlog
}

export default exportedFunctions;