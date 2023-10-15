import { Done, Close, ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionSummary, Box, Chip, Grid, Typography } from '@mui/material'
import React from 'react'

import { QuestionTitle } from './QuestionTitle'
import { markMultis } from '../utils/marking'
import { RoundTitle } from './RoundTitle'
export const MultiAnswers = ({ guesses }) => {

  const questions = markMultis(guesses)
  console.log(questions)
//   const totalScore = questions.reduce((acc, curr) => acc + curr.score, 0)

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
          marking={`Score: 13`}
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

              </Grid>

          </Box>
    ))}

    </Accordion>


  )
}
