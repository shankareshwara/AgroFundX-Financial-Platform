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
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [login , setLogin] = React.useState(false);

  const  handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
      <AppBar position="static">
        <Toolbar>
            {login ? (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
            ):(null)}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}
            style={
                {fontWeight:"800"}
            }>
            agro fundX
          </Typography>
          <Link to= "/"
            style={{
                textDecoration: "none",
                color: "black",
                
            }}
            >

                <Typography textAlign="center"
                style={{
                    fontSize:"20px",

                }}>
                  home
                </Typography>
          </Link>
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
              {login ? 
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

                </MenuItem>
                <MenuItem onClick={handleClose} class = "menu-item">My account</MenuItem>
                <MenuItem onClick={handleClose} class = "menu-item">Profile</MenuItem>
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