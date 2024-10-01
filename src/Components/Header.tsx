import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HiringManagerToggle from './NerdDisplay/NerdToggle';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

const Header = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLinkClick = (url: any) => {
    window.open(url, '_blank');
    handleMenuClose();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Left Side: Portfolio Title and Home Icon */} 
        <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <IconButton color="inherit" onClick={() => navigate('/')}>
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" style={{ marginLeft: '10px' }}>
            Shae West's Portfolio
          </Typography>
        </div>

        <HiringManagerToggle />
        <div>
          <IconButton 
            color="inherit" 
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={() => handleLinkClick('https://www.github.com')}>GitHub</MenuItem>
            <MenuItem onClick={() => handleLinkClick('https://www.linkedin.com')}>LinkedIn</MenuItem>
            <MenuItem onClick={() => handleLinkClick('mailto:youremail@example.com')}>Email</MenuItem>
            <MenuItem onClick={() => handleLinkClick('https://discord.com')}>Discord</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
