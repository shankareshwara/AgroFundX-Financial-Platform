import { BrowserRouter as Router , Route , Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/about"
import Navbar from "./components/Navbar"
import Login_Farmer from "./pages/Login_Farmer"
// import Signup_Farmer from "./pages/Signup_Farmer"
import Signup_Farmer from "./pages/Signup_Farmer"
import Login_Admin from "./pages/Login_Admin"
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
      </Routes>
    </Router>
  )
}

export default App
