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
            {values.map((val, i) => <ToggleButton key={name + i} name={name} value={val} aria-label={labels[i + 1]}>{val}</ToggleButton>)}
        </ToggleButtonGroup>
    )
}
