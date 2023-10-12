import { Done, Close, ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Box, Chip, Grid, Typography } from '@mui/material'
import React from 'react'
import { QuestionTitle } from './QuestionTitle'
import { RoundTitle } from './RoundTitle'
export const EnglandAnswers = ({ guesses }) => {

  const questions = [
    {
      num: 1,
      title: 'The Liam Dawson Role',
      question: 'Which player won\'t play a single game?',
      name: 'eng_noplay',
      answer: ['Gus Atkinson', 'David Willey', 'Ben Stokes']
    },
    {
      num: 2,
      question: 'What will England\'s run rate be?',
      title: '500 out of the question?',
      name: 'eng_runrate',
      answer: ['6+']
    },
    {
      num: 3,
      title: 'Keep it tight, or not...',
      question: 'Which bowler will have the worst economy rate?',
      name: 'eng_expensiveBowling',
      answer: ['Chris Woakes']
    },
    {
      num: 4,
      title: 'Pole-less',
      question: 'Which bowler will take the fewest wickets?',
      name: 'eng_fewestwickets',
      answer: ['Mark Wood', 'Adil Rashid']
    },
    {
      num: 5,
      title: 'Get on with it',
      question: 'Who will have the lowest batting strike rate?',
      name: 'eng_strikerate',
      answer: ['Liam Livingstone']
    },
    {
      num: 6,
      title: 'No! Down!',
      question: 'Who will drop the most catches?',
      name: 'eng_drops',
      answer: ['Reece Topley']
    }
  ]


  return (
    <Accordion>
      <AccordionSummary
        sx={{ backgroundColor: 'primary.main'}}
        expandIcon={<ExpandMore variant="contained" size="large" color="secondary" />}
      >
        <RoundTitle 
          num="1"
          name="England"
          marking="Score: 5"
        
        />

      </AccordionSummary>
      {questions.map((q, i) => {
        const correct = q.answer.includes(guesses[q.name])
        return (
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
                  color={correct ? 'success' : 'error'}
                  icon={correct ? <Done /> : <Close />}
                  />
              </Grid>
              <Grid item xs={3}> 
                <Typography 
                  color={correct ? 'success' : 'error'}
                  variant="h6">
                  {correct ? '+5' : '0'}
                </Typography>
              </Grid>
                <Grid item xs={12}>
                {!correct && (
                  <span>
                  <small><strong>Correct Answer(s): </strong></small>
                  <br></br>
                  <small>{q.answer.join(', ')}</small>
                  </span>

                  )}
                </Grid>

              </Grid>

          </Box>

        )
      })}

    </Accordion>


  )
}
