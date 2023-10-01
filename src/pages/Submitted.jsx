import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
export const Submitted = () => {
  return (

    <Grid sx={{ mt: 10 }}container spacing={3} direction="column" justifyContent="center" alignItems='center'>
        <Grid item xs={12} textAlign="center">
            <Box>
                <CheckCircle color="secondary" sx={{ fontSize: 50 }} />
            </Box>
            <Typography variant="h5" color="secondary" sx={{mt: 2}}>
                Your answers have been submitted!
            </Typography>
            <Typography variant="h6" color="primary" textAlign="center" sx={{ mt: 2}}>
                Check back here soon to see how you're getting on
            </Typography>
        </Grid>
    </Grid>
  )
}
