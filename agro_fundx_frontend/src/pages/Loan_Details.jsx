import '../assets/css/Loan_Details.css'
import UserService from '../services/UserService';
import { addAllLoanDetails } from '../components/Stores/MasterSlice';
import LoanService from '../services/LoanService';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


const Loan_Details = () => {
  const { AllLoanDetails } = useSelector((state) => state.master);
  const [trackId, setTrackId] = useState(); 
  const dispatch = useDispatch();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await LoanService.getLoan();
      console.log("response", " ", response.data);
      dispatch(addAllLoanDetails(response.data));
      console.log(AllLoanDetails)
    } catch (error) {
      // console.log(Email);
      // console.log(Token);
      console.log(error);
    }
  };
  const cardsData = [
    { name: 'Suhaas', id: '4829274', phone: '9080847433', address: 'XXXXXX', email: 'XXXXXX@gmail.com', loan: '400000' },
    { name: 'Gopal', id: '1833270', phone: '957577433', address: 'XXXXXX', email: 'XXXXXX@gmail.com', loan: '800000' },
    { name: 'Shekar', id: '2344291', phone: '919847433', address: 'XXXXXX', email: 'XXXXXX@gmail.com', loan: '100000' },
  ];
  
  const isLoanAccepted = true;
  const checktracking = async (e) => {
    e.preventDefault();
    try{
      if(trackId == null){

        getData();
      }
      else{
    const response = await LoanService.getLoanByName(trackId);
    // console.log(response);
    if(response.data.length != 0){
      dispatch(addAllLoanDetails(response.data));
    }
    else{
      console.log("no user found");
      getData();
    }
  }
    
    }
    catch(error){
      console.log(error);
    }
  }
  return (
    <div>
      <h1 style={{ textAlign: "center", paddingTop: "50px" }}>Loan Details</h1>
      <form onSubmit={checktracking} className="search-form">
          <input
            type="text"
            onChange={(e) => {
              setTrackId(e.target.value);
            }}
            // value={trackId}
            placeholder="Enter Applicant Name"
            className="loan-input"
            />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
          {/* <button onClick={getData} className="search-button" style={{paddingLeft:"10px"}}>
            All Details
          </button> */}
      <div className="card-list">
        {AllLoanDetails.map((data) => (
          <div className="card1">
            <p className="card-title">applicantName: {data.applicantName}</p>
            <p className="card-title">applicantEmail: {data.applicantEmail}</p>
            <p className="card-title">loanType: {data.loanType}</p>
            <p className="card-title">trackId: {data.trackId}</p>
            <p className="card-title">applicantAddress: {data.applicantAddress}</p>
            <p className="card-title">applicantMobile: {data.applicantMobile}</p>
            <p className="card-title">applicantAadhaar: {data.applicantAadhaar}</p>
            <p className="card-title">applicantPan: {data.applicantPan}</p>
            <p className="card-title">applicantSalary: {data.applicantSalary}</p>
            <p className="card-title">loanAmountRequired: {data.loanAmountRequired}</p>
            <p className="card-title">loanRepaymentMonths: {data.loanRepaymentMonths}</p>
            <p className="card-title">applicantAadhaar: {data.applicantAadhaar}</p>
            <div style={{ display: "flex", paddingLeft: "70px", paddingTop: "20px",flexDirection:"row-reverse" }}>
              {data.status === "accepted" ? (
                <div>
                  <button style={{ color: "white", backgroundColor: "green", width: "100px", borderRadius: "6px", borderColor: "green" }}>Accepted</button>
                </div>
              ) : ( data.status === "Rejected" ?
                <div>
                  <button style={{ color: "white", backgroundColor: "red", width: "100px", borderRadius: "6px", borderColor: "red" }}>Rejected</button>
                </div>
                :(
                <div>
                  <button style={{ color: "white", backgroundColor: "blue", width: "100px", borderRadius: "6px", borderColor: "blue" }}>Applied</button>
                </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loan_Details;