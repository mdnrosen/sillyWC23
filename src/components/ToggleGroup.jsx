import React from 'react'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useGuesses } from '../context/GuessContext'


export const ToggleGroup = ({ name, values, arias, handleChange }) => {

    const {value1, value2  } = values
    const { groupLabel, buttonLabel1, buttonLabel2 } = arias

    const { updateGuesses, guesses } = useGuesses()


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
        </ToggleButtonGroup>
    )
}
