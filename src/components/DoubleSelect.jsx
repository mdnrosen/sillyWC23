import React from 'react'
import { Grid } from '@mui/material'
import { ControlledSelect } from './ControlledSelect'

export const DoubleSelect = ({ placeholders, options, names }) => {

  return ( 
    <Grid item container spacing={2}>
        <Grid item xs={12} md={6}>
            <ControlledSelect 
                options={options}
                name={names[0]}
                placeholder={placeholders[0]}
            />
        </Grid>
        <Grid item xs={12} md={6}>
            <ControlledSelect 
                options={options}
                name={names[1]}
                placeholder={placeholders[1]}
            />
        </Grid>
    </Grid>
  )
}
