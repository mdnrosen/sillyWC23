import React, { useState, useEffect } from 'react'

import { Box, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, Toolbar, Typography } from '@mui/material'
import { RoundTitle } from '../components/RoundTitle'
import { QuestionTitle } from '../components/QuestionTitle'
import { RoundCard } from '../components/RoundCard'
import { useGuesses } from '../context/GuessContext'
import squads from '../assets/data/squads.json'
import { getOptions } from '../utils/helpers'
import { DoubleSelect } from '../components/DoubleSelect'
import { DragAndDrop } from '../components/DragAndDrop'

import bigFour from '../assets/data/bigFour.json'

export const MultiRound = () => {
    const { guesses, updateGuesses, updateArrayAnswer } = useGuesses()
    const allPlayers = squads.map(squad => squad.players).flat()
    const bowlers = allPlayers.filter(p => p.bowler)

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
                        <DoubleSelect 
                            placeholders={[
                                'First Choice', 
                                'Second Choice'
                            ]}
                            names={[
                                'multi_sixes_1',
                                'multi_sixes_2'
                            ]}
                            options={getOptions(allPlayers, 'name', 'name')}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <QuestionTitle 
                            title="Gun fielding"
                            num="20"
                            question="Pick 2 players. +10 point for each run out"
                            hint="Fielder points, bowler or keeper assists don't count"
                        />
                        <DoubleSelect 
                            placeholders={[
                                'First Choice', 
                                'Second Choice'
                            ]}
                            names={[
                                'multi_runouts_1',
                                'multi_runouts_2'
                            ]}
                            options={getOptions(allPlayers, 'name', 'name')}
                        />
                    </Grid>


                    <Grid item xs={12}>
                        <QuestionTitle 
                            title="Howzat!?"
                            num="21"
                            question="Pick 2 bowlers. +1 point for every wicket they take"
                            hint="In 2019, Mitchell Starc took the most (27)"
                        />
                        <DoubleSelect 
                            placeholders={[
                                'First Choice', 
                                'Second Choice'
                            ]}
                            names={[
                                'multi_wickets_1',
                                'multi_wickets_2'
                            ]}
                            options={getOptions(bowlers, 'name', 'name')}
                        />
                    </Grid>


                    <Grid item xs={12}>
                        <QuestionTitle
                            title="Last WC?"
                            num="23"
                            question="Place the 'Big 4' in order of runs scored. +2 for each correct"
                        />
                        <DragAndDrop 
                            initialData={bigFour}
                            questionName="multi_bigfour"
                        />
                    </Grid>

                </Grid>
            </Box>
        </CardContent>
    </RoundCard>
  )
}
