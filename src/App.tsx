import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { theme } from './Components/Theme';
import { CssBaseline } from '@mui/material';
import LandingPage from './Pages/LandingPage';
import { HiringManagerContextProvider } from './Components/HiringManagerDisplay/HiringManagerContext';


const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HiringManagerContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </Router>
      </HiringManagerContextProvider>
    </ThemeProvider>
  );
}

export default App;
