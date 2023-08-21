import React, { useEffect, useState } from 'react'
import { Avatar, Box, Card, ListItem, ListItemAvatar, ListItemText, Toolbar, Typography } from '@mui/material' 
import teams from '../assets/data/teams.json'


export const TeamList = () => {
    const [ data, setData ] = useState(teams)

  return (
    <Box sx={{ width: { xs: '100%', lg: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}}>
        <Toolbar></Toolbar>
        <Box>
        {teams.map(team => (
            <Card>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar 
                            variant="square"
                            size="lg"
                            src={team.image}
                            alt={team.name}
                        />
                    </ListItemAvatar>
                    <ListItemText 
                        primary={<Typography color="primary" variant="overline">{team.name}</Typography>}
                    />         
                </ListItem>
            </Card>
        ))}
    </Box>
    </Box>
  )
}
