import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { RoundCard } from '../components/RoundCard'

export const Home = () => {
  return (
    <RoundCard>
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', m: 2 }}>
        <Box 
            component="img" 
            src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/2023_CWC_Logo.svg/440px-2023_CWC_Logo.svg.png" 
            alt="home" 
            sx={{ width: 200, height: 200, mb: 2 }}
        />
        <Typography variant="h5" sx={{ mt: 2 }} color="secondary">
            CWC - Silly Predictions
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }} color="secondary">
          Unless stating, all questions refer to the round-robin group stage of the tournament
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }} color="secondary">
          Unless stating, all questions refer to the round-robin group stage of the tournament
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }} color="secondary">
          Unless stating, all questions refer to the round-robin group stage of the tournament
        </Typography>
        <Button variant="contained" color="secondary" href="/england" sx={{ mt: 2}}>
            start quiz
        </Button>
    </Box>
    </RoundCard>
    
  )
}
