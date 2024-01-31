import React from 'react'
import '../assets/css/Customer_Support.css'
import Customer_Bottom from '../components/Customer_Bottom';
import { Button } from '@mui/material';

const Customer_Support = () => {
    return (
        <div>
            <div id='head-trans'>
                <h1 style={{ textAlign: "center", marginTop: "50px", fontStyle: "font-family: 'Titillium Web', sans-serif", fontSize: "40px" }}>
                <span style= {{color :"#fc3355" , fontSize :"43px"}}>W</span>elcome to our Agro FundX app customer care! We're here to provide you with the best support. How can we assist you today?</h1>
                <h3 style={{ marginTop: "50px", marginBottom: "60px", textAlign: "justify", marginLeft: "50px", marginRight: "50px" }}>You can reach our customer support team through various channels, such as phone, email, or live chat, depending on your convenience. We are available 24/7, ensuring that assistance is just a call or message away. At our Agro FundX app customer support, we value your feedback and take it seriously. Your input helps us continuously improve our services and enhance your overall experience. We aim to build long-term relationships with our customers by delivering reliable, responsive, and personalized support.</h3>
            </div>


            <div style={{ minHeight: "80vh", backgroundAttachment: "fixed" }}>
                <Customer_Bottom />
            </div>
                <h1 style={{ textAlign: "center", fontStyle: "font-family: 'Titillium Web', sans-serif", fontSize: "35px" }} >Customer satisfaction is our top priority</h1>
            <div className='cus' >
                {/* <div className='vasa777'> */}
        <div className="wrapper">
            <div className="title33">
                <h1>Contact Us Form</h1>
            </div>
            <div className="contact-form">
                <div className="input-fields">
                    <input type="text" className="input" placeholder="Name" />
                    <input type="text" className="input" placeholder="Email Address" />
                    <input type="text" className="input" placeholder="Phone" />
                    <input type="text" className="input" placeholder="Subject" />
                </div>
                <div className="msg">
                    <textarea placeholder="Message"></textarea>
                    <Button variant="contained">send</Button>
                </div>
            </div>
        </div>
        </div>



            </div>


        // </div>
    )
}

export default Customer_Support