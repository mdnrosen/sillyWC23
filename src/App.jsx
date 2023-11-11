
import './App.css'
import { useState, createContext, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box, Button, Container, ThemeProvider, Toolbar } from '@mui/material'
import theme from './configs/theme'
import CssBaseline from '@mui/material/CssBaseline';
import { TeamList } from './components/TeamList';
import { Home } from './pages/Home'
import { EnglandRound } from './pages/EnglandRound';
import { StandingsRound } from './pages/StandingsRound';
import { FiftyFiftyRound } from './pages/FiftyFiftyRound';
import { NumbersRound } from './pages/NumbersRound';
import { SubmitAnswers } from './pages/SubmitAnswers'
import { Navbar } from './components/Navbar';
import { BottomNav } from './components/BottomNav';
import { Submitted } from './pages/Submitted';

import { GuessesProvider } from './context/GuessContext'
import { MultiRound } from './pages/MultiRound'
import ScrollToTop from './components/ScrollToTop'
import { CheckIsLocked } from './components/CheckIsLocked'
import { Locked } from './pages/Locked'
import { Answers } from './pages/Answers'
import { SearchPerson } from './pages/SearchPerson'
import { Summary } from './pages/Summary'


function App() {
  return (
    <Container maxWidth='md' disableGutters>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <BrowserRouter>
            <ScrollToTop />
            {/* <CheckIsLocked /> */}
            <Navbar />
            <Toolbar />
            <GuessesProvider>
              {/* <Locked /> */}
              <Routes>
                {/* <Route path='/england' element={<EnglandRound />} />
                <Route path='/numbers' element={<NumbersRound />} />
                <Route path="/multis" element={<MultiRound />} />
                <Route path='/fiftyfifty' element={<FiftyFiftyRound />} />
                <Route path='/standings' element={<StandingsRound />} />
                <Route path='/submit' element={<SubmitAnswers />} />
                <Route path="/submitted" element={<Submitted />} /> */}
                <Route path="/:id" element={<Answers />} />"
                {/* <Route exact path="/summary" element={<Summary />}/> */}
                <Route exact path='/' element={<SearchPerson />} />
              </Routes>
            </GuessesProvider>
            {/* <BottomNav /> */}
          </BrowserRouter>
      </ThemeProvider>
    </Container>
  )
}

export default App
