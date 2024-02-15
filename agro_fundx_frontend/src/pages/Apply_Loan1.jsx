import React, { useState } from 'react';
import '../assets/css/Apply_Loan1.css'
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addLoanDetails } from '../components/Stores/MasterSlice';
// import { UseSelector } from 'react-redux';
const Apply_Loan= () => {

    const navigate =useNavigate();
    const { Email } = useSelector((state) => state.master);
 
    const dispatch = useDispatch();
    const [initialState,setIntialState] = useState({
      trackId:0,
      loanType:"",
      applicantName:"",
      applicantAddress:"",
      applicantMobile:"",
      applicantEmail:Email,
      applicantAadhaar:"",
      applicantPan:"",
      applicantSalary:"",
      loanAmountRequired:"",
      loanRepaymentMonths:"",
      status:"applied"
    });

    // const hello =() =>{
    //   const idLength = 8;
    //   const newTrackId = Math.floor(10000000 + Math.random() * 90000000);
    //   setIntialState(prevState => ({
    //     ...prevState,
    //     trackId: newTrackId
    //   }));
    //   dispatch(addLoanDetails(initialState));
    //     console.log(initialState);
    //     navigate('/Apply_Loan2')
    // }

    const hello = (e) => {
      e.preventDefault(); // Prevent default form submission behavior
      const idLength = 8;
      const newTrackId = Math.floor(10000000 + Math.random() * 90000000);
      const updatedState = { ...initialState, trackId: newTrackId };
      dispatch(addLoanDetails(updatedState));
      console.log(updatedState);
      navigate('/Apply_Loan2');
  }
  return (
    <div className='body22'>
    <div className="container99">
      <div className="title1">LOAN DETAILS</div>
      <form onSubmit={hello}>
        <div className="user__details">
          <div className="input__box">
            <span className="details">Applicant Name:</span>
            <input type="text" placeholder="Enter Applicant Name"  onChange={(e) => {
        setIntialState({...initialState,applicantName : e.target.value})}} required/>
          </div>
          <div className="input__box">
            <span className="details">Applicant Address:</span>
            <input type="text" placeholder="Enter Applicant Address"
             onChange={(e) => {
              setIntialState({...initialState,applicantAddress : e.target.value})}}
            required />
          </div>
          <div className="input__box">
            <span className="details">Applicant mobile:</span>
            <input
              type="tel"
              pattern="[0-9]{10}"
              placeholder="012-345-6789"
              required
              onChange={(e) => {
                setIntialState({...initialState,applicantMobile : e.target.value})}}
            />
          </div>
          <div className="input__box">
            <span className="details">Applicant Aadhaar:</span>
            <input type="tel"
              pattern="[0-9]{12}" placeholder="Enter Aadhar number" required 
              onChange={(e) => {
                setIntialState({...initialState,applicantAadhaar : e.target.value})}}/>
          </div>
          <div className="input__box">
            <span className="details">Applicant PAN NO:</span>
            <input type="text" placeholder="Enter PAN number" required 
             onChange={(e) => {
              setIntialState({...initialState,applicantPan : e.target.value})}}
            />
          </div>
          <div className="input__box">
            <span className="details">Needed Loan Type:</span>
            <input type="text" placeholder="Enter Type" required 
             onChange={(e) => {
              setIntialState({...initialState,loanType : e.target.value})}}
            />
          </div>
          <div className="input__box">
            <span className="details">Loan Amount Required:</span>
            <input type="text" placeholder="Enter email" required 
             onChange={(e) => {
              setIntialState({...initialState,loanAmountRequired : e.target.value})}}
            />
          </div>
          <div className="input__box">
            <span className="details">Applicant Salary:</span>
            <input type="text" placeholder="Enter Applicant Salary" required 
             onChange={(e) => {
              setIntialState({...initialState,applicantSalary : e.target.value})}}
            />
          </div>
        <div className="input__box">
          <span className="details">Repayment months:</span>
          <input type="text" placeholder="Loan Repayment months" required 
           onChange={(e) => {
            setIntialState({...initialState,loanRepaymentMonths : e.target.value})}}
          />
        </div>
        </div>
        <div >
            <button type ="submit" className="button33" >Next Page</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Apply_Loan;