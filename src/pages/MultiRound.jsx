import React, { useState, useEffect } from 'react'

import { Box, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, Toolbar, Typography } from '@mui/material'
import { RoundTitle } from '../components/RoundTitle'
import { QuestionTitle } from '../components/QuestionTitle'
import { RoundCard } from '../components/RoundCard'
import { useGuesses } from '../context/GuessContext'
import squads from '../assets/data/squads.json'
import { getOptions } from '../utils/helpers'


export const MultiRound = () => {
    const { guesses, updateGuesses } = useGuesses()
    const [ allPlayers, setAllPlayers ] = useState(squads.map(squad => squad.players).flat())    

    const handleChange = (e) => {
        const { name, value } = e.target
        updateGuesses(name, value)
    }

  return (
    <RoundCard>
        <RoundTitle 
            num="4"
            name="Randoms"
            marking="Marking different for each question"
        />
        <CardContent>
            <Box component="form" onChange={handleChange}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <QuestionTitle 
                            title="Bigus Hittus"
                            num="19"
                            question="Pick 2 players. +1 point for each six they hit."
                            hint="In 2019, Eoin Morgan hit the most (22)."
                        />
                        <Grid item container spacing={2}>
                            <Grid item xs={6}>
                                <FormControl fullWidth>
                                    <Select
                                        onChange={handleChange}
                                        placeholder="First choice"
                                        name="multi_sixes_1"
                                        value={guesses['multi_sixes_1'] || ''}
                                    >
                                {allPlayers && getOptions(allPlayers, 'name', 'name').map((opt, i) => (
                                         <MenuItem 
                                            key={i} 
                                            value={opt.value} 
                                            disabled={opt.value === guesses['multi_sixes_2']}
                                        >{opt.label}</MenuItem>                                ))}
                                    </Select>
                                </FormControl>  
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth>
                                    <Select
                                        onChange={handleChange}
                                        placeholder="Second choice"
                                        name="multi_sixes_2"
                                        value={guesses['multi_sixes_2'] || ''}
                                    >
                                        {allPlayers && getOptions(allPlayers, 'name', 'name').map((opt, i) => (
                                            <MenuItem 
                                                key={i} 
                                                value={opt.value} 
                                                disabled={opt.value === guesses['multi_sixes_1']}
                                            >{opt.label}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </CardContent>
    </RoundCard>
  )
}
