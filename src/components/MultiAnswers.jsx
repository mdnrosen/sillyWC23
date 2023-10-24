import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionSummary, Box, Paper, Grid, Typography } from '@mui/material'
import React from 'react'

import { QuestionTitle } from './QuestionTitle'
import { markMultis } from '../utils/marking'
import { RoundTitle } from './RoundTitle'
import { getPos } from '../utils/helpers'
export const MultiAnswers = ({ guesses }) => {

  const questions = markMultis(guesses)
  const totalScore = questions.reduce((acc, curr) => acc + curr.score, 0)
  const cardQs = ['multi_runouts', 'multi_sixes', 'multi_wickets']

  if (!questions) return null
  return (
    <Accordion>
      <AccordionSummary
        sx={{ backgroundColor: 'primary.main', borderTop: 2, borderColor: 'secondary'}}
        expandIcon={<ExpandMore variant="outlined" size="large" color="dark" />}
      >
        <RoundTitle 
          num="4"
          name="Multis"
          marking={`Score: ${totalScore}`}
        />

      </AccordionSummary>
      {questions.map((q, i) => (
          <Box key={i} sx={{ mb: 3, borderTop: 0.5, pr: 2}}>
            <QuestionTitle 
              num={q.num}
              title={q.title}
              question={q.question}
            />
            {cardQs.includes(q.name) && (
              <Grid container spacing={2} sx={{mx: 1}}>
                <Grid item xs={9}> 
                  <Box>
                  {q.choices.map((c, i) => (
                    <Paper 
                      key={i}
                      square={false} 
                      variant="outlined"
                      sx={{ p: 1, mb: 1, display: 'flex' }}
                    >
                      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center'}}>
                        <Typography variant="body1">{c.player} ({c.number})</Typography>
                        <Typography 
                          variant="h6"
                          color={c.score > 0 ? '#A8D1A2' : 'error'}
                          >{c.score > 0 ? `+${c.score}` : c.score}</Typography>
                      </Box>
                    </Paper>
                    ))}
                    </Box>
                </Grid>
                <Grid item xs={3} container direction="column" justifyContent="center" alignItems="center">
                    <Grid item>
                      <Typography 
                        color={q.score > 0 ? '#A8D1A2' : 'error'}
                        variant="h5">{q.score > 0 ? `+${q.score}` : q.score}
                      </Typography>
                    </Grid>
                </Grid>
                </Grid>
              )}
              {q.name.includes('mostruns') && (
                <Grid container spacing={2} sx={{ mx: 2}}>
                  <Grid item xs={9}> 
                    <Box>
                    {q.choices.map((c, i) => (
                      <Paper key={i} variant="outlined" square={false} sx={{ p: 1, mb: 1, display: 'flex'}}>
                        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center'}}>
                          <Typography variant="body1">{c.player}</Typography>
                          <Typography 
                            variant="h6"
                            color={c.score > 0 ? '#A8D1A2' : 'error'}
                            >{c.score > 0 ? `+${c.score}` : c.score}</Typography>
                        </Box>
                      </Paper>
                      ))}
                    </Box>
                  </Grid>
                  <Grid item xs={3} container direction="column" justifyContent="center" alignItems="center">
                    <Grid item>
                      <Typography 
                        color={q.score > 0 ? '#A8D1A2' : 'error'}
                        variant="h5">{q.score > 0 ? `+${q.score}` : q.score}
                      </Typography>
                    </Grid>
                </Grid>
                </Grid>
              )}
              {q.name.includes('bigfour') && (
                <Grid container spacing={2}>
                  <Grid item xs={12} sx={{ mx: 2}}>
                    <Box>
                    {q.choices.map((c, i) => (
                      <Paper 
                        key={i}
                        variant="outlined"
                        square={false} sx={{ p: 1, mb: 1, display: 'flex'}}>
                        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center'}}>
                          <Typography variant="body1">{c.position}. {c.name} ({c.runs} - {getPos(c.actualPos)})</Typography>
                          <Typography 
                            variant="h6"
                            color={c.correct > 0 ? '#A8D1A2' : 'error'}
                            >{c.correct ? `+2` : 0}</Typography>
                        </Box>
                      </Paper>
                      ))}
                    </Box>
                  </Grid>
                </Grid>


              )}
          </Box>
    ))}

    </Accordion>


  )
}
