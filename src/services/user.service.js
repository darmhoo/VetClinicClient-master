import axios from 'axios';
import authHeader from './auth-header';

const API_URL = `${process.env.REACT_APP_API_URL}/auth/userinfo`;

class UserService {

  getUserBoard() {
    return axios.get(API_URL, { headers: authHeader() });
  }
  
}

export default new UserService();