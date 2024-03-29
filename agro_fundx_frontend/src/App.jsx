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
import LoaderCom from "./components/Loader"
import { useEffect, useState } from "react"
import DashBoard2 from "./pages/DashBoard"
import { useSelector } from "react-redux"
import Error from "./pages/Error"
function App() {
  const [loading, setLoading] = useState(false);
	const [appliedJobs, setAppliedJobs] = useState([]);
  const { adminpresent} = useSelector((state) => state.master);
  const { Token} = useSelector((state) => state.master);
    useEffect(() => {
        setLoading(true);
		setTimeout(() => {
		  setLoading(false);
		},3000);
    }, []);
  return (
    <>
    {/* {loading?(
      <div style={{display:"flex",backgroundImage:"linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url('/images/loader.png')",justifyContent:"center",textAlign:"center",padding:"45vh", backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      opacity: "0.8"}}> 
        <LoaderCom/>
      </div>
     
      
  ):( */}
   <Router>
  <Navbar />
  {Token != null ? ( // Check if Token is not empty
    <Routes>
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Apply_Loan" element={<Apply_Loan />} />
      <Route path="/Apply_Loan2" element={<Apply_Loan2 />} />
      <Route path="/Loan_Status" element={<Loan_Status />} />
      <Route path="/DashBoard2" element={<DashBoard2 />} />
       <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login_Farmer />} />
      <Route path="/sign" element={<Signup_Farmer />} />
      <Route path="/LoginAdmin" element={<Login_Admin />} />
      <Route path="/about" element={<About />} />
      <Route path="/customer" element={<Customer_Support />} />
      <Route path="*" element={<Error />} />
    </Routes>
  ) : ( 
    adminpresent ? (
      <Routes>
      <Route path="/Applied_Loans" element={<Applied_Loans />} />
      <Route path="/Loan_Details" element={<Loan_Details />} />
      <Route path="/DashBoard" element={<DashBoard />} />
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login_Farmer />} />
      <Route path="/sign" element={<Signup_Farmer />} />
      <Route path="/LoginAdmin" element={<Login_Admin />} />
      <Route path="/about" element={<About />} />
      <Route path="/customer" element={<Customer_Support />} />
      <Route path="*" element={<Error />} />
    </Routes>
    ):(
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login_Farmer />} />
      <Route path="/sign" element={<Signup_Farmer />} />
      <Route path="/LoginAdmin" element={<Login_Admin />} />
      <Route path="/about" element={<About />} />
      <Route path="/customer" element={<Customer_Support />} />
        <Route path="*" element={<Error />} />
      </Routes>
      
    )
  )}
  {/* <Footer/> */}
</Router>

  {/* // )} */}
  </>
  )
}

export default App
