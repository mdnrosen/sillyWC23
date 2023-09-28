import { IconButton, ListItem, ListItemText, Toolbar, Tooltip, Typography } from '@mui/material'
import { HelpOutline } from '@mui/icons-material'
import React from 'react'

export const QuestionTitle = ({ num, title, question, hint }) => {
  return (
    <Toolbar sx={{ py: 1, display: 'flex', justifyContent: 'space-between' , alignItems: 'center', pt: 2 }} disableGutters>
        <ListItem
            secondaryAction={
                <Tooltip title={hint} enterTouchDelay={0}>
                    <IconButton>
                        <HelpOutline />
                    </IconButton>
                </Tooltip>
            }
            
        >
          <ListItemText 
            primary={
                <Typography color="secondary" variant="h6">
                    Q{num}. {title.toUpperCase()}
                </Typography>
                }
                secondary={<Typography color="primary" variant="body1">{question}</Typography>}
          />
        </ListItem>
    </Toolbar>
  )
}
