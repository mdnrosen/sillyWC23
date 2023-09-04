import React from 'react'

import { Box, CardContent, FormControl, Grid, ToggleButton, ToggleButtonGroup } from '@mui/material'

import { RoundTitle } from '../components/RoundTitle'
import { RoundCard } from '../components/RoundCard'
import { QuestionTitle } from '../components/QuestionTitle'
import { useGuesses } from '../context/GuessContext'

export const FiftyFiftyRound = () => {

    const { updateGuesses, guesses } = useGuesses()

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
                                    title="True or false"
                                    num="14"
                                    question="There will be a super over."
                                    hint=""
                                />
                                <Box alignSelf={'center'} width={'100%'} maxWidth={'600px'}>
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
                                <Box alignSelf={'center'} width={'100%'} maxWidth={'600px'}>
                                    <ToggleButtonGroup
                                        fullWidth
                                        value={guesses['pace_or_spin']}
                                        exclusive
                                        onChange={handleChange}
                                        aria-label='pace or spin'
                                    >
                                        <ToggleButton name="pace_or_spin" value="pace" aria-label='pace'>pace</ToggleButton>
                                        <ToggleButton name="pace_or_spin" value="spin" aria-label='spin'>spin</ToggleButton>
                                    </ToggleButtonGroup>
                                </Box>
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
                                <Box alignSelf={'center'} width={'100%'} maxWidth={'600px'}>
                                    <ToggleButtonGroup
                                        fullWidth
                                        value={guesses['choose_bat_or_chase']}
                                        exclusive
                                        onChange={handleChange}
                                        aria-label='chose to bat more or chase more'
                                    >
                                        <ToggleButton name="choose_bat_or_chase" value="bat" aria-label='bat more'>bat</ToggleButton>
                                        <ToggleButton name="choose_bat_or_chase" value="chase" aria-label='chase more'>chase</ToggleButton>
                                    </ToggleButtonGroup>
                                </Box>
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
                                <Box alignSelf={'center'} width={'100%'} maxWidth={'600px'}>
                                    <ToggleButtonGroup
                                        fullWidth
                                        value={guesses['bat_versus_chase']}
                                        exclusive
                                        onChange={handleChange}
                                        aria-label='bat wins more or chase wins more'
                                    >
                                        <ToggleButton name="bat_versus_chase" value="bat_wins" aria-label='bat first wins more'>bat first</ToggleButton>
                                        <ToggleButton name="bat_versus_chase" value="chase_wins" aria-label='chase wins more'>chase total</ToggleButton>
                                    </ToggleButtonGroup>
                                </Box>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <QuestionTitle
                                    title="Who wins"
                                    num="18"
                                    question="India or Pakistan or Game Cancelled?"
                                    hint=""
                                />
                                <Box alignSelf={'center'} width={'100%'} maxWidth={'600px'}>
                                    <ToggleButtonGroup
                                        fullWidth
                                        value={guesses['india_v_pakistan']}
                                        exclusive
                                        onChange={handleChange}
                                        aria-label='india, pakistan or game cancelled'
                                    >
                                        <ToggleButton name="india_v_pakistan" value="india" aria-label='India wins'>india</ToggleButton>
                                        <ToggleButton name="india_v_pakistan" value="pakistan" aria-label='Pakistan wins'>pakistan</ToggleButton>
                                        <ToggleButton name="india_v_pakistan" value="neither" aria-label='neither: game cancelled'>neither</ToggleButton>
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