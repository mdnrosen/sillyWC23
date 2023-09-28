import { ListItem, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const RoundTitle = ({ num, name, marking }) => {
  return (
    <Toolbar sx={{ backgroundColor: 'secondary.main', color: 'black', py: 4, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' , alignItems: 'flex-start' }}>
        <Typography color="black" variant="h5">
            {num && `ROUND ${num} - `} {name.toUpperCase()}
        </Typography>
        <Typography color="black" variant="body2">
          {marking}
        </Typography>
    </Toolbar>
  )
}
