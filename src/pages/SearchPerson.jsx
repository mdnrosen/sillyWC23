import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { body as people } from '../assets/data/allGuesses.json'

import { Box, Paper, TextField, Typography } from '@mui/material'
import { overallScore } from '../utils/marking'
import { compare } from '../utils/helpers'

export const SearchPerson = () => {
  const [ search, setSearch ] = useState('')
  const [ marked, setMarked ] = useState([])

    useEffect(() => {
        const result = people.map(p => {
          return {
              ...p,
              score: overallScore(p)
          }
        })
        setMarked(result.sort(compare))
    },[])

    const filtered = () => {
        const regexp = new RegExp(search, 'i')
        return marked.filter(m => regexp.test(m.name))
    }


    const getBGColor = (i) => {
        if (i === 0) return 'gold'
        if (i === 1) return '#c0c0c0'
        if (i === 2) return '#CD7F32'
        return 'primary.main'

    }
  const navigate = useNavigate();
  return (
    <Box sx={{ px: 2, my: 5, mx: 'auto', width: { md: '60%'}}}>
        <Typography
            variant="h5"
            color="secondary"
            sx={{ mb: 2, textAlign: 'center' }}
        >Select a person to view their progress
        </Typography>
        <TextField 
            sx={{ mb: 1}}
            placeholder="Search by name..."
            fullWidth
            onChange={(e) => setSearch(e.target.value)} 
        />
        {filtered().map((m, i) => (
            <Box onClick={() => navigate(`/${m.id}`)}>
                <Paper variant='outlined' sx={{ cursor: 'pointer', color: 'secondary.main', p: 2, mb: 1, display: 'flex', justifyContent: 'space-between', border: 1, borderColor: getBGColor(i) }}>
                    <Typography variant="h6">{m.name}</Typography>
                    <Typography variant="h6">{m.score}</Typography>

                </Paper>
            </Box>

        ))}
    </Box>
  )
}
