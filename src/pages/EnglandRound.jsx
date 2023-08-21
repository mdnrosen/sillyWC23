import { Box, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { RoundTitle } from '../components/RoundTitle'
import { QuestionTitle } from '../components/QuestionTitle'
import questions from '../assets/data/englandRound.json'
import runRateOpts from '../assets/data/options/runRate.json'
import squads from '../assets/data/squads.json'
import { getOptions } from '../utils/helpers'

export const EnglandRound = () => {

    const englandPlayers = squads.find(squad => squad.team === 'England').players
    const englandBowlers = englandPlayers.filter(player => player.bowler)
    const englandBatters = englandPlayers.filter(player => player.batter)

    const handleChange = (event) => {
        console.log(event.target.value)
    }


  return (
    <Card sx={{ py: 4}}>
        <RoundTitle num="1" title="England" />
        <CardContent>
            <Box component="form">
                <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <QuestionTitle 
                                    title="The Liam Dawson role"
                                    num="1"
                                    question="Which player won't play a single game?"
                                    hint="Listed XI - playing as a sub doesn't count"
                                
                                />
                                <Select
                                    onChange={handleChange}
                                    placeholder="Pick..."
                                >
                                    {getOptions(englandPlayers, 'name', 'name').map((opt, i) => (
                                        <MenuItem key={i} value={opt.value}>{opt.label}</MenuItem>
                                    ))}
                       


                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <QuestionTitle 
                                    title="500 out of the question?"
                                    num="2"
                                    question="What will England's run rate be?"
                                    hint="Includes knockout games too"
                                
                                />
                                <Select
                                    onChange={handleChange}
                                    placeholder="Pick..."
                                >
                                    {runRateOpts.map((opt, i) => (
                                        <MenuItem key={i} value={opt.value}>{opt.label}</MenuItem>
                                    ))}

                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <QuestionTitle 
                                    title="Yes Bank Maximums"
                                    num="3"
                                    question="Which bowler will concede the most sixes?"
                                    hint="Fairly simple..."
                                
                                />
                                <Select
                                    onChange={handleChange}
                                    placeholder="Pick..."
                                >
                                    {getOptions(englandBowlers, 'name', 'name').map((opt, i) => (
                                        <MenuItem key={i} value={opt.value}>{opt.label}</MenuItem>
                                    ))}

                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <QuestionTitle 
                                    title="Pole-less"
                                    num="4"
                                    question="Which bowler will take the fewest wickets?"
                                    hint="Minimum overs bowled is 10"
                                
                                />
                                <Select
                                    onChange={handleChange}
                                    placeholder="Pick..."
                                >
                                    {getOptions(englandBowlers, 'name', 'name').map((opt, i) => (
                                        <MenuItem key={i} value={opt.value}>{opt.label}</MenuItem>
                                    ))}

                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <QuestionTitle 
                                    title="Get on with it"
                                    num="5"
                                    question="WWho will have the lowest batting strike rate?"
                                    hint="Minimum 50 balls faced"
                                
                                />
                                <Select
                                    onChange={handleChange}
                                    placeholder="Pick..."
                                >
                                    {getOptions(englandBatters, 'name', 'name').map((opt, i) => (
                                        <MenuItem key={i} value={opt.value}>{opt.label}</MenuItem>
                                    ))}

                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <QuestionTitle 
                                    title="No! Down!"
                                    num="6"
                                    question="Who will drop the most catches?"
                                    hint="Drops are defined by the Silly Ashes committee"
                                
                                />
                                <Select
                                    onChange={handleChange}
                                    placeholder="Pick..."
                                >
                                    {getOptions(englandPlayers, 'name', 'name').map((opt, i) => (
                                        <MenuItem key={i} value={opt.value}>{opt.label}</MenuItem>
                                    ))}

                                </Select>
                            </FormControl>
                        </Grid>
                </Grid>
            </Box>

        </CardContent>
    </Card>

  )
}
