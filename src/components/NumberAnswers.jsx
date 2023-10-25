import React, { useRef } from 'react'
import { Done, Close, ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionSummary, Box, Chip, Grid, Typography } from '@mui/material'
import { markNumbers } from '../utils/marking'

import { QuestionTitle } from './QuestionTitle'
import { RoundTitle } from './RoundTitle'


export const NumberAnswers = ({ guesses, accordion }) => {

    const questions = markNumbers(guesses)
    const totalScore = questions.reduce((acc, curr) => acc + curr.score, 0)
    const componentIndex = 1
    const scrollTarget = useRef(null)
    const clickHandler = () => {
      accordion.expandComponent(componentIndex)
      accordion.scrollToTop(scrollTarget)
    }

    if (!questions) return null
  return (
    <Accordion expanded={accordion.expanded[componentIndex]}>
        <AccordionSummary
            ref={scrollTarget}
            onClick={clickHandler}
            sx={{ backgroundColor: 'primary.main', borderTop: 2, borderColor: 'secondary'}}
            expandIcon={<ExpandMore variant="contained" size="large" color="dark" />}
            >
                <RoundTitle 
                    num="2"
                    name="Numbers"
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
                            color={q.score ? 'success' : 'error'}
                            icon={q.score ? <Done /> : <Close />}
                        />
                    </Grid>
                    <Grid item xs={3}> 
                        <Typography 
                        color={q.score ? '#A8D1A2' : 'error'}
                        variant="h6">
                            {q.score ? '+' : ''}{q.score}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <span>
                            <small><strong>Correct Answer: </strong></small>
                            <br></br>
                            <small>{q.answer} - {q.accuracy}</small>
                        </span>
                    </Grid>
                </Grid>

            </Box>
        ))}
    </Accordion>
  )
}
