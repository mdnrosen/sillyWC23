import { filterByRound } from './helpers'
import allQuestions from '../assets/data/answers.json'
import allSixes from '../assets/data/sixesList.json'
import allWickets from '../assets/data/wicketsList.json'
import allRunouts from '../assets/data/runoutsList.json'
import mostRuns from '../assets/data/mostruns.json'
import bigFour from '../assets/data/bigFour.json'




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
    const result = questions.map(q => {
        const player1 = guesses[`${q.name}_1`]?.value
        const player2 = guesses[`${q.name}_2`]?.value

        if (q.name.includes('wickets')) {
            const p1_wkts = allWickets.find(w => w.name === player1).wickets
            const p2_wkts = allWickets.find(w => w.name === player2).wickets
            return {
                ...q,
                score: (p1_wkts + p2_wkts) * 1,
                choices: [
                    {
                        player: player1,
                        number: p1_wkts,
                        item: 'wickets',
                        score: p1_wkts * 1
                    },
                    {
                        player: player2,
                        number: p2_wkts,
                        item: 'wickets',
                        score: p2_wkts * 1
                    },
                ]
            }
        }
        if (q.name.includes('sixes')) {
            const p1_sixes = allSixes.find(s => s.name === player1).sixes
            const p2_sixes = allSixes.find(s => s.name === player2).sixes
            return {
                ...q,
                score: (p1_sixes + p2_sixes) * 1,
                choices: [
                    {
                        player: player1,
                        number: p1_sixes,
                        item: 'sixes',
                        score: p1_sixes * 1
                    },
                    {
                        player: player2,
                        number: p2_sixes,
                        item: 'sixes',
                        score: p2_sixes * 1
                    },
                ]
            }
        }
        if (q.name.includes('runouts')) {
            const p1_runouts = allRunouts.find(s => s.name === player1).runouts
            const p2_runouts = allRunouts.find(s => s.name === player2).runouts
            return {
                ...q,
                score: (p1_runouts + p2_runouts) * 10,
                choices: [
                    {
                        player: player1,
                        number: p1_runouts,
                        item: 'run outs',
                        score: p1_runouts * 10
                    },
                    {
                        player: player2,
                        number: p2_runouts,
                        item: 'run outs',
                        score: p2_runouts * 10
                    },
                ]
            }
        }

        if (q.name.includes('mostruns')) {
            const match1 = mostRuns.find(s => s.name === player1)
            const match2 = mostRuns.find(s => s.name === player2)
            let pts1 = match1 ? match1.points : 0
            let pts2 = match2 ? match2.points : 0
            return {
                ...q,
                score: pts1 + pts2,
                choices: [
                    {
                        player: player1,
                        position: match1 ? match1.position : 'X',
                        item: 'runs',
                        score: match1 ? match1.points : 0,

                    },
                    {
                        player: player2,
                        position: match2 ? match2.position : 'X',
                        item: 'runs',
                        score: match2 ? match2.points : 0,
                    }
                ]
            }

        }
        let choices = guesses[q.name].map(c => {
            const actualPos = bigFour.find(f => f.name === c.name).position
            const correct = actualPos === c.position
            const score = actualPos === c.position ? 2 : 0
            return {
                ...c,
                runs: bigFour.find(f => f.name === c.name).runs,
                actualPos,
                correct,
                score
            }
        })
        return {
            ...q,
            choices,
            score: choices.reduce((acc, c) => acc + c.score, 0)
        }

    })
    // console.log('result',result)
    return result
    return questions
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