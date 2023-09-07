import React from 'react'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useGuesses } from '../context/GuessContext' // see line 11


export const ToggleGroup = ({ values, labels, handleChange }) => {

    const { name, value1, value2, value3 } = values
    const { groupLabel, buttonLabel1, buttonLabel2, buttonLabel3 } = labels

    const { guesses } = useGuesses() // ? pass as prop from parent [also has useGuesses()] instead?

    return (
        <ToggleButtonGroup
            fullWidth
            value={guesses[name]}
            exclusive
            color="warning"
            onChange={handleChange}
            aria-label={groupLabel}
        >
            <ToggleButton name={name} value={value1} aria-label={buttonLabel1}>{value1}</ToggleButton>
            <ToggleButton name={name} value={value2} aria-label={buttonLabel2} >{value2}</ToggleButton>
            {value3 &&
            <ToggleButton name={name} value={value3} aria-label={buttonLabel3} >{value3}</ToggleButton>
            }
        </ToggleButtonGroup>
    )
}
