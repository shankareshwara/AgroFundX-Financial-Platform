// import '../assets/images/wall2.jpg'
import Hero from "../components/Hero";
import '../assets/css/Home.css'
import Footer from "../components/Footer";
function Home() {
    return ( 
        <>
        <Hero />
            <div className="home">
                {/* <div className="pg1">
                    <div id="rightpic1">
                    </div>
                    <div id="leftpic1">
                        <h1 style={{ marginBottom: "30px", fontSize: "45px", paddingRight: "13%", color:"#fc3355"}} class = "content">Cab Vibe</h1>
                        <h3 style={{ textAlign: "justify" , fontFamily: "Poppins"}} class = "content"><span style= {{color :"#fc3355" , fontSize :"43px"}}>W</span>elcome to our Quik app, the ultimate solution for all your transportation needs! Whether you're 
                        commuting to work, exploring a new city, or simply need a ride, our taxi booking app is here to make your journey effortless and enjoyable.
                       With our Quik , you can say goodbye to the hassle of traditional taxi services and embrace the convenience of modern technology. Our user-friendly
                        interface and robust features ensure a seamless experience from start to finish.</h3>
                    </div>
                </div> */}

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