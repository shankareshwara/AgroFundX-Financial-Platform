import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import '../assets/css/Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Swal from "sweetalert2";
import Sidebar from './Sidebar';
import { useSelector ,useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { deleteUser , deleteEmail , deleteToken, deleteUserDetails } from './Stores/MasterSlice';
import { removeAdminPresent } from './Stores/MasterSlice';
import Sidebar2 from './Sidebar2';
// import { useNavigate } from 'react-router';

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const { FarmerDetails } = useSelector((state) => state.master);
  const dispatch = useDispatch();
  const navigate =useNavigate();
  const  {user}  = useSelector((state) => state.master);
  const  {adminpresent}  = useSelector((state) => state.master);
  const [present , setPresent] = React.useState(false);;
  useEffect(() => {
   if(user.role === "user" || adminpresent){
    setPresent(true);
  }
  else{
     setPresent(false);

   }
}, );
  
  const  handleChange = (event) => {
    setAuth(event.target.checked);
  };
  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const eventLogOut = () => {
    let timerInterval;
    Swal.fire({
      title: "Successfully LoggedOut !",
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
      setAnchorEl(null);
      dispatch(deleteUser());
      dispatch(deleteEmail());
      dispatch(deleteToken());
      dispatch(deleteUserDetails());
      // setLogin(false);
        console.log("hello")
        setPresent(false);
        dispatch(removeAdminPresent(false));
      navigate("/login");
    }, 3000);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative">
        <Toolbar>
                {user.role === "user" ? (
            <Sidebar/>
        ) : (
            adminpresent ? 
            (<Sidebar2/>)
             : (null)
        )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}
            style={
              {fontWeight:"800"}
            }>
              <Link to= "/" 
                style={{
                    textDecoration: "none",
                    color: "white",
                    
                }} class = "heading">
            agro fundX
              </Link>
          </Typography>
          {
          !adminpresent ?(
            
          <Link to= "/customer"
            style={{
                textDecoration: "none",
                color: "black",
                
            }}
            >
                <Typography textAlign="center"
                style={{
                    fontSize:"20px",

                }}>
                  contact
                </Typography>
          </Link>
          ):(null)}
           {
          !adminpresent ?(
            
          <Link to= "/about"
            style={{
                textDecoration: "none",
                color: "black",
               
              }}
              >

                <Typography textAlign="center"
                    style={{
                        fontSize:"20px",
                        paddingLeft: "20px",
                        fontWeight:"10px",

                    }}
                >
                  about
                </Typography>
          </Link>
          ):(<p></p>)}
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />

              </IconButton>
              {present ? 
                (

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >

            <MenuItem onClick={handleClose}>
              {user.role === "user" ?(
                <div>
                  <Link
                        to="/Profile"
                        style={{
                          textDecoration: "none",
                          color: "black",
                         
                        }}
                      >
                        <Typography class = "menu-item">
                          profile
                        </Typography>
                      </Link>
                  <Link
                        to="/DashBoard2"
                        style={{
                          textDecoration: "none",
                          color: "black",
                         
                        }}
                      >
                        <Typography class = "menu-item">
                          Dashboard
                        </Typography>
                      </Link>
                      </div>
                     
              ):(
                <Link
                to="/DashBoard"
                style={{
                  textDecoration: "none",
                  color: "black",
                 
                }}
              >
                <Typography class = "menu-item">
                  dashboard
                </Typography>
              </Link>
              )}
                    </MenuItem>
                    <MenuItem onClick={eventLogOut}>
                        <Typography class = "menu-item">
                          Logout
                        </Typography>
                    </MenuItem>
              </Menu>
                ):(
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >

                <MenuItem onClick={handleClose}>
                <Link
                        to="/Login"
                        style={{
                          textDecoration: "none",
                          color: "black",
                         
                        }}
                      >
                        
                        <Typography class = "menu-item">
                          login
                        </Typography>
                      </Link>
                    </MenuItem>
                {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
              </Menu>
                ) 
            }
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}