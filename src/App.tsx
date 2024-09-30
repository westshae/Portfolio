import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { theme } from './Components/Theme';
import { CssBaseline } from '@mui/material';
import LandingPage from './Pages/LandingPage';
import { HiringManagerContextProvider } from './Components/HiringManagerDisplay/HiringManagerContext';
import WebgamePage from './Pages/Webgame';


const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HiringManagerContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/webgame" element={<WebgamePage />} />
          </Routes>
        </Router>
      </HiringManagerContextProvider>
    </ThemeProvider>
  );
}

export default App;
