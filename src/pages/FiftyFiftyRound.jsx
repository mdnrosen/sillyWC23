import React from 'react'

import { Box, Card, CardContent, FormControl, Grid, ToggleButton, ToggleButtonGroup } from '@mui/material'

import { RoundTitle } from '../components/RoundTitle'
import { QuestionTitle } from '../components/QuestionTitle'
import { useGuesses } from '../context/GuessContext'

export const FiftyFiftyRound = () => {

    const { guesses, updateGuesses } = useGuesses()

    const handleChange = (e) => {
        const { name, value } = e.target
        updateGuesses(name, value)
    }


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
                                    title="True or false"
                                    num="14"
                                    question="There will be a super over."
                                    hint=""
                                />
                                <Box alignSelf={'center'}>
                                    <ToggleButtonGroup
                                        fullWidth
                                        value={guesses['super_over']}
                                        exclusive
                                        onChange={handleChange}
                                        aria-label='true or false'
                                    >
                                        <ToggleButton name="super_over" value="true" aria-label='true'>true</ToggleButton>
                                        <ToggleButton name="super_over" value="false" aria-label='false'>false</ToggleButton>
                                    </ToggleButtonGroup>
                                </Box>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <QuestionTitle
                                    title="Pace or spin"
                                    num="15"
                                    question="What will take more wickets?"
                                    hint=""
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <QuestionTitle
                                    title="Bat or chase"
                                    num="16"
                                    question="Which will captains choose to do more?"
                                    hint=""
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <QuestionTitle
                                    title="Bat first or chase"
                                    num="17"
                                    question="Which will win more games?"
                                    hint=""
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <QuestionTitle
                                    title="Who wins. India or Pakistan or Game cancelled?"
                                    num="18"
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

TODO: populate hints
TODO: update <QuestionTitle> title and/or question props

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