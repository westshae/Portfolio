import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    background: {
      default: '#F5FAFE', //White based off blue primary (HSL, 90% lum)
      paper: '#720e07',  
    },
    primary: {
      main: '#720e07',    // Bright primary color for important elements
    },
    secondary: {
      main: '#F5FAFE',    // Contrasting secondary color

    },
    text: {
      primary: '#720e07', //White based off blue primary (HSL, 90% lum)
      secondary: '#F5FAFE', // Black based off blue primary (HSL, 90% dark)
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Clean, modern font for readability
    fontSize: 14,
    h1: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
  },
});
