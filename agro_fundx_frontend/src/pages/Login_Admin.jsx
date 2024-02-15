import React from 'react'
import {useFormik} from "formik"
import { SignInSchema } from '../assets/schemas/signinSchema'
import Swal from 'sweetalert2'
// import validator from 'validator'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addadminPresent } from '../components/Stores/MasterSlice'
// import { UseSelector } from 'react-redux'
// import '../Styles/signup.css'
function Login_Admin() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const  {adminpresent}  = useSelector((state) => state.master);
    
    const initialState = {
        email: "",
        password : "",
    };

    const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialState,
      validationSchema: SignInSchema,
      onSubmit: (values, action) => {
        console.log(values);
        eventSignIp();
        action.resetForm();
      }
    })

  const eventSignIp = () => {

    if(values.email === "admin@gmail.com" && values.password === "admin@3002"){
     
      let timerInterval;
      Swal.fire({
        title: "Successfully LoggedIn !",
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
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
      setTimeout(() => {
        dispatch(addadminPresent(true));
        console.log(adminpresent);
        navigate("/");
      }, 3000);
    }
    else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Login failed",
      });
    }
  }


  return (
    <div>
    <div class = "container">

        <div className='registration'>
        <button style = {{marginLeft:"7px" , marginBottom:"23px"}} class = "ride" onClick={() => navigate("/Login")}><a class = "a" >former</a></button>
        {/* <button style = {{marginLeft:"-16px" , marginBottom:"23px"}} class = "ride" onClick={() => navigate("/signindriver")}><a class = "a">driver</a></button> */}
        <button style = {{marginLeft:"0px" , marginBottom:"23px"}} class = "ride"><a class = "a" style= {{color:"red"}}>admin</a></button>
         
            <form onSubmit = {handleSubmit} id='form'>


                <label> email:</label>
                <br></br>
                <input value = {values.email} onChange = {handleChange} onBlur ={handleBlur} name = "email" type = "email" style = {{}}/>
                {errors.email && touched.email ? <div> <p style ={{color : "red"}}>{errors.email}</p></div> : null}
                <br></br>
                <label> password:</label>
                <br></br>
                <input value = {values.password} onChange = {handleChange} onBlur ={handleBlur} name = "password" type = "password"  style = {{}}/>
                {errors.password && touched.password ? <div> <p style ={{color : "red"}}>{errors.password}</p></div> : null}
                <br></br>
                <button type = "submit" class = "btn1">
                    log in
                </button>

            </form>
           
        </div>

        <div>
        {/* <img id="pic1" src="/images/signin.png" alt="img" width="70%" /> */}
        </div>
    </div>
    </div>
  )
}

export default Login_Admin;