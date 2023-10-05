import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Lock } from '@mui/icons-material';
export const Locked = () => {
  return (

    <Grid sx={{ mt: 10 }}container spacing={3} direction="column" justifyContent="center" alignItems='center'>
        <Grid item xs={12} textAlign="center">
            <Box>
                <Lock color="secondary" sx={{ fontSize: 50 }} />
            </Box>
            <Typography variant="h5" color="secondary" sx={{mt: 2}}>
                The quiz is now closed.
            </Typography>
            <Typography variant="h6" color="primary" textAlign="center" sx={{ mt: 2}}>
                Check back soon for updates
            </Typography>
        </Grid>
    </Grid>
  )
}
