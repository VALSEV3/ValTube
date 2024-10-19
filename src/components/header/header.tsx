import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from './menu';
import './header.css';
import { useState, useEffect } from 'react';

export function Header() {
  const [showText, setShowText] = useState(true); // State to control text visibility

  const handleResize = () => {
    if (window.innerWidth <= 400) {
      setShowText(false);
    } else {
      setShowText(true);
    }
  };

  const handleMenuToggle = () => {
    setShowText((prevShowText) => !prevShowText);
  };

  useEffect(() => {
    // Set the --drawer-width variable based on the showText state
    const drawerWidth = showText ? '280px' : '33px';
    document.documentElement.style.setProperty('--drawer-width', drawerWidth);
  }, [showText]);

  // Add event listener for window resize
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Box sx={{ flexGrow: 1, display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: 'var(--background-color)', color: 'var(--color)', boxShadow: 'none' }}
      >
        <Menu showText={showText} />
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
              <img id="youtube" src="src/assets/youtube.webp" alt="YouTube Logo" style={{ marginRight: '8px', height: '34px' }} />
              <p id="valtube">ValTube</p>
            </a>
          </Typography>
          <Button color="inherit" sx={{ fontSize: '20px', textTransform: 'capitalize' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
            </svg>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
