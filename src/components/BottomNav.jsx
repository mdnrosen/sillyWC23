import { Button, Card, Toolbar, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export const BottomNav = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const [ next, setNext ] = useState(null)
    const [ prev, setPrev ] = useState(null)

    const rounds = [
        '/england',
        '/numbers',
        '/fiftyfifty',
        '/multis',
        '/standings',
        '/submit'
        
    ]

    useEffect(() => {
      const current = location.pathname
      const index = rounds.indexOf(current)

      setNext(index === 5 ? null : rounds[index+1])
      setPrev(index === 0 ? null : rounds[index-1])
    },[location])

  
  if (
    location.pathname === '/' || 
    location.pathname === '/submit' ||
    location.pathname === '/submitted'
    
    ) return null // don't render bottom nav on home page
  return (
    <Card sx={{ pb: 2 , px: { xs: 2 }}}>
      <Toolbar>
        <Grid container>
          <Grid item xs={6} textAlign="left">
            {prev &&
              <Button
                onClick={() => navigate(prev)} 
                variant="contained" 
                color="secondary">
                Back
              </Button>
            }
            
          </Grid>
          <Grid item xs={6} textAlign="right">
            {next &&
              <Button
                onClick={() => navigate(next)} 
                variant="contained" 
                color="secondary">
                Next
              </Button>
            }
          </Grid>
        </Grid>
      </Toolbar>
    </Card>
  )
}
