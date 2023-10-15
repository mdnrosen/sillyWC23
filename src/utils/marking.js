import { filterByRound } from './helpers'
import allQuestions from '../assets/data/answers.json'
import allSixes from '../assets/data/sixesList.json'
import allWickets from '../assets/data/wicketsList.json'



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

export const markh2h = (guesses) => {
    const questions = filterByRound(allQuestions, '^h2h')
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

export const markMultis = (guesses) => {
    const questions = filterByRound(allQuestions, '^multi')
    console.log(guesses)
    const result = questions.map(q => {
        const player1 = guesses[`${q.name}_1`]?.value
        const player2 = guesses[`${q.name}_2`]?.value

        if (q.name.includes('wickets')) {

            return {
                ...q,
                choices: [
                    {
                        player: player1,
                        wickets: allWickets.find(w => w.name === player1).wickets
                    }
                ]

            }
        }
    })
    return result
}   



const getLookup = (data, name) => data.find(d => d.name === name) || ''

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