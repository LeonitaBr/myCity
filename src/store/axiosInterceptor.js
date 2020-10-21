import axios from "axios";
import { getCashUser } from "../utils/cacheHandler";
import { environment } from "../environments/environment";

const instance = axios.create({ baseURL: environment });

instance.interceptors.request.use(async (req) => {
  const user = await getCashUser()
  let { Authorization } = req.headers;
  let parsedUser = JSON.parse(user)
  let { token } = parsedUser
  Authorization = token

  return req;
}, error => { return Promise.error(error) });


instance.interceptors.response.use((response) =>{
   return response
  }, error=>{
    handleErrors(error)
  } 
);

const handleErrors = (error) => {
  switch (error.response.status) {
    case 400:
    case 401:
    case 405:
    case 415:
    case 500:
    default:
      return Promise.reject(error)

  }

}

export default instance;