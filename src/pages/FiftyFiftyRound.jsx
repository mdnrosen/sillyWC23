import React from 'react'

import { Box, CardContent, FormControl, Grid } from '@mui/material'

import { RoundTitle } from '../components/RoundTitle'
import { RoundCard } from '../components/RoundCard'
import { QuestionTitle } from '../components/QuestionTitle'
import { useGuesses } from '../context/GuessContext'
import { ToggleGroup } from '../components/ToggleGroup'

export const FiftyFiftyRound = () => {

    const { updateGuesses, guesses } = useGuesses()

    const handleChange = (e) => {
        const { name, value } = e.target
        updateGuesses(name, value)
        console.log(guesses);
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
                                        values={{ name: "h2h_superover", value1: "true", value2: "false" }}
                                        labels={{ groupLabel: "true or false", buttonLabel1: "true", buttonLabel2: "false" }}
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
                                        values={{ name: "h2h_pacespin", value1: "pace", value2: "spin" }}
                                        labels={{ groupLabel: "pace or spin", buttonLabel1: "pace", buttonLabel2: "spin" }}
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
                                        values={{ name: "h2h_tossDecision", value1: "bat first", value2: "bowl first" }}
                                        labels={{ groupLabel: "true or false", buttonLabel1: "bat more", buttonLabel2: "chase more" }}
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
                                        values={{ name: "h2h_bat-v-chase", value1: "bat first", value2: "chase total" }}
                                        labels={{ groupLabel: "bat wins more or chase wins more", buttonLabel1: "bat first wins more", buttonLabel2: "chase wins more" }}
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
                                        values={{
                                            name: "h2h_india_v_pakistan",
                                            value1: "india",
                                            value2: "pakistan",
                                            value3: "neither"
                                        }}
                                        labels={{
                                            groupLabel: "india, pakistan or game cancelled",
                                            buttonLabel1: "India wins", buttonLabel2: "Pakistan wins",
                                            buttonLabel3: "neither: game cancelled"
                                        }}
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