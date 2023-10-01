import React, { useState} from 'react'
import { Box, IconButton, Card, Menu, MenuItem, Toolbar, Typography, AppBar } from '@mui/material'
import { useNavigate, Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import pages from '../assets/data/pages.json'

export const Navbar = () => {
    const [ anchorEl, setAnchorEl ] = useState(null);
    const open = Boolean(anchorEl);

    const navigate = useNavigate();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
    }

    const handleNavigate = (path) => {
        handleMenuClose()
        navigate(path)   
    }

    const IS_LOCKED = localStorage.getItem('sillywc_submitted')
    
    return (
        <AppBar position='fixed' component="nav" sx={{ mb: 5}}>
            <Toolbar sx={{ display: 'absolute', justifyContent: 'space-between'}}>
                <Typography variant="h6" color="primary" sx={{ flexGrow: 1 }}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        SILLY WORLD CUP 
                    </Link>
                </Typography>
                <Box>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleMenuClose}
                    >
                        {pages.map((page, i) => (
                            <MenuItem
                                disabled={IS_LOCKED}
                                key={i}
                                onClick={() => handleNavigate(page.path)}
                            >
                                {page.label}
                            
                            </MenuItem>
                        ))}

                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
