// import React from 'react'
import {useFormik} from "formik"
import { SignUpSchema } from "../assets/schemas/signupSchema"
import Swal from 'sweetalert2'
// import validator from 'validator'
import {useNavigate} from 'react-router-dom'
// import {useState} from 'react'
// import '../Styles/signup.css'
// import UserService from "../Services/UserService"
// import UserAuthService from '../Services/UserAuthService'
import React from "react";
function Signup_Farmer() {
    const navigate = useNavigate();
    const initialState = {
        username:"",
        email: "",
        password : "",
        confirmPassword:"",
        phoneNumber:"",
       
    };

    const { values, errors, handleBlur, handleChange,handleuserNameChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialState,
      validationSchema: SignUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        eventRegister();
        action.resetForm();
      }
    })

  const eventRegister = async () => {
    try {
        
            let timerInterval;
            Swal.fire({
                title: "Registered Successfully !!",
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
                navigate("/Login");
            }, 3000);
        }
    catch (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${error}`,
        });
        console.log(error);
    }
};




  return (
    <div>
    <div class = "container"  style = {{height : "auto"}}>

        <div className='registration'  style = {{marginTop:"42px"}}>

          <button style = {{marginLeft:"7px" , marginBottom:"23px"}} class = "ride" ><a class = "a" style ={{color:"red"}}>former</a></button>
          {/* <button style = {{marginLeft:"-16px" , marginBottom:"23px"}} class = "ride" onClick={() => navigate("/signupdriver")}><a class = "a">driver</a></button> */}
          <button style = {{marginLeft:"0px" , marginBottom:"23px"}} class = "ride"  onClick={() => navigate("/LoginAdmin")}><a class = "a">admin</a></button>
            <form onSubmit = {handleSubmit} id='form'>

            <label> user name</label>
                <br></br>
                <input value = {values.username} onChange = {handleChange} onBlur ={handleBlur} name = "username" type = "text" style = {{}}/>
                {errors.username && touched.username ? <div> <p style ={{color : "red"}}>{errors.username}</p></div> : null}
                <br></br>

                <label> email: </label>
                <br></br>
                <input value = {values.email} onChange = {handleChange} onBlur ={handleBlur} name = "email" type = "email"   style = {{}}/>
                {errors.email && touched.email ? <div> <p style ={{color : "red"}}>{errors.email}</p></div> : null}
                <br></br>
                <label> password: </label>
                <br></br>
                <input value = {values.password} onChange = {handleChange} onBlur ={handleBlur} name = "password" type = "password"    style = {{}}/>
                {errors.password && touched.password ? <div> <p style ={{color : "red"}}>{errors.password}</p></div> : null}
                <br></br>
                <label> confirm password:</label>
                <br></br>
                <input value = {values.confirmPassword} onChange = {handleChange} onBlur ={handleBlur} name = "confirmPassword" type = "text"     style = {{}}/>
                {errors.confirmPassword && touched.confirmPassword ? <div> <p style ={{color : "red"}}>{errors.confirmPassword}</p></div> : null}
                <br></br>
                 <label> phone number:</label>
                 <br></br>
                <input value = {values.phoneNumber} onChange = {handleChange} onBlur ={handleBlur} name = "phoneNumber" type = "text"    style = {{}}/>
                {errors.phoneNumber && touched.phoneNumber ? <div> <p style ={{color : "red"}}>{errors.phoneNumber}</p></div> : null}
                <br></br>
                <br></br>
                <button type = "submit" class = "btn1">
                    sign up
                </button>

            </form>
            <p style = {{    marginLeft: "60px", marginTop:"21px"}}>already a user? <button onClick = { () => navigate("/Login")} class = "ride"><a class = "ab"style = {{marginTop:"10px" ,color:"blue"}}>Login </a></button></p>
        </div>
        <div>
        {/* <img id="pic1" src="/images/signin.png" alt="img" width="70%" /> */}
        </div>
    </div>
    </div>
  )
}

export default Signup_Farmer;