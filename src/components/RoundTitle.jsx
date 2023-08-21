import { ListItem, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const RoundTitle = ({ num, title, question, hint }) => {
  return (
    <Toolbar sx={{ py: 1, display: 'flex', justifyContent: 'space-between' , alignItems: 'center' }}>
        <ListItem>
          <ListItemText 
            primary={`Q${num} ${title}`}
            secondary={question}
          />
        </ListItem>
    </Toolbar>
  )
}
