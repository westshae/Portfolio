import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { theme } from './Components/Theme';
import { CssBaseline } from '@mui/material';
import LandingPage from './Pages/LandingPage';
import WebgamePage from './Pages/Webgame';
import { NerdContextProvider } from './Components/NerdDisplay/NerdContext';


const App = () => {

  return (
    <div style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NerdContextProvider>
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/webgame" element={<WebgamePage />} />
            </Routes>
          </Router>
        </NerdContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
