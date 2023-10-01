import { Box, Grid, Typography, TextField, Button, Dialog, DialogContent, CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { RoundTitle } from '../components/RoundTitle'
import { RoundCard } from '../components/RoundCard'
import { useGuesses } from '../context/GuessContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export const SubmitAnswers = () => {
  const [ people, setPeople ] = useState([])
  const [ name, setName ] = useState("")
  const [ dupName, setDupName ] = useState(false)
  const [ loading, setLoading ] = useState(false)

  const { guesses } = useGuesses()

  const navigate = useNavigate()

  const getPeople = async() => {


    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/people`)
      setPeople(data.body)
    } catch (error) {
      console.log(error)
    } 
  }

  const handleSubmit = async (e) => {
    setLoading(true)
    try {
      e.preventDefault()
      if (dupName) return
      if (!name) {
        window.alert('You need a name!')
      }
  
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/people`, {
        name,
        guesses
      })
      
      window.localStorage.setItem('sillywc_submitted', true)
      
      navigate('/submitted')
    } catch (error ) {
      console.error(error)
      window.alert('Oops. Something went wrong, try again later')
      setLoading(false)
    }
  }

  useEffect(() => {
    const match = people.filter(p => p.name.toLowerCase() === name.toLowerCase())
    if (match.length) {
        setDupName(true)
    } else {
        setDupName(false)
    }
  },[name])

  useEffect(() => {
    setLoading(true)
    getPeople()
    setLoading(false)
  },[])


  return (
    <>
      {loading ? 
          <Dialog
          open={loading}
          >
              <DialogContent>
                <CircularProgress />

              </DialogContent>
          </Dialog> 
      :null}
      <RoundCard fullHeight={true}>
          <RoundTitle 
              num=""
              name="Submit Answers"
              marking="Go back and check your answers before submitting below"
          />
          <Box sx={{ p: 4}}>
            <Grid container spacing={2} direction="column" alignItems="center">
              <Grid item xs={12} sx={{ mt: 4}}>
                <Typography variant="h6" color="primary">
                  Almost done!
                </Typography>
              </Grid>
              ________________________________________

              <Grid item xs={12}>
                <Typography variant="body1" color="secondary">
                  Use the menu above to go back and check you've answered everything
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" color="secondary">
                  Enter your name or a nickname below. (Please do not use your email address)
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" color="secondary">
                  You can heck back in a couple of weeks to see how you're doing
                </Typography>
              </Grid>
              ________________________________________

              <Grid item xs={12}>
                <Typography variant="body1" color="primary">
                  Good luck!
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Box component="form" sx={{ m: 2 }}> 
                  <TextField
                        error={dupName}
                        placeholder='Enter your name or a nickname'
                        fullWidth 
                        required    
                        onChange={(e) => setName(e.target.value)}
                        helperText={dupName ? `${name} is already taken` : null}
                  />
                  <Button
                    type="submit"
                    disabled={dupName}
                    variant="contained"
                    sx={{ mt: 2}}
                    color="primary"
                    onClick={handleSubmit}
                    fullWidth>SUBMIT</Button>
                </Box>
              </Grid>
            </Grid>
          </Box>

      </RoundCard>
    </>
  )
}