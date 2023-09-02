import React from 'react'
import { Box, Card, CardContent, FormControl, Grid } from '@mui/material'

import { RoundTitle } from '../components/RoundTitle'
import { QuestionTitle } from '../components/QuestionTitle'
import { TeamList } from '../components/TeamList'
import { useGuesses} from '../context/GuessContext'

export const StandingsRound = () => {
const { updateStandings } = useGuesses()



  return (
    <Card sx={{ py: 1 }}>
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
                        <TeamList updateStandings={updateStandings} />
                        </FormControl>
                    </Grid>
                </Grid>
            </Box>
        </CardContent>

    </Card>
  )
}
