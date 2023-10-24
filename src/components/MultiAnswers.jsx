import { Done, Close, ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionSummary, Box, Paper, Grid, Typography } from '@mui/material'
import React from 'react'

import { QuestionTitle } from './QuestionTitle'
import { markMultis } from '../utils/marking'
import { RoundTitle } from './RoundTitle'
export const MultiAnswers = ({ guesses }) => {

  const questions = markMultis(guesses)
  const totalScore = questions.reduce((acc, curr) => acc + curr.score, 0)
  const cardQs = ['multi_runouts', 'multi_sixes', 'multi_wickets']

  if (!questions) return null
  return (
    <Accordion>
      <AccordionSummary
        sx={{ backgroundColor: 'primary.main', borderTop: 2, borderColor: 'secondary'}}
        expandIcon={<ExpandMore variant="contained" size="large" color="black.main" />}
      >
        <RoundTitle 
          num="4"
          name="Mutli"
          marking={`Score: ${totalScore}`}
        />

      </AccordionSummary>
      {questions.map((q, i) => (
          <Box key={i} sx={{ mb: 3, borderTop: 0.5}}>
            <QuestionTitle 
              num={q.num}
              title={q.title}
              question={q.question}
            />
            <Grid container spacing={2} sx={{ mx: 2}}>
              {cardQs.includes(q.name) && (
              <Grid item xs={9}> 
                <Box>
                {q.choices.map((c, i) => (
                  <Paper elevation={8} square={false} sx={{ p: 2, mb: 1, display: 'flex'}}>
                    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center'}}>
                      <Typography variant="body1">{c.player} ({c.number})</Typography>
                      <Typography 
                        variant="h6"
                        color={c.score > 0 ? '#A8D1A2' : 'inherit'}
                        >{c.score > 0 ? `+${c.score}` : c.score}</Typography>
                    </Box>
                  </Paper>
                  ))}
                  </Box>
              </Grid>
              )}
              <Grid item xs={3} container direction="column" justifyContent="center" alignItems="center">
                  <Grid item>
                    <Typography 
                      color={q.score > 0 ? '#A8D1A2' : 'inherit'}
                      variant="h5">{q.score > 0 ? `+${q.score}` : q.score}
                    </Typography>
                  </Grid>
              </Grid>
              </Grid>
          </Box>
    ))}

    </Accordion>


  )
}
