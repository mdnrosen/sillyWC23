import { Done, Close, ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionSummary, Avatar, Box, Paper, Grid, Typography } from '@mui/material'
import React from 'react'

import { QuestionTitle } from './QuestionTitle'
import { markStandings } from '../utils/marking'
import { RoundTitle } from './RoundTitle'
import { getPos } from '../utils/helpers'
export const StandingsAnswers = ({ guesses }) => {

  const question = markStandings(guesses)
  const totalScore = question.choices.reduce((acc, curr) => acc + curr.results.score, 0)
console.log(question)
  if (!question) return null


  const getBorder = (results) => {
    const { result } = results;
    switch (result) {
      case 'correct':
        return 'green'
      case 'One Out':
        return 'success.main'
      case 'Two Out':
        return 'warning.main'
      default:
        return 'error.main'
    }
  }



  return (
    <Accordion>
      <AccordionSummary
        sx={{ backgroundColor: 'primary.main', borderTop: 2, borderColor: 'secondary'}}
        expandIcon={<ExpandMore variant="contained" size="large" color="dark" />}
      >
        <RoundTitle 
          num="5"
          name="Standings"
          marking={`Score: ${totalScore}`}
        />
      </AccordionSummary>
      <Box sx={{ mb: 3, borderTop: 0.5, pr: 2}}>
        <QuestionTitle 
            num={question.num}
            title={question.title}
            question={question.question}
        />
              <Grid container spacing={2} sx={{mx: 1}}>
              <Grid item xs={12} container direction="column" justifyContent="center" alignItems="center">
                    {/* <Grid item sx={{ my: 1}}>
                      <Typography 
                        color={question.score > 0 ? '#A8D1A2' : 'error'}
                        variant="h5">ROUND SCORE: {question.score > 0 ? `+${question.score}` : question.score}
                      </Typography>
                    </Grid> */}
                </Grid>
                <Grid item xs={11}> 
                  <Box>
                  {question.choices.map((c, i) => (
                    <Paper 
                      key={i}
                      square={false} 
                      variant="outlined"

                      sx={{ p: 1, mb: 1, display: 'flex', border: 1, borderColor: `${getBorder(c.results)}`}}
                    >
                      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center'}}>
                        <Avatar 
                          sx={{ mx: 1}}
                          src={c.image}
                          size="small"
                          variant="square"
                        />
                        <Typography variant="body1">{c.name} - ({getPos(c.actualPos)})</Typography>

                        <Typography
                          variant="h6"
                          color={c.score > 0 ? '#A8D1A2' : 'error'}
                          >{c.score > 0 ? `+${c.score}` : c.score}</Typography>
                      </Box>
                      <Box>
                        <Typography variant="h6">{c.results.score}</Typography> 
                      </Box>
                    </Paper>
                    ))}
                    </Box>
                </Grid>

                </Grid>
      </Box>
    </Accordion>
  )
}
