import { filterByRound } from './helpers'
import allQuestions from '../assets/data/answers.json'

export const markEngland = (guesses) => {
    const questions = filterByRound(allQuestions, '^eng')
    const result = questions.map(q => {
        const correct = q.answer.includes(guesses[q.name])
        const score = correct ? 5 : 0
        return {
            ...q,
            correct,
            score
        }
    })
    return result
}



const between = (x, min, max) => x >= min && x <= max
const addPerc = (x, perc) => x * (1 + perc)
const minusPerc = (x, perc) => x * (1 - perc)

export const markNumbers = (guesses) => {
    
    const questions = filterByRound(allQuestions, '^num')

    const results = questions.map(q => {
        const { answer } = q
        const guessed = parseInt(guesses[q.name])
        let score = 0
        let accuracy = 'Not close enough'
        if (between(guessed, minusPerc(answer, 0.15), addPerc(answer, 0.15))) {
            score = 1
            accuracy = 'Within 15%'
        }
        if (between(guessed, minusPerc(answer, 0.1), addPerc(answer, 0.1))) {
            score = 3
            accuracy = 'Within 10%'
        }
        if (between(guessed, minusPerc(answer, 0.05), addPerc(answer, 0.05))) {
            score = 5
            accuracy = 'Within 5%'
        }
        return {
            ...q,
            score,
            accuracy
        }

        // check ashes for logic about numbers marking

    })
    return results
}