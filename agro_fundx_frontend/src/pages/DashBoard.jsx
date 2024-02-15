import React, { useEffect, useState } from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import '../App.css'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
//  import HomeAppBar from '../components/FarmerHomeNavbar';
import '../assets/css/DashBoard.css'
import { useDispatch, useSelector } from 'react-redux';
import LoanService from '../services/LoanService';

function DashBoard2() {
    const [isClick, setIsClick] = useState(false);
    const dispatch = useDispatch()
    const {TrackedLoanDetails}  = useSelector((state) => state.master);
    const {AllLoanDetails}  = useSelector((state) => state.master);
    const { Token } = useSelector((state) => state.master);
    const { Email } = useSelector((state) => state.master);
    // const location = useLocation();
    // console.log(location.state.trackId);
    useEffect(() => {
        getData();
      }, []);
    
      const getData = async () => {
        try {
          const response = await LoanService.getLoanByEmail(Email);
    
          console.log("response", " ", response);
          dispatch(addTrackedLoanDetails(response.data));
          if(TrackedLoanDetails.length != 0){
            setIsClick(true);
            console.log(TrackedLoanDetails);
          }
          console.log(Email);
        } catch (error) {
          // console.log(Email);
          // console.log(Token);
          console.log(error);
        }
      };
    const data = [
        {
        //   name: 'Monday',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
        //   name: 'Tuesday',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
        //   name: 'Wednesday',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
        //   name: 'Thursday',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
        //   name: 'Friday',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
        //   name: 'Saturday',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        // {
        //   name: 'Page G',
        //   uv: 3490,
        //   pv: 4300,
        //   amt: 2100,
        // },
      ];
     

  return (
    <>
    {/* <HomeAppBar/> */}
    <main className='main-container ml-64  bg-gray-900 h-screen'>
        <div className='main-title'>
            <h3 style={{color:"black"}}><span className='text-orange-600'>WELCOME </span>Applicant</h3>
        </div>

        <div className='main-cards '>
            <div className='card5 ml-20 w-38'>
                <div className='card-inner'>
                    <h3>Applied Loans</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>30</h1>
            </div>
            <div className='card5  ml-20 w-38'>
                <div className='card-inner '>
                    <h3>Accepted Loans</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
            <div className='card5 ml-20 w-38'>
                <div className='card-inner'>
                    <h3>Current Loans</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>5</h1>
            </div>
            {/* <div className='card'>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>42</h1>
            </div> */}
        </div>

        <div className='charts'>
            {/* <ResponsiveContainer width={500} height={500}> */}
            {/* <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            > */}
                {/* <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer> */}
 
            <ResponsiveContainer width={500} height={500}>
                <h1 style={{color:"black"}} className='ml-30'><span className="text-orange-600">Loan</span>  Activities</h1>
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer> 

            <div>
                
            {AllLoanDetails.map((data) => (
          <div className="card1">
            <p className="card-title">applicantName: {data.applicantName}</p>
            <p className="card-title">applicantEmail: {data.applicantEmail}</p>
            <p className="card-title">loanType: {data.loanType}</p>
            <p className="card-title">trackId: {data.trackId}</p>
            <p className="card-title">applicantAddress: {data.applicantAddress}</p>
            <p className="card-title">applicantMobile: {data.applicantMobile}</p>
            <p className="card-title">applicantAadhaar: {data.applicantAadhaar}</p>
            <p className="card-title">applicantPan: {data.applicantPan}</p>
            <p className="card-title">applicantSalary: {data.applicantSalary}</p>
            <p className="card-title">loanAmountRequired: {data.loanAmountRequired}</p>
            <p className="card-title">loanRepaymentMonths: {data.loanRepaymentMonths}</p>
            <p className="card-title">applicantAadhaar: {data.applicantAadhaar}</p>
            <div style={{ display: "flex", paddingLeft: "70px", paddingTop: "20px",flexDirection:"row-reverse" }}>
              {data.status === "accepted" ? (
                <div>
                  <button style={{ color: "white", backgroundColor: "green", width: "100px", borderRadius: "6px", borderColor: "green" }}>Accepted</button>
                </div>
              ) : ( data.status === "Rejected" ?
                <div>
                  <button style={{ color: "white", backgroundColor: "red", width: "100px", borderRadius: "6px", borderColor: "red" }}>Rejected</button>
                </div>
                :(
                <div>
                  <button style={{ color: "white", backgroundColor: "blue", width: "100px", borderRadius: "6px", borderColor: "blue" }}>Applied</button>
                </div>
                )
              )}
            </div>
          </div>
        ))}


            </div>

        </div>
    </main>
    </>
  )
}

export default DashBoard2;