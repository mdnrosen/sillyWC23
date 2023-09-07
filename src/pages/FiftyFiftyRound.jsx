import React from 'react'

import { Box, CardContent, FormControl, Grid, ToggleButton, ToggleButtonGroup } from '@mui/material'

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
                                    {/* <ToggleButtonGroup
                                        fullWidth
                                        value={guesses['h2h_superover']}
                                        exclusive
                                        color="warning"
                                        onChange={handleChange}
                                        aria-label='true or false'
                                    >
                                        <ToggleButton name="h2h_superover" value="true" aria-label='true'>true</ToggleButton>
                                        <ToggleButton name="h2h_superover" value="false" aria-label='false'>false</ToggleButton>
                                    </ToggleButtonGroup> */}
                                    <ToggleGroup 
                                        name="h2h_superover"
                                        values={{value1: "true", value2: "false"}}
                                        arias={{groupLabel: "true or false", buttonLabel1: "true", buttonLabel2: "false"}}
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
                                    <ToggleButtonGroup
                                        fullWidth
                                        value={guesses['h2h_pacespin']}
                                        exclusive
                                        color="warning"
                                        onChange={handleChange}
                                        aria-label='pace or spin'
                                    >
                                        <ToggleButton name="h2h_pacespin" value="pace" aria-label='pace'>pace</ToggleButton>
                                        <ToggleButton name="h2h_pacespin" value="spin" aria-label='spin'>spin</ToggleButton>
                                    </ToggleButtonGroup>
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
                                    <ToggleButtonGroup
                                        fullWidth
                                        value={guesses['h2h_tossDecision']}
                                        exclusive
                                        color="warning"
                                        onChange={handleChange}
                                        aria-label='chose to bat more or chase more'
                                    >
                                        <ToggleButton name="h2h_tossDecision" value="bat" aria-label='bat more'>Bat first</ToggleButton>
                                        <ToggleButton name="h2h_tossDecision" value="bowl" aria-label='chase more'>Bowl first</ToggleButton>
                                    </ToggleButtonGroup>
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
                                    <ToggleButtonGroup
                                        fullWidth
                                        value={guesses['h2h_bat-v-chase']}
                                        exclusive
                                        color="warning"
                                        onChange={handleChange}
                                        aria-label='bat wins more or chase wins more'
                                    >
                                        <ToggleButton name="h2h_bat-v-chase" value="bat_wins" aria-label='bat first wins more'>bat first</ToggleButton>
                                        <ToggleButton name="h2h_bat-v-chase" value="chase_wins" aria-label='chase wins more'>chase total</ToggleButton>
                                    </ToggleButtonGroup>
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
                                    <ToggleButtonGroup
                                        fullWidth
                                        value={guesses['h2h_india_v_pakistan']}
                                        exclusive
                                        color="warning"
                                        onChange={handleChange}
                                        aria-label='india, pakistan or game cancelled'
                                    >
                                        <ToggleButton name="h2h_india_v_pakistan" value="india" aria-label='India wins'>india</ToggleButton>
                                        <ToggleButton name="h2h_india_v_pakistan" value="pakistan" aria-label='Pakistan wins'>pakistan</ToggleButton>
                                        <ToggleButton name="h2h_india_v_pakistan" value="neither" aria-label='neither: game cancelled'>neither</ToggleButton>
                                    </ToggleButtonGroup>
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