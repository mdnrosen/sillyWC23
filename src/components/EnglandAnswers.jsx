import { Done, Close, ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionSummary, Box, Chip, Grid, Typography } from '@mui/material'
import React from 'react'

import { QuestionTitle } from './QuestionTitle'
import { markEngland } from '../utils/marking'
import { RoundTitle } from './RoundTitle'
export const EnglandAnswers = ({ guesses }) => {

  const questions = markEngland(guesses)
  const totalScore = questions.reduce((acc, curr) => acc + curr.score, 0)

  if (!questions) return null
  return (
    <Accordion>
      <AccordionSummary
        sx={{ backgroundColor: 'primary.main'}}
        expandIcon={<ExpandMore variant="contained" size="large" color="dark" />}
      >
        <RoundTitle 
          num="1"
          name="England"
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
              <Grid item xs={9}>
                <Chip 
                  sx={{ opacity: 0.9}}
                  label={guesses[q.name]} 
                  color={q.correct ? 'success' : 'error'}
                  icon={q.correct ? <Done /> : <Close />}
                  />
              </Grid>
              <Grid item xs={3}> 
                <Typography 
                  color={q.correct ? '#A8D1A2' : 'error'}
                  variant="h6">
                  {q.score ? '+' : ''}{q.score}
                </Typography>
              </Grid>
                <Grid item xs={12}>
                {!q.correct && (
                  <span>
                  <small><strong>Correct Answer(s): </strong></small>
                  <br></br>
                  <small>{q.answer.join(', ')}</small>
                  </span>

                  )}
                </Grid>

              </Grid>

          </Box>
    ))}

    </Accordion>


  )
}
