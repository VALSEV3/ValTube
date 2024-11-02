import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from './menu';
import './header.css';
import { useState, useEffect } from 'react';
import UserMenu from './userMenu';

export function Header() {
  const [showText, setShowText] = useState(true); // State to control text visibility

  const handleResize = () => {
    if (window.innerWidth <= 800) {
      setShowText(false);
    } else {
      setShowText(true);
    }
  };

  const handleMenuToggle = () => {
    setShowText((prevShowText) => !prevShowText);
  };

  useEffect(() => {
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
              <img id="youtube" src="youtube.webp" alt="YouTube Logo" style={{ marginRight: '8px', height: '34px' }} />
              <p id="valtube">ValTube</p>
            </a>
          </Typography>
<UserMenu/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
