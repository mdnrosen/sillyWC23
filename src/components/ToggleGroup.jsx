import React from 'react'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useGuesses } from '../context/GuessContext' // see line 11


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
            <ToggleButton name={name} value={values[0]} aria-label={labels[1]}>{values[0]}</ToggleButton>
            <ToggleButton name={name} value={values[1]} aria-label={labels[2]} >{values[1]}</ToggleButton>
            {values[2] &&
            <ToggleButton name={name} value={values[2]} aria-label={labels[3]} >{values[2]}</ToggleButton>
            }
        </ToggleButtonGroup>
    )
}
