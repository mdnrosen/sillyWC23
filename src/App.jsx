
import './App.css'
import { useState, createContext, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box, Button, Container, ThemeProvider, Typography } from '@mui/material'
import theme from './configs/theme'
import CssBaseline from '@mui/material/CssBaseline';
import { TeamList } from './components/TeamList';

import { Home } from './pages/Home'
import { EnglandRound } from './pages/EnglandRound';
import { StandingsRound } from './pages/StandingsRound';
import { NumbersRound } from './pages/NumbersRound';
import { Navbar } from './components/Navbar';
import { BottomNav } from './components/BottomNav';

export const GuessesContext = createContext({})

function App() {
  const [ guesses, setGuesses ] = useStickyState({}, 'sillywc_guesses')

  function useStickyState(defaultVal, key) {
    const [ value, setValue ] = useState(() => {
      const stickyVal = window.localStorage.getItem(key)
        return stickyVal !== null ? JSON.parse(stickyVal) : defaultVal
      })

      useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value))
      }, [key, value])
      return [ value, setValue ]
    }

  return (
    <Container maxWidth='md'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <BrowserRouter>
            <Navbar />
            <GuessesContext.Provider value={guesses}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/england' element={<EnglandRound />} />
                <Route path='/standings' element={<StandingsRound />} />
                <Route path='/numbers' element={<NumbersRound />} />
              </Routes>
            </GuessesContext.Provider>
            <BottomNav />
          </BrowserRouter>
      </ThemeProvider>
    </Container>
  )
}

export default App
