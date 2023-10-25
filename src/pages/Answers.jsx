import React, { useState, useEffect } from 'react'
import { Toolbar, Grid, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { body as people } from '../assets/data/allGuesses'
import { RoundCard } from '../components/RoundCard'

import { EnglandAnswers } from '../components/EnglandAnswers'
import { markEngland, markNumbers, markh2h, markMultis } from '../utils/marking'
import { NumberAnswers } from '../components/NumberAnswers'
import { FiftyFiftyAnswers } from '../components/FiftyFiftyAnswers'
import { MultiAnswers } from '../components/MultiAnswers'
import { StandingsAnswers } from '../components/StandingsAnswers'



export const Answers = () => {
    const [ person, setPerson ] = useState(null);
    const falseArr = Array(4).fill(false)
    const [ expanded, setExpanded ] = useState(falseArr)
    const params = useParams();

    useEffect(() => {
        setPerson(people.find(p => p.id === params.id) || null);
    },[]);

    const overallScore = () => {
        const eng = markEngland(person.guesses).reduce((a, b) => a + b.score, 0);
        const num = markNumbers(person.guesses).reduce((a, b) => a + b.score, 0);
        const h2h = markh2h(person.guesses).reduce((a, b) => a + b.score, 0);
        const multi = markMultis(person.guesses).reduce((a, b) => a + b.score, 0);
        return eng + num + h2h + multi
    }

    const accordion = {
        expanded: expanded,
        expandComponent: function(index) {
            const newArr = falseArr
            newArr[index] = !expanded[index]
            setExpanded(newArr)
        },
        scrollToTop: function(target) {
            setTimeout(function(){target.current.scrollIntoView({ behavior: "smooth", block: "nearest" })}, 419)
        }
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
        <EnglandAnswers guesses={person.guesses} accordion={accordion} />
        <NumberAnswers guesses={person.guesses} accordion={accordion} />
        <FiftyFiftyAnswers guesses={person.guesses} accordion={accordion} />
        <MultiAnswers guesses={person.guesses} accordion={accordion} />
        <Toolbar>
            <Typography variant="overline" sx={{ mx: 'auto'}}>
                Standings Round coming soon
            </Typography>
        </Toolbar>
    </RoundCard>
  )
};
