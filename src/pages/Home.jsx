import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { RoundCard } from '../components/RoundCard'
import { useNavigate } from 'react-router-dom'



export const Home = () => {
  const navigate = useNavigate()
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', m: 2, pb: 2 }}>
        <Box 
            component="img" 
            src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/2023_CWC_Logo.svg/440px-2023_CWC_Logo.svg.png" 
            alt="home" 
            sx={{ width: 150, height: 150, mb: 2 }}
        />
        <Typography variant="h5" sx={{ mt: 2 }} color="secondary">
            CWC
        </Typography>
        <Typography variant="h5" sx={{ mt: 2 }} color="secondary">
            Silly Predictions
        </Typography>
        ________________________________________
        <Typography variant="body1" sx={{ mt: 2 }} color="primary">
            Welcome to the silly predictions quiz!
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }} color="secondary">
          Take your time. As long as you are on the same device, your progress will be saved
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }} color="secondary">
          Hover or tap (mobile) on the '?' for help with any question
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }} color="secondary">
          For the questions with lots of options, you can type to search a player
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }} color="primary">
          As always, no prizes. Just a bit of fun. Enjoy.
        </Typography>
        ________________________________________

        <Button 
          variant="contained" 
          fullWidth
          size="large"
          onClick={() => navigate('/england')}
          color="primary" 
          sx={{ mt: 2}}>
            <Typography variant="h6" color="black">
                Start Quiz
            </Typography>
        </Button>
    </Box>
    
  )
}
