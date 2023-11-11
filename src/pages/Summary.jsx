import React, { useEffect } from 'react'
import data from '../assets/data/allGuesses.json'



export const Summary = () => {



  const mark = async() => {

  }

  useEffect(() => {
    const { body } = data
    const allGuesses = body;


    let anwers = {}
    allGuesses.map(p => {

    console.log(p.guesses['eng_drops'])
    let q = p.guesses['eng_drops']
      const questionNames = Object.keys(p.guesses)
  

      anwers = anwers[q] ? anwers[q]++ : 1
      
    
    })

    console.log('answers', anwers)
  },[])


  return (
    <div>Summary Page here</div>
  )
}
