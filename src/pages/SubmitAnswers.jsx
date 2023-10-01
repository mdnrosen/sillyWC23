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
      <> 
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', mx: 1,  pb: 2 }}>
                <Typography variant="h6" color="primary">
                  Almost done!
                </Typography>
              ________________________________________

              <Typography variant="body1" sx={{ mt: 2 }} color="primary">
              Use the menu above to go back and check you've answered everything.
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }} color="secondary">
              Enter your name or a nickname below (please do not use your email address)
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }} color="secondary">
              You can check back in a couple of weeks to see how you're doing
              </Typography>

              ________________________________________

              <Typography variant="body1" sx={{ mt: 2 }} color="primary">
              Good luck!
              </Typography>
              <Box component="form" sx={{ m: 2 }}> 
                <TextField
                      error={dupName}
                      placeholder='Enter name or nickname'
                      fullWidth 
                      required    
                      onChange={(e) => setName(e.target.value)}
                      helperText={dupName ? `${name} is already taken` : null}
                />
                <Button
                  type="submit"
                  disabled={dupName}
                  variant="contained"
                  size="large"
                  sx={{ mt: 2}}
                  color="primary"
                  onClick={handleSubmit}
                  fullWidth>SUBMIT</Button>
              </Box>
          </Box>
        </>
    </>
  )
}