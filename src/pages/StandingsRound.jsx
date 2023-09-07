import React from 'react'
import { Box, CardContent, FormControl, Grid } from '@mui/material'

import { useGuesses} from '../context/GuessContext'
import teamData from '../assets/data/teams.json'
import { RoundTitle } from '../components/RoundTitle'
import { QuestionTitle } from '../components/QuestionTitle'
import { RoundCard } from '../components/RoundCard'
import { TeamList } from '../components/TeamList'
import { DragAndDrop } from '../components/DragAndDrop'

export const StandingsRound = () => {
const { updateArrayAnswer } = useGuesses()

  return (
    <RoundCard>
        <RoundTitle 
            num="5"
            name="Group Standings"
            marking="5pts correct, 3pts one out, 1pt two out"
        />
        <CardContent>
            <Box component="form">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <QuestionTitle 
                                title="Group Standings"
                                num="1"
                                hint="Just drag and drop"
                                question="Select your final group standings"                    
                            />
                        <DragAndDrop
                            initialData={teamData}
                            questionName="standings"
                        />
                        {/* <TeamList updateStandings={updateStandings} /> */}
                        </FormControl>
                    </Grid>
                </Grid>
            </Box>
        </CardContent>
    </RoundCard>
  )
}
