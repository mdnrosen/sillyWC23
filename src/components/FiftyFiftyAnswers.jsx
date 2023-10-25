import { Done, Close, ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionSummary, Box, Chip, Grid, Typography } from '@mui/material'
import React from 'react'

import { QuestionTitle } from './QuestionTitle'
import { markh2h } from '../utils/marking'
import { RoundTitle } from './RoundTitle'
export const FiftyFiftyAnswers = ({ guesses, accordion }) => {

  const questions = markh2h(guesses)
  const totalScore = questions.reduce((acc, curr) => acc + curr.score, 0)
  const componentIndex = 2
  const clickHandler = () => accordion.clickHandler(componentIndex)

  if (!questions) return null
  return (
    <Accordion expanded={accordion.expanded[componentIndex]}>
      <AccordionSummary
        onClick={clickHandler}
        sx={{ backgroundColor: 'primary.main', borderTop: 2, borderColor: 'secondary'}}
        expandIcon={<ExpandMore variant="contained" size="large" color="dark" />}
      >
        <RoundTitle 
          num="3"
          name="Head2Head"
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
                  label={guesses[q.name]?.toUpperCase()} 
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
                  <small>{q.answer.toUpperCase()}</small>
                  </span>

                  )}
                </Grid>

              </Grid>

          </Box>
    ))}

    </Accordion>


  )
}
