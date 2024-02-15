import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoanService from '../services/LoanService';
import { addAppliedDetails } from '../components/Stores/MasterSlice';
// import '../assets/css/AppliedLoans.css';
const Applied_Loans = () => {

  const [{appliedDetails},setAppliedDetails]  = useState(useSelector((state) => state.master));
  const dispatch = useDispatch();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await LoanService.getLoanByStatus();
      console.log("response", " ", response.data);
      dispatch(addAppliedDetails(response.data));
      console.log(appliedDetails)
    } catch (error) {
      // console.log(Email);
      // console.log(Token);
      console.log(error);
    }
  };
  const changeStatus = async (trackId) => {
    console.log(trackId)
    try {
      const response = await LoanService.putLoanAccepted(trackId , "accepted");
      // setAppliedDetails({...appliedDetails,status : "applied"})
      console.log("response", " ", response.data);
    } catch (error) {
      console.log(error);
    }
  }
  const changeStatus2 = async (trackId) => {
    console.log(trackId)
    try {
      const response = await LoanService.putLoanAccepted(trackId , "rejected");
      console.log("response", " ", response.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1 style={{ textAlign: "center", paddingTop: "50px" }}>Applied Loans</h1>
      <div className="card-list">
        {appliedDetails.map((data) => (
          <div className="card1">
            <p className="card-title">applicantName: {data.applicantName}</p>
            <p className="card-title">applicantEmail: {data.applicantEmail}</p>
            <p className="card-title">loanType: {data.loanType}</p>
            <p className="card-title">trackId: {data.trackId}</p>
            <p className="card-title">applicantName: {data.applicantAddress}</p>
            <p className="card-title">applicantMobile: {data.applicantMobile}</p>
            <p className="card-title">applicantAadhaar: {data.applicantAadhaar}</p>
            <p className="card-title">applicantPan: {data.applicantPan}</p>
            <p className="card-title">applicantSalary: {data.applicantSalary}</p>
            <p className="card-title">loanAmountRequired: {data.loanAmountRequired}</p>
            <p className="card-title">loanRepaymentMonths: {data.loanRepaymentMonths}</p>
            <p className="card-title">applicantAadhaar: {data.applicantAadhaar}</p>
             <div style={{ display: "flex", paddingLeft: "70px", paddingTop: "20px",flexDirection:"row-reverse" }}>
              {/* {data.status === "Accepted" ? ( */}
                <div>
                  <button style={{ color: "white", backgroundColor: "green", width: "100px", borderRadius: "6px", borderColor: "green" }} onClick={() => changeStatus(data.trackId)}>Accepte</button>
                </div>
              {/* ) : ( data.status === "Rejected" ? */}
                <div>
                  <button style={{ color: "white", backgroundColor: "red", width: "100px", borderRadius: "6px", borderColor: "red" }}onClick={() => changeStatus2(data.trackId)} >Reject</button>
                </div>
                {/* :( */}
                {/* ) */}
              {/* )} */}
            </div> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applied_Loans;