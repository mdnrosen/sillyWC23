import React, { useState, useEffect } from 'react'
import { Toolbar, Grid, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { body as people } from '../assets/data/allGuesses'
import { RoundCard } from '../components/RoundCard'

import { EnglandAnswers } from '../components/EnglandAnswers'
import { markEngland, markNumbers, markh2h, markMultis, markStandings } from '../utils/marking'
import { NumberAnswers } from '../components/NumberAnswers'
import { FiftyFiftyAnswers } from '../components/FiftyFiftyAnswers'
import { MultiAnswers } from '../components/MultiAnswers'
import { StandingsAnswers } from '../components/StandingsAnswers'



export const Answers = () => {
    const [ person, setPerson ] = useState(null);
    const params = useParams();

    useEffect(() => {
        setPerson(people.find(p => p.id === params.id) || null);
    },[]);

    const overallScore = () => {
        const eng = markEngland(person.guesses).reduce((a, b) => a + b.score, 0);
        const num = markNumbers(person.guesses).reduce((a, b) => a + b.score, 0);
        const h2h = markh2h(person.guesses).reduce((a, b) => a + b.score, 0);
        const multi = markMultis(person.guesses).reduce((a, b) => a + b.score, 0);
        const standings = markStandings(person.guesses).score
        return eng + num + h2h + multi + standings
    }

  if (!person) return null; 
  return (
    <RoundCard>
        <Toolbar sx={{ my: 2, display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" color="secondary">
                {person.name}
            </Typography>
            <Typography variant="h6" color="secondary">
                {`${overallScore()} pts`}
            </Typography>
        </Toolbar>
        <EnglandAnswers guesses={person.guesses} />
        <NumberAnswers guesses={person.guesses} />
        <FiftyFiftyAnswers guesses={person.guesses} />
        <MultiAnswers guesses={person.guesses} />
        <StandingsAnswers guesses={person.guesses} />

        <Toolbar>
            <Typography variant="overline" sx={{ mx: 'auto'}}>
                Last update - Afghanistan vs Netherlands
            </Typography>
        </Toolbar>
    </RoundCard>
  )
};
