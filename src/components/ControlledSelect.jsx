import React, { useState, useEffect } from 'react'
import { useGuesses } from '../context/GuessContext'

import { Autocomplete, FormControl, TextField } from '@mui/material'

export const ControlledSelect = ({ options, name, placeholder}) => {

    const [ value, setValue ] = useState('')
    const { guesses, updateGuesses } = useGuesses()

    useEffect(() => {
        updateGuesses(name, value)
    },[value])

  return (
    <FormControl fullWidth>
        <Autocomplete 
            options={options}
            onChange={(e, newValue) => setValue(newValue)}
            value={guesses[name] || ''}
            renderInput={(params) => 
                <TextField
                    {...params} label={placeholder} 
                />
            }
        />
    </FormControl>
  )
}
