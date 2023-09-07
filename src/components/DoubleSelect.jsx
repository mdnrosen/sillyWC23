import React from 'react'
import { Grid, FormControl, Select, MenuItem } from '@mui/material'


import { useGuesses } from '../context/GuessContext'


export const DoubleSelect = ({ placeholders, options, names }) => {
    console.log(options)
    const { guesses, updateGuesses } = useGuesses()

    const handleChange = (e) => {
        const { name, value } = e.target
        updateGuesses(name, value)
    }
  return (
    <Grid item container spacing={2}>
        <Grid item xs={12} md={6}>
            <FormControl fullWidth>
                <Select
                    onChange={handleChange}
                    placeholder={placeholders[0]}
                    name={names[0]}
                    value={guesses[names[0]] || ''}
                >
                {options.map((opt, i) => (
                            <MenuItem 
                            key={i} 
                            value={opt.value} 
                            disabled={opt.value === guesses[names[1]]}
                        >{opt.label}</MenuItem>                                
                ))}
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
            <FormControl fullWidth>
                <Select
                    onChange={handleChange}
                    placeholder={placeholders[1]}
                    name={names[1]}
                    value={guesses[names[1]] || ''}
                >
                {options.map((opt, i) => (
                            <MenuItem 
                            key={i} 
                            value={opt.value} 
                            disabled={opt.value === guesses[names[0]]}
                        >{opt.label}</MenuItem>                                
                ))}
                </Select>
            </FormControl>
        </Grid>
    </Grid>
  )
}
