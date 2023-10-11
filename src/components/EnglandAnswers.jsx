import { Box, Button, Toolbar } from '@mui/material'
import React from 'react'
import { QuestionTitle } from './QuestionTitle'
import { RoundTitle } from './RoundTitle'
export const EnglandAnswers = ({ guesses }) => {
  return (
    <>
      <RoundTitle 
        num="1"
        name="England Round"
        marking="5pts for each correct"
      
      />
        <QuestionTitle 
          num="1"
          title="Liam Dawson"
          question="Who will play no games?"
        />
        <Box sx={{ my: 4, display: 'flex', flexDirection: 'column' }}>
          <Button>
            {guesses['eng_noplay']}
          </Button>
        </Box>
        <Toolbar>
          <div>YOUR GUESS: {guesses['eng_noplay']}</div>
          <div>CORRECT ANSWER: Liam Dawson</div>
        </Toolbar>
        <div>NO PLAY: {guesses['eng_noplay']}</div>
        <div>FEWEST WICKETS: {guesses['eng_fewestwickets']}</div>
        <div>EXPENSIVE BOWLING: {guesses['eng_expensiveBowling']}</div>
        <div>RUN RATE: {guesses['eng_runrate']}</div>
        <div>LOWEST STRIKERATE: {guesses['eng_strikerate']}</div>
        <div>DROPPED CATCHES: {guesses['eng_drops']}</div>
    </>


  )
}
