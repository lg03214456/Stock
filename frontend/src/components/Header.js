import React, { useContext, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';

export default function ButtonAppBar() {
  const { isLoggedIn, user, logout } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null); // 控制下拉菜單的錨點
    const navigate = useNavigate();

    const handleMenuOpen = (event) => {
      setAnchorEl(event.currentTarget); // 設置錨點元素
  };

  const handleMenuClose = () => {
      setAnchorEl(null); // 關閉菜單
  };

  const handleLogout = () => {
      logout(); // 執行登出邏輯
      setAnchorEl(null); // 關閉菜單
      navigate('/login');
  };


    const handleLoginClick = () => {
        navigate('/login'); // 跳轉至 /login
    };
    const ReturnIndexPage = () => {
        navigate('/'); // 跳轉至 /login
    };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Menu
          </Typography>
          <Button color="inherit" onClick={ReturnIndexPage}>Index</Button>
          
          
          {isLoggedIn ? (
                        <>
                            <Button
                                color="inherit"
                                onClick={handleMenuOpen}
                            >
                                {user.username} ▼
                            </Button>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                            >
                                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <Button color="inherit" onClick={handleLoginClick}>
                            Login
                        </Button>
                    )}
       



          {/* <Button color="inherit" onClick={handleLoginClick}>Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}