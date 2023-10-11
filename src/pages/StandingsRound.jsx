import React from 'react'
import { Box, CardContent, FormControl, Grid } from '@mui/material'

import teamData from '../assets/data/teams.json'
import { RoundTitle } from '../components/RoundTitle'
import { QuestionTitle } from '../components/QuestionTitle'
import { RoundCard } from '../components/RoundCard'
import { DragAndDrop } from '../components/DragAndDrop'

export const StandingsRound = () => {

  return (
    <RoundCard>
        <RoundTitle 
            num="5"
            name="Group Standings"
            marking="5pts correct, 3pts one out, 1pt two out"
        />
        <CardContent>x
            <Box component="form">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <QuestionTitle 
                                title="Group Standings"
                                num="23"
                                hint="Press and hold to drag and drop"
                                question="Select your final group standings"                    
                            />
                        <DragAndDrop
                            initialData={teamData}
                            questionName="standings"
                        />
                        </FormControl>
                    </Grid>
                </Grid>
            </Box>
        </CardContent>
    </RoundCard>
  )
}
