import React from 'react'

import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useGuesses } from '../context/GuessContext'


export const ToggleGroup = ({ name, values, labels, handleChange }) => {

    const { guesses } = useGuesses()

    return (
        <ToggleButtonGroup
            fullWidth
            value={guesses[name]}
            exclusive
            color="warning"
            onChange={handleChange}
            aria-label={labels[0]}
        >
            {values.map((value, index) => (
                <ToggleButton key={name + index} name={name} value={value} aria-label={labels[index + 1]}>{value}</ToggleButton>
            ))}
        </ToggleButtonGroup>
    )
}
