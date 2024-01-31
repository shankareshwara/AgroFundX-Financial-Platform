import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import { useSelector } from "react-redux";
import { Paper } from "@mui/material";
import { FaCircleUser } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import '../assets/css/Profile.css'
import { Button } from '@mui/material';


const Profile = () => {
    const [isOpen, setOpen] = useState(false);
    const [isOpen2, setOpen2] = useState(false);
    const [isEdit, setEdit] = useState(false);

    // const { driverDetails } = useSelector((state) => state.master);

    useEffect(() => {
        AOS.init();
    }, []);

    // console.log(driverDetails);

    return (
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{duration:1}}
            >

            <div className="profile-root">
                <div style={{ display:"flex",margin:"0 auto"}}>
                    <div
                        style={{ display: "flex", justifyContent: "center", width: "50%" }}
                    >
                        <motion.div
                            layout
                            transition={{ layout: { duration: 1 }, type: "spring" }}
                            className="card"
                            onClick={() => setOpen(!isOpen)}
                        >
                            <Paper elevation={16}>
                                <motion.h1 layout="position" id="profile-head">
                                    <FaCircleUser size={40} />
                                </motion.h1>

                                {isOpen && (
                                    <motion.div>
                                        <div className="profile-card-content">
                                            <div
                                                style={{
                                                    display: "grid",
                                                    gridTemplateColumns: "1fr 1fr",
                                                    gridGap: "20px",
                                                    margin: "20px",
                                                }}
                                            >
                                                <div className="profile-field">
                                                    <h3>Email ID</h3>
                                                </div>
                                                <div className="profile-value">
                                                    <h3>SHANKAR</h3>
                                                </div>
                                                <div>
                                                    <h3 className="profile-field">Username</h3>
                                                </div>
                                                <div className="profile-value">
                                                    <h3>SHANKAR</h3>
                                                </div> 
                                                <div className="profile-field">
                                                    <h3>Phone Number</h3>
                                                </div>
                                                <div className="profile-value">
                                                    <h3>shankar</h3>
                                                </div>
                                                <div className="profile-field">
                                                    <h3>address</h3>
                                                </div>
                                                <div className="profile-value">
                                                    <h3>address</h3>
                                                </div>
                                                <div className="profile-field">
                                                    <h3>loan id</h3>
                                                </div>
                                                <div className="profile-value">
                                                    <h3>loan</h3>
                                                </div>
                                                <div className="profile-field">
                                                    <h3>monthly emi</h3>
                                                </div>
                                                <div className="profile-value">
                                                    <h3>0</h3>
                                                </div>
                                            <div>
                                                {/* <button onClick = {()=> setEdit(true)}>edit</button> */}
                                                <Button variant="contained" onClick = {()=> setEdit(true)}>edit</Button>

                                            </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </Paper>
                        </motion.div>

                    </div>
                    <div style={{width:"50%",display:"grid",placeItems:"center"}}>
                        <div data-aos="zoom-in-up" data-aos-duration="3000">
                            {!isEdit?(
                            <h1 style={{ color: "white", fontSize: "60px", textAlign: "center", marginTop: "30px" }}>
                                Get a closer look at your profile
                            </h1>
                            ):(
                                <motion.div
                                layout
                                transition={{ layout: { duration: 1 }, type: "spring" }}
                                className="card"
                                onClick={() => setOpen2(!isOpen2)}
                            >
                                <Paper elevation={16}>
                                    <motion.h1 layout="position" id="profile-head">
                                        <FaCircleUser size={40} />
                                    </motion.h1>
    
                                    {isEdit&& (
                                        <motion.div>
                                            <div className="profile-card-content">
                                                <div
                                                    style={{
                                                        display: "grid",
                                                        gridTemplateColumns: "1fr 1fr",
                                                        gridGap: "20px",
                                                        margin: "20px",
                                                    }}
                                                >
                                                    <div className="profile-field">
                                                        <h3>Email ID</h3>
                                                    </div>
                                                    <div className="profile-value">
                                                    <input type="text" className="input" placeholder="email" />
                                                    </div>
                                                    <div>
                                                        <h3 className="profile-field">Username</h3>
                                                    </div>
                                                    <div className="profile-value">
                                                    <input type="text" className="input" placeholder="Name" />
                                                    </div> 
                                                   
                                                    <div className="profile-field">
                                                        <h3>address</h3>
                                                    </div>
                                                    <div className="profile-value">
                                                    <input type="text" className="input" placeholder="address" />
                                                    </div>
                                                <div>
                                                    {/* <button onClick = {()=> setEdit(false)}>done</button> */}
                                                    <Button variant="contained" onClick = {()=> setEdit(false)}>done</Button>
                                                </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </Paper>
                            </motion.div>
                            )
}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Profile;