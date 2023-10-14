import React, { useState, useEffect } from 'react'
import { Toolbar, Grid, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { body as people } from '../assets/data/allGuesses'
import { RoundCard } from '../components/RoundCard'




import { EnglandAnswers } from '../components/EnglandAnswers'
import { markEngland, markNumbers } from '../utils/marking'
import { NumberAnswers } from '../components/NumberAnswers'

export const Answers = () => {
    const [ person, setPerson ] = useState(null);
    const params = useParams();

    useEffect(() => {
        setPerson(people.find(p => p.id === params.id) || null);
    },[]);

    const overallScore = () => {
        const eng = markEngland(person.guesses).reduce((a, b) => a + b.score, 0);
        const num = markNumbers(person.guesses).reduce((a, b) => a + b.score, 0);
        console.log('eng score',eng)
        return eng + num
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
    </RoundCard>
  )
};
