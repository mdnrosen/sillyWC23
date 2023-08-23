
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box, Button, Container, ThemeProvider, Typography } from '@mui/material'
import theme from './configs/theme'
import CssBaseline from '@mui/material/CssBaseline';
import { TeamList } from './components/TeamList';

import { Home } from './pages/Home'
import { EnglandRound } from './pages/EnglandRound';
import { StandingsRound } from './pages/StandingsRound';

function App() {

  return (
    <Container maxWidth='md'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/england' element={<EnglandRound />} />
              <Route path='/standings' element={<StandingsRound />} />
            </Routes>
          </BrowserRouter>
      </ThemeProvider>
    </Container>
  )
}

export default App
