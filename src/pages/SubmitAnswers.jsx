import { Box, Grid, Typography, TextField, Button } from '@mui/material'
import React from 'react'
import { RoundTitle } from '../components/RoundTitle'
import { RoundCard } from '../components/RoundCard'
export const SubmitAnswers = () => {


  const handleSubmit = (e) => {

  }


  return (
    <RoundCard fullHeight={true}>
        <RoundTitle 
            num=""
            name="Submit Answers"
            marking="Go back and check your answers before submitting below"
        />
        <Box sx={{ p: 4}}>
          <Grid container spacing={2} direction="column" alignItems="center">
            <Grid item xs={12} sx={{ mt: 4}}>
              <Typography variant="h6" color="primary">
                Almost done!
              </Typography>
            </Grid>
            ________________________________________

            <Grid item xs={12}>
              <Typography variant="body1" color="secondary">
                Use the menu above to go back and check you've answered everything
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" color="secondary">
                Enter your name or a nickname below. (Please do not use your email address)
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" color="secondary">
                You can heck back in a couple of weeks to see how you're doing
              </Typography>
            </Grid>
            ________________________________________

            <Grid item xs={12}>
              <Typography variant="body1" color="primary">
                Good luck!
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box component="form" sx={{ mt: 2 }}> 
                <TextField  fullWidth />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 2}}
                  color="primary"
                  fullWidth>SUBMIT</Button>
              </Box>
            </Grid>
          </Grid>
        </Box>

    </RoundCard>
  )
}