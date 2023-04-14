import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_URL}/v1/auth/login`;

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL, {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

 

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();