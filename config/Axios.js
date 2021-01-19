import { address } from '@/config/apiAddress';
import axios from "axios";

let Api = axios.create({
  baseURL: 'http://localhost:3000/',
});
 
Api.defaults.withCredentials = true;

//Api.defaults.headers.post['Accept'] = 'application/json'; // for POST requests
//Api.defaults.headers.post['Authorization'] = 'Bearer ' + token

export default Api;