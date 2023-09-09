import React from 'react'

import { Box, CardContent, FormControl, Grid } from '@mui/material'

import { RoundTitle } from '../components/RoundTitle'
import { RoundCard } from '../components/RoundCard'
import { QuestionTitle } from '../components/QuestionTitle'
import { useGuesses } from '../context/GuessContext'
import { ToggleGroup } from '../components/ToggleGroup'

export const FiftyFiftyRound = () => {

    const { updateGuesses } = useGuesses()

    const handleChange = (e) => {
        const { name, value } = e.target
        updateGuesses(name, value)
    }

    return (
        <RoundCard>
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
                                    title="Oh no, not another one!?"
                                    num="14"
                                    question="There will be a super over."
                                    hint="Only the semis or final are candidates"
                                />
                                <Box alignSelf={'center'} width={'100%'} maxWidth={'600px'}>
                                    <ToggleGroup
                                        name="h2h_superover"
                                        values={["true", "false"]}
                                        labels={["true or false", "true", "false"]}
                                        handleChange={handleChange}
                                    />
                                </Box>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <QuestionTitle
                                    title="let it turn"
                                    num="15"
                                    question="What will take more wickets?"
                                    hint=""
                                />
                                <Box alignSelf={'center'} width={'100%'} maxWidth={'600px'}>
                                    <ToggleGroup
                                        name="h2h_pacespin"
                                        values={["pace", "spin"]}
                                        labels={["pace or spin", "pace", "spin"]}
                                        handleChange={handleChange}
                                    />
                                </Box>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <QuestionTitle
                                    title="Win the toss and..."
                                    num="16"
                                    question="What will teams opt to do more?"
                                    hint=""
                                />
                                <Box alignSelf={'center'} width={'100%'} maxWidth={'600px'}>
                                    <ToggleGroup
                                        name="h2h_tossDecision"
                                        values={["bat first", "bowl first"]}
                                        labels={["true or false", "bat more", "chase more"]}
                                        handleChange={handleChange}
                                    />
                                </Box>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <QuestionTitle
                                    title="runs on the board?"
                                    num="17"
                                    question="Which will win more games?"
                                    hint=""
                                />
                                <Box alignSelf={'center'} width={'100%'} maxWidth={'600px'}>
                                    <ToggleGroup
                                        name="h2h_bat-v-chase"
                                        values={["bat first", "chase total"]}
                                        labels={["bat wins more or chase wins more", "bat first wins more", "chase wins more"]}
                                        handleChange={handleChange}
                                    />
                                </Box>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <QuestionTitle
                                    title="This is it. The big one."
                                    num="18"
                                    question="India or Pakistan or Game Cancelled?"
                                    hint="Neither can mean rain or politics..."
                                />
                                <Box alignSelf={'center'} width={'100%'} maxWidth={'600px'}>
                                    <ToggleGroup
                                        name="h2h_india_v_pakistan"
                                        values={["india", "pakistan", "neither"]}
                                        labels={["india, pakistan or game cancelled", "India wins", "Pakistan wins", "neither: game cancelled"]}
                                        handleChange={handleChange}
                                    />
                                </Box>
                            </FormControl>
                        </Grid>

                    </Grid>
                </Box>
            </CardContent>
        </RoundCard>
    )
}

// TODO: Miles/James - provide hint text, update hint props accordingly