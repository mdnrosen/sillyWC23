import { CardContent, Box, Grid, FormControl, TextField } from '@mui/material'
import { RoundTitle } from '../components/RoundTitle'
import { RoundCard } from '../components/RoundCard'
import { QuestionTitle } from '../components/QuestionTitle'
import { useGuesses } from '../context/GuessContext'

export const NumbersRound = () => {
    const { guesses, updateGuesses } = useGuesses()

    const handleChange = (e) => {
        const { name, value } = e.target
        updateGuesses(name, value)
    }

  return (
    <RoundCard>
        <RoundTitle 
            num="2"
            name="Numbers"
            marking="5pts within 5% | 3pts within 10% | 1pt within 15%"
        />
        <CardContent>
            <Box component="form" onChange={handleChange}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <QuestionTitle 
                                title="DON'T OVERSTEP THEN"
                                num="7"
                                question="What percentage of free hits will go for six?"
                                hint="Whole numbers only please"
                            />
                            <TextField 
                                fullWidth 
                                value={guesses['num_freehits'] || ''}
                                label="Percentage"
                                name="num_freehits"
                                type="number"
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <QuestionTitle 
                                title="RUNS ON THE BOARD"
                                num="8"
                                question="What will be average first innings score?"
                                hint="Rain reduced still counts"
                            />
                            <TextField 
                                fullWidth 
                                label="Runs"
                                type="number"
                                name="num_firstinns"
                                value={guesses['num_firstinns'] || ''}
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <QuestionTitle 
                                title="Giant killers?"
                                num="9"
                                question="How many wickets will the Netherlands take?"
                                hint="Across the entire tournament, so 9 games at least..."
                            />
                            <TextField 
                                fullWidth 
                                label="Wickets"
                                type="number"
                                name="num_dutchwkts"
                                value={guesses['num_dutchwkts'] || ''}
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <QuestionTitle 
                                title="Michael Gough ftw"
                                num="10"
                                question="How many umpires decisions will be overturned?"
                                hint="NOT umpires call. Umpire got it wrong. (93 games total)"
                            />
                            <TextField 
                                fullWidth 
                                label="Decisions"
                                name="num_umpires"
                                value={guesses['num_umpires'] || ''}
                                type="number"
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <QuestionTitle 
                                title="Sting in the tail"
                                num="11"
                                question="What will be the top score made by a tailender (9 - 11)?"
                                hint="Out or not out. Doesn't matter, just don't put a '*' in."
                            />
                            <TextField 
                                fullWidth 
                                label="Runs"
                                name="num_tailenderruns"
                                value={guesses['num_tailenderruns'] || ''}
                                type="number"
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <QuestionTitle 
                                title="ANOTHER UNACADEMY CRACKING SIX"
                                num="12"
                                question="How many sixes will be hit?"
                                hint="By anyone, in any game. 93 games to be played"
                            />
                            <TextField 
                                fullWidth 
                                label="Sixes"
                                name="num_totalsixes"
                                value={guesses['num_totalsixes'] || ''}
                                type="number"
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                            />
                        </FormControl>
                    </Grid>
                </Grid>
            </Box>
        </CardContent>
    </RoundCard>
  )
}
