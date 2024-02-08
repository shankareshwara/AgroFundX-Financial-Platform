// import '../assets/images/wall2.jpg'
import Hero from "../components/Hero";
import '../assets/css/Home.css'
import Footer from "../components/Footer";
import { useDispatch , useSelector} from "react-redux";
import UserService from "../services/UserService";
import { addUserDetails } from "../components/Stores/MasterSlice";
import { useEffect } from "react";
function Home() {

    const dispatch = useDispatch();
    const { Emails } = useSelector((state) => state.master);
    const {Token} = useSelector((state) => state.master );

    useEffect(() => {
        getData();
    }, []);


    const getData = async () => {
        try{
            const response = await UserService.getUserByEmail(Emails,Token);
            console.log("response", " ", response.data);
            dispatch(addUserDetails(response.data));
        }
        catch(error){
            console.log(error);
        }
    }

    return ( 
        <>
        <Hero />
            <div className="home">

                <div>
                   
                    <h3  style={{ marginTop:"6%", fontSize: "45px", textAlign:"center", color:"#fc3355"}} class = "content">Agro FundX</h3>
                    
                    <div className="pg1">
                        <div id = "leftpic1">
                            
                            <h2 class = "home-h2">
                            Expert Guidance:
                            </h2>
                            <h3 style={{ textAlign: "justify" , fontFamily: "Poppins"}} class = "home-content">
                            Our team consists of financial experts with a deep understanding of the agriculture industry. 
                            We're here to guide you through the loan application process, offering insights and advice to help you make informed decisions.
                            </h3>
                        </div>
                        <div id = "leftpic1">
                            
                            <h2 class = "home-h2">
                            Flexible Loan Options:
                            </h2>
                            <h3 style={{ textAlign: "justify" , fontFamily: "Poppins"}}  class = "home-content">
                            We offer a range of loan products, from short-term operating loans to long-term equipment financing. 
                            Our flexible terms and competitive interest rates ensure that you can choose a solution that aligns with your financial goals.
                            </h3>
                            
                        </div>
                        <div id = "leftpic1">
                            <h2 class = "home-h2">
                                Specialized Agriculture Focus:
                            </h2>
                            <h3 style={{ textAlign: "justify" , fontFamily: "Poppins" ,marginTop:"5%"}}  class = "home-content">
                            Our financial products are designed exclusively for the agricultural community. 
                            We appreciate the challenges you face and tailor our loans to meet the specific needs of your farm or agribusiness.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
        </>
     );
}

export default Home;