
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

import { GuessesProvider } from './context/GuessContext'

function App() {
  return (
    <Container maxWidth='md'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <BrowserRouter>
            <Navbar />
            <GuessesProvider>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/england' element={<EnglandRound />} />
                <Route path='/standings' element={<StandingsRound />} />
                <Route path='/numbers' element={<NumbersRound />} />
              </Routes>
            </GuessesProvider>
            <BottomNav />
          </BrowserRouter>
      </ThemeProvider>
    </Container>
  )
}

export default App
