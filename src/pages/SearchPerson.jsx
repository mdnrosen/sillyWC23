import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { body as people } from '../assets/data/allGuesses.json'

import { Box,  Button, Select, FormControl, MenuItem, TextField, Typography } from '@mui/material'

export const SearchPerson = () => {
  const [ chosen, setChosen ] = useState('')
  const [ search, setSearch ] = useState('')


  const navigate = useNavigate();
  return (
    <Box sx={{ px: 2, my: 5, mx: 'auto', width: { md: '60%'}}}>
        <Typography
            variant="h5"
            color="secondary"
            sx={{ mb: 2, textAlign: 'center' }}
        >Select a person to view their progress
        </Typography>
        {/* <TextField 
            fullWidth
            onChange={(e) => setSearch(e.target.value)} 
        /> */}
        <FormControl fullWidth>
            <Select 
                name="Chosen"
                value={chosen}
                onChange={e => setChosen(e.target.value)}
            >
            {people.map(person => (
                <MenuItem key={person.id} value={person.id}>{person.name}</MenuItem>
            ))}

            </Select>
            <Button
                sx={{ mt: 2}}
                size="large"
                variant="contained"
                color="secondary"
                disabled={!chosen}
                onClick={() => navigate(`/${chosen}`)}
            >View Progress</Button>
        </FormControl>

    </Box>
  )
}
