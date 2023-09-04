import React from 'react'

import { Box, Card, CardContent, FormControl, Grid, ToggleButton, ToggleButtonGroup } from '@mui/material'

import { RoundTitle } from '../components/RoundTitle'
import { QuestionTitle } from '../components/QuestionTitle'
import { useGuesses } from '../context/GuessContext'

export const FiftyFiftyRound = () => {

    const { updateGuesses } = useGuesses()

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

// TODO: update Card to RoundCard component on next PR
// TODO: roll out ToggleButtonGroups for all Qs
// TODO: format ToggleButton(Group)s: full width on mobile.
    // ? set max width for desktop?

// TODO: Miles/James - provide hint text, update hint props accordingly