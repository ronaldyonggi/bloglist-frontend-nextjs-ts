import axios from "axios";

const baseUrl = 'http://localhost:3001/api/login'

interface ICredentials {
  username: string,
  password: string
}

const login = async (credentials: ICredentials) => {
  const res = await axios.post(baseUrl, credentials);
  return res.data;
}

const exportedFunctions = {
  login
}

export default exportedFunctions