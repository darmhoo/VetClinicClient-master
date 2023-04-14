import axios from 'axios';

const API_URL = "http://localhost:8080/api/v1/users";

class APIService {
    getUsers(){
        return axios.get(API_URL);
    }
}


export default new APIService();