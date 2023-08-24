import { Button, Toolbar, Grid } from '@mui/material'
import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'



export const BottomNav = () => {
    const rounds = [
        'england',
        'fiftyfifty',
        'numbers',
        'multis',
        'standings'
    ]

    const showPrev = () => {
        return true
    }


  return (
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', background: 'secondary'}}>
        {showPrev() ?? <Button>Previous</Button>}
        <Button>Next</Button>
    </Toolbar>
  )
}
