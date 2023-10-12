import allGuesses from '../assets/data/allGuesses.json'
import { filteredGuessesByRound } from '../utils/helpers'

const engData = filteredGuessesByRound(allGuesses, 'eng')

// just to check it is working
console.log(engData)

export const EnglandRoundResults = () => {

  return (
    <div>England Guesses</div>
  )
}
