import React from 'react'
import {useFormik} from "formik"
import { SignInSchema } from '../assets/schemas/signinSchema'
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import '../assets/css/Login.css'
import UserAuthService from '../services/UserAuthService'
import { addEmail , addToken ,addUser} from '../components/Stores/MasterSlice'
const Login_Farmer = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {Email} = useSelector((state) => state.master);
    const initialState = {
        email: "",
        password : "",
        role:"user"
      };
  
      const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
      useFormik({
        initialValues: initialState,
        validationSchema: SignInSchema,
        onSubmit: (values, action) => {
          console.log(values);
          eventLogin();
          action.resetForm();
        }
      })
  const eventLogin = async () => {
    try {
      const response = await UserAuthService.loginUserWithEmailAndPassword(values);
      console.log(response);
      var token = response.data.token;
      var userEmail = values.email;
      
      if (response.message != "Request failed with status code 400") {
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
          dispatch(addUser(values)); 
          dispatch(addEmail(userEmail));
          console.log(userEmail);
          dispatch(addToken(token));
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
    } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Login failed",
        });
    }
  };

  return (
    <div class = "outer container">
         {/* <h1 id = "h1">PASSANGER SIGNIN</h1> */}
    <div class = "registration">

        <div className='registration'>
        <button style = {{marginLeft:"7px" , marginBottom:"23px"}} class = "ride"><a class = "a" style= {{color:"red"}}>farmer</a></button>
           
          <button style = {{marginLeft:"0px" , marginBottom:"23px"}} class = "ride" onClick={() => navigate("/LoginAdmin")}><a class = "a">admin</a></button>
            <form onSubmit = {handleSubmit} id='form'>


                <label> email:</label>
                <br></br>
                <input value = {values.email} onChange = {handleChange} onBlur ={handleBlur} name = "email" type = "email"   style = {{}}/>
                {errors.email && touched.email ? <div> <p style ={{color : "red"}}>{errors.email}</p></div> : null}
                <br></br>
                <label> password:</label>
                <br></br>
                <input value = {values.password} onChange = {handleChange} onBlur ={handleBlur} name = "password" type = "password"    style = {{}}/>
                {errors.password && touched.password ? <div> <p style ={{color : "red"}}>{errors.password}</p></div> : null}
                <br></br>
                <button type = "submit" class = "btn1">
                    log in
                </button>

            </form> 
            <p style = {{    marginLeft: "90px", marginTop:"21px"}}>create account ? <button onClick = { () => navigate("/Sign")} class = "ride"><a class = "ab"style = {{marginTop:"10px" ,color:"blue"}}>sign up</a></button></p>
           
        </div>
        <div>
        {/* <img id="pic1" src="/images/signin.png" alt="img" width="70%" /> */}
        </div>
    </div>
    </div>
  )

}

export default Login_Farmer;





















