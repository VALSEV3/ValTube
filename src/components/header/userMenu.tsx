import { Menu } from "@mui/material";
import * as React from "react";
import {IconButton,MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { User } from "firebase/auth";
import {auth} from '../../firebase-config'
import Theme from "./theme";

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [user, setUser] = React.useState<User | null>(null);

const logOut=async()=>{
  try {
    await auth.signOut();
    alert('User logged out successfully');
    console.log('User logged out successfully');
    localStorage.setItem('user','')
  } catch (error) {
    console.error('Error logging out:', error);
  }
}

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); 
    }
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        id="user-button"
        aria-controls={open ? 'userMenu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        
      >
        {!user?.photoURL? (
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="grey" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
          </svg>
        ) : (
          <img src={user.photoURL} alt="User Avatar" width="39" height="39" style={{borderRadius:"50%"}}/>
        )}
      </IconButton>
  <Menu id="userMenu"   anchorEl={anchorEl}
  open={open}
  onClose={handleClose}
  MenuListProps={{
    'aria-labelledby': 'user-button',

  }}
  sx={{
    '& .MuiPaper-root': {
      width: 260,
      height: 'auto',
color:'var(--color) !important',
backgroundColor: "var(--background-color)",
    },
    
  }}
  >
       {!user?(
         <MenuItem onClick={handleClose}>
        <Link style={{width:"100%"}} to="/signup">Log In</Link>
        </MenuItem>
       ):(
        <>{ user.photoURL &&(
           <img src={user.photoURL}  width="59" height="59" style={{borderRadius:"50%",margin:"20px",marginBottom:'0px'}}/>
        )
        }
          
        
       
        <p style={{fontSize:"19px",margin:"20px",marginBottom:'4px',marginTop:'4px'}}>{user.displayName}</p>
          <p style={{fontSize:"14px",margin:"20px",marginTop:"0px"}}>{user.email}</p>
        <MenuItem onClick={handleClose}>
        <Link style={{width:"100%"}} to="/profile">Profile</Link>
        </MenuItem>
        <MenuItem onClick={() => { handleClose(); logOut(); }}>
        <Link style={{width:"100%"}} to="/signup">Log Out</Link>
        </MenuItem>
        </>
    
       )
       }
       <MenuItem onClick={handleClose}>
       <Theme/>
       </MenuItem>
  </Menu>

  </>
    
)
}

export default UserMenu

