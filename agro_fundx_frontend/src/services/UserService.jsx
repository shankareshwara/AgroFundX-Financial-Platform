import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/user/";

class UserService {

  getUsers() {
    return axios.get(USER_API_BASE_URL + "get");
  }

  getUserByEmail(email,token) {
    return axios.get(USER_API_BASE_URL + "get/"+ email,{
      headers:{
        Authorization: `Bearer ${token}`,
      }
    });
  }

}

export default new UserService();