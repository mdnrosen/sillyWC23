import React from 'react'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useGuesses } from '../context/GuessContext'


export const ToggleGroup = ({ name, values, arias, handleChange }) => {

    const { value1, value2 } = values, value3 = values.value3 || null
    const { groupLabel, buttonLabel1, buttonLabel2 } = arias, buttonLabel3 = arias.buttonLabel3 || null

    const { guesses } = useGuesses()


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
