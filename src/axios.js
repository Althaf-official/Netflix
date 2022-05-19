//TODO:9 CREATE AND INSTANCE .AND CONFIGURE BASE URL AND API_KEY
// now im going to config baseUrl and API_KEY .the create one instance
import axios from "axios";

// import contstants.js file also which is i create baser url and api key
import {baseUrl} from './constants/constants'

// i copied from npm 
const instance = axios.create({
    baseURL: baseUrl,
  });

  export default instance