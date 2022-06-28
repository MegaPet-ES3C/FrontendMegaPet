import axios from "axios";

export default axios.create({
    baseURL: `https://megapet.azurewebsites.net/api/v1/`,
  headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  },
})