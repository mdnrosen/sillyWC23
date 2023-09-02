import React from 'react'

import { Box, Card, CardContent, FormControl, Grid } from '@mui/material'

import { RoundTitle } from '../components/RoundTitle'
import { QuestionTitle } from '../components/QuestionTitle'

export const FiftyFiftyRound = () => {
    return (
        <Card sx={{ py: 1 }}>
            <RoundTitle
                num="3"
                name="Fifty Fifty"
                marking="5pts for each correct"
            />
            <CardContent>
                <Box component="form">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <QuestionTitle
                                    title="True or false. There will be a super over."
                                    num="1"
                                    question=""
                                    hint=""
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <QuestionTitle
                                    title="Pace or spin. What will take more wickets?"
                                    num="2"
                                    question=""
                                    hint=""
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>

                                <QuestionTitle
                                    title="Bat or chase. Captains will choose to do either more?"
                                    num="3"
                                    question=""
                                    hint=""
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <QuestionTitle
                                    title="Bat first or chase. Which will win more games?"
                                    num="4"
                                    question=""
                                    hint=""
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <QuestionTitle
                                    title="Who wins. India or Pakistan or Game cancelled?"
                                    num="5"
                                    question=""
                                    hint=""
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                </Box>
            </CardContent>
        </Card>
    )
}

/*

QUESTIONS:

True or false. There will be a super over.
Pace or spin. What will take more wickets?
Bat or chase. Captains will choose to do either more?
Bat first or chase. Which will win more games?
Who wins. India or Pakistan or Game cancelled? 

Consider using radio buttons or an even more preferable alternative like:
-> https://mui.com/material-ui/react-toggle-button/

Two components available:

1. **RoundTitle Component**
2. **QuestionTitle Component**

The "Round" should be implemented as a <Card /> component. 
Apply sx={{ my: 2 }} styling to it, similar to how it's done for the "EnglandRound" and "StandingsRound".

*/