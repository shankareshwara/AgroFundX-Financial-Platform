import { useDispatch, useSelector } from "react-redux";
import "../assets/css/Apply_Loan1.css";
import "../assets/css/Customer_Support.css";
import "../assets/css/Track.css";
import { useState} from "react";
import LoanService from "../services/LoanService";
import { addTrackedLoanDetails } from "../components/Stores/MasterSlice";
import Swal from "sweetalert2";
function Loan_Status() {
  const [trackId, setTrackId] = useState(0);
  const [isClick, setIsClick] = useState(false);
  const dispatch = useDispatch()
  const {TrackedLoanDetails}  = useSelector((state) => state.master);
  const { Token } = useSelector((state) => state.master);
  const checktracking = async (e) => {
    e.preventDefault();
    try {
        const response = await LoanService.getLoanBytrack(trackId);
        
      // const target = "SuccessFully posted";
      const target1 = response.status;
      console.log(target1);

      if (target1 != 200) {
          throw target1;
        }
        else {
          let timerInterval;
          Swal.fire({
              title: "tracking please wait !!",
              html: "Redirecting in <b></b> milliseconds.",
              timer: 3000,
              timerProgressBar: true,
              didOpen: () => {
                  Swal.showLoading();
                  const b = Swal.getHtmlContainer().querySelector("b");
                  timerInterval = setInterval(() => {
                      b.textContent = Swal.getTimerLeft();
                  }, 100);
              },
              willClose: () => {
                  clearInterval(timerInterval);
              },
          }).then((result) => {

              if (result.dismiss === Swal.DismissReason.timer) {
                  console.log("I was closed by the timer");
              }
          });
          setTimeout(() => {
              setIsClick(true);
              console.log(response.data);
              dispatch(addTrackedLoanDetails(response.data));
              console.log("data"+TrackedLoanDetails.applicantName);
            }, 3000);
        }
    } catch (error) {
        Swal.fire({
            icon: "error",
        title: "Oops...",
        text: `${error}`,
      });
      console.log(error);
    }
  };
  return (
    <>
      {/* <div className="body22">
        <div className="container99">
          <div className="title1">TRACK YOUR APPLICATION</div>
          <input
            type="text"
            className="input"
            placeholder="Enter Track Id"
            style={{
              width: "50%",
              marginLeft: "26%",
              paddingTop: "30px",
              marginBottom: "14px",
            }}
            onChange={(e) => {
              setTrackId(e.target.value);
            }}
            required
          />

          <div>
            <button className="button34" onClick={checktracking}>
              track
            </button>
          </div>
        </div>
        

        {isClick?
        (

                  <div class="card2" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title pp">Loan Details</h5>
            <h6 class="card-subtitle mb-2 text-muted">Track-ID:</h6>
            <p class="card-text">Name:</p>
            <p class="card-text">Address:</p>
            <p class="card-text">Mobile:</p>
            <p class="card-text">LoanAmount:</p>
            <p class="card-text">Status:</p>
          </div>
        </div>
            // <div>
            // <p className="card-title">applicantName: {TrackedLoanDetails.applicantName}</p>
            // <p className="card-title">applicantAddress: {TrackedLoanDetails.applicantAddress}</p>
            // <p className="card-title">.applicantMobile: {TrackedLoanDetails.applicantMobile}</p>
            // <p className="card-title">applicantEmail: {TrackedLoanDetails.applicantEmail}</p>
            // <p className="card-title">loanAmountRequired: {TrackedLoanDetails.loanAmountRequired}</p>
            // <p className="card-title">status: {TrackedLoanDetails.status}</p>
            // </div>
        ):
        (null)
        }
      </div> */}


    <div className="page-container">
      <div className="loan-tracker-container">
        <h1 className="tracker-header">Loan Tracker</h1>
        <form onSubmit={checktracking} className="search-form">
          <input
            type="text"
            onChange={(e) => {
              setTrackId(e.target.value);
            }}
            placeholder="Enter Loan ID Number"
            required
            className="loan-input"
            />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    </div>
    {isClick ?(
    <div class="card4" style={{ width: "18rem" }}>
  <div class="card-body">
    <h2 class="card-title pp">Loan Details</h2>
    <h3 class="card-subtitle mb-2 text-muted">Track-ID: {TrackedLoanDetails.trackId}</h3>
    <p class="card-text1">Name:     {TrackedLoanDetails.applicantName}</p>
    <p class="card-text1">Address:      {TrackedLoanDetails.applicantAddress}</p>
    <p class="card-text1">Mobile:      {TrackedLoanDetails.applicantMobile}</p>
    <p class="card-text1">LoanAmount:      {TrackedLoanDetails.loanAmountRequired}</p>
    <p class="card-text1">Status:     {TrackedLoanDetails.status}</p>
  </div>
</div>
    ):(null)}

    </>
  );
}

export default Loan_Status;
