import React from 'react'

import { Box, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, Toolbar, Typography } from '@mui/material'
import { RoundTitle } from '../components/RoundTitle'
import { QuestionTitle } from '../components/QuestionTitle'
import { RoundCard } from '../components/RoundCard'
import { useGuesses } from '../context/GuessContext'
import squads from '../assets/data/squads.json'

export const MultiRound = () => {
    const { guesses } = useGuesses()
    const allPlayers = squads.reduce((acc, cv) => {
        const { players } = cv
       return {
        ...acc,
        
       }
    },[])

  return (
    <RoundCard>
        <RoundTitle 
            num="4"
            name="Randoms"
            marking="Marking different for each question"
        />
        <CardContent>
            <Box component="form">
                <Grid container spacing={2}>
                    
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <QuestionTitle 
                                title="Bigus Hittus"
                                num="19"
                                question="Pick 2 players. +1 point for each six they hit."
                                hint="Simples, right?"
                            />
                            <Grid item container>
                                <Grid item xs={6}>
                                    <Select
                                        name="multi_sixes"
                                        value={guesses['multi_sixes'] || ''}
        

                                    ></Select>
                                </Grid>
                            </Grid>


                        </FormControl>
                    </Grid>

                </Grid>
            </Box>
        </CardContent>
    </RoundCard>
  )
}
