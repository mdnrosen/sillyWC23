
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
import { FiftyFiftyRound } from './pages/FiftyFiftyRound';
import { NumbersRound } from './pages/NumbersRound';
import { Navbar } from './components/Navbar';
import { BottomNav } from './components/BottomNav';

import { GuessesProvider } from './context/GuessContext'
import { MultiRound } from './pages/MultiRound'

function App() {
  return (
    <Container maxWidth='md' disableGutters>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <BrowserRouter>
            <Navbar />
            <GuessesProvider>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/england' element={<EnglandRound />} />
                <Route path='/numbers' element={<NumbersRound />} />
                <Route path="/multis" element={<MultiRound />} />
                <Route path='/fiftyfifty' element={<FiftyFiftyRound />} />
                <Route path='/standings' element={<StandingsRound />} />
              </Routes>
            </GuessesProvider>
            <BottomNav />
          </BrowserRouter>
      </ThemeProvider>
    </Container>
  )
}

export default App
