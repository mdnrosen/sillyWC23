import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { body as people } from '../assets/data/allGuesses'
import { RoundCard } from '../components/RoundCard'




import { EnglandAnswers } from '../components/EnglandAnswers'

export const Answers = () => {
    const [ person, setPerson ] = useState(null);
    const params = useParams();

    useEffect(() => {
        setPerson(people.find(p => p.id === params.id) || null);
    },[]);


  if (!person) return null; 
  return (
    <RoundCard>
        <EnglandAnswers guesses={person.guesses} />
    </RoundCard>
  )
};
