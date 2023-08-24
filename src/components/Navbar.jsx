import { IconButton, Card, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'

export const Navbar = () => {
  return (
    <Card>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
            <Typography variant="h6" color="primary" sx={{ flexGrow: 1 }}>
                SILLY WORLD CUP 2023
            </Typography>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
            >
                <MenuIcon />
            </IconButton>
        </Toolbar>
    </Card>
  )
}
