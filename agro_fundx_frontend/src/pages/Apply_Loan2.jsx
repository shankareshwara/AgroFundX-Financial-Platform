import React from 'react';
import '../assets/css/Apply_Loan1.css'
import { useNavigate  } from 'react-router';
import LoanService from '../services/LoanService';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';


const Apply_Loan2 = () => {
    const [apply, setApply] = React.useState(false);
  const navigate =useNavigate();
  const { LoanDetails } = useSelector((state) => state.master);
  const { Token} = useSelector((state) => state.master);
    const hello =async(e) =>{
      e.preventDefault();
      try {
        const response = await LoanService.saveLoan(LoanDetails , Token);
        console.log(response.data);
        const target = "SuccessFully posted";
        const target1 = "already exists";

        if (response.data === target1) {
            throw target1;
        }
         else {
            let timerInterval;
            Swal.fire({
                title: "Loan Applied Successfully !!",
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
              setApply(true);
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

    const firstPage=() =>{
        navigate("/Apply_Loan");
    }
    const TrackPage=(trackId) =>{
        navigate("/Loan_Status",{state : {trackId : trackId}});
    }
  return (
    <div className='body22'>
       {!apply ?( 
    <div className="container99">
      <div className="title1">LOAN DETAILS</div>
      <form onSubmit={hello}>
        <div className="user__details">
          <div className="input__box" style = {{gap:"19px"}}>
            <span className="details">select type documents</span>
            <select className='input___box' required>
             <option value="" disabled>please pic a type</option>
             <option value="Veg">Adhar card</option>
             <option value="Non Veg">pan card</option>
               </select>
          </div>
          <div className="input__box" style = {{gap:"19px"}}> 
          <span className="details">Enter files: </span>
          <input type="file" placeholder="Choose a file" required/>
          </div>
        </div>
        <div >
            <button type = "submit" className="button33">submit</button>
        </div>
        <div className='vasa1'>
          <button  className='button-13' onClick={firstPage}>1</button>
           <button className='button-13'>2</button>
        </div>
      </form>
    {/* ):(<h1>hello</h1>)} */}
    </div>
    ):(
        <div className="container99">
            <div className="title1">LOAN APPLIED SUCCESSFULLY</div>
            <div className="title1">your track id : {LoanDetails.trackId}</div>
            <div>
            <button className='button34' onClick={()=>TrackPage(LoanDetails.trackId)} >track status</button>
            </div>
        </div>
    )}
    </div>
  );
};

export default Apply_Loan2;