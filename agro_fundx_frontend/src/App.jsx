import { BrowserRouter as Router , Route , Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/about"
import Navbar from "./components/Navbar"
import Login_Farmer from "./pages/Login_Farmer"
// import Signup_Farmer from "./pages/Signup_Farmer"
import Signup_Farmer from "./pages/Signup_Farmer"
import Login_Admin from "./pages/Login_Admin"
import Profile from "./pages/profile"
import Footer from "./components/Footer"
import Customer_Support from "./pages/Customer_Support"
import Apply_Loan from "./pages/Apply_Loan1"
import Apply_Loan2 from "./pages/Apply_Loan2"
import Loan_Status from "./pages/Loan_Status"
import Applied_Loans from "./pages/Applied_Loans_Admin"
import Loan_Details from "./pages/Loan_Details"
import DashBoard from "./pages/Farmer_Dashbord"
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path = "/" element ={<Home/>}/> 
        <Route path = "/about" element ={<About/>}/> 
        <Route path = "/Login" element ={<Login_Farmer/>}/>
        <Route path = "/sign" element ={<Signup_Farmer/>}/> 
        <Route path = "/LoginAdmin" element ={<Login_Admin/>}/> 
        <Route path = "/Profile" element ={<Profile/>}/> 
        <Route path = "/customer" element ={<Customer_Support/>}/> 
        <Route path = "/Apply_Loan" element ={<Apply_Loan/>}/> 
        <Route path = "/Apply_Loan2" element ={<Apply_Loan2/>}/> 
        <Route path = "/Loan_Status" element ={<Loan_Status/>}/> 
        <Route path = "/Applied_Loans" element ={<Applied_Loans/>}/> 
        <Route path = "/Loan_Details" element ={<Loan_Details/>}/> 
        <Route path = "/DashBoard" element ={<DashBoard/>}/> 
      </Routes>
      {/* <Footer/> */}
    </Router>
  )
}

export default App
