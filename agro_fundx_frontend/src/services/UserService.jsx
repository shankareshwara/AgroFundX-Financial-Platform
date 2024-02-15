import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/user/";

class UserService {

  getUsers(token) {
    
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // };
    return axios.get(USER_API_BASE_URL + "get"
    // , config
    );
  }
  
  getUserByEmail(email, token) {
    console.log(email);
    console.log(token);
    return axios.get(USER_API_BASE_URL + "get/" + email
    // , {
    //     headers: {
    //         Authorization: `Bearer ${token}`,
    //     }
    // }
    );
}

  putUserByEmail(email , edit, token){
    console.log("hello");
    return axios.put(USER_API_BASE_URL + "put/"+ email , edit);
  }

}

export default new UserService();