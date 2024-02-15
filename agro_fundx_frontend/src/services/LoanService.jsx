import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/loans/";

class LoanService {

  saveLoan(loan , token) {
    
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // };
    return axios.post(USER_API_BASE_URL + "post" , loan
    // , config
    );
  }
  getLoanBytrack(trackId , token) {
    
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // };
    return axios.get(USER_API_BASE_URL + "get/"+trackId
    // , config
    );
  }
  getLoan() {
    
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // };
    return axios.get(USER_API_BASE_URL + "get"
    // , config
    );
  }
  getLoanByStatus(){
    return axios.get(USER_API_BASE_URL + "get/applied"
    // , config
    );

  }
  getUserByEmail(email,token) {
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // };
    console.log(email);
    console.log(token);
    return axios.get(USER_API_BASE_URL + "get/"+ email 
    // , config
    );
  }

  putLoanAccepted(email , Loan_Status){
    console.log("hello");
    return axios.put(USER_API_BASE_URL + "put/"+ email+"/"+Loan_Status);
  }

  

}

export default new LoanService();