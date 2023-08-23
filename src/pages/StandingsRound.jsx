import React from 'react'
import { Box, Card, CardContent, FormControl, Grid } from '@mui/material'

import { RoundTitle } from '../components/RoundTitle'
import { QuestionTitle } from '../components/QuestionTitle'
import { TeamList } from '../components/TeamList'

function convertUnicode(input) {
    return input.replace(/\\+u([0-9a-fA-F]{4})/g, (a,b) =>
      String.fromCharCode(parseInt(b, 16)));
  }

export const StandingsRound = () => {
  return (
    <Card sx={{ my: 2 }}>
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
                        </FormControl>
                        <TeamList />
                        <p>{convertUnicode('U+1F1E8')}</p>

                        {/* Drag and drog magic to go here */}

                    </Grid>
                </Grid>
            </Box>
        </CardContent>

    </Card>
  )
}
