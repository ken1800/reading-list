import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Mulish, Arial, sans-serif',
  },
  palette: {
    primary: {
      main: '#5ACCCC', // Turquoise
    },
    secondary: {
      main: '#F76434', // Orange Red
    },
    background: {
      default: '#f7f8fa',
    },
    text: {
      primary: '#335C6E', // Steel Blue
      secondary: '#FABD33', // Yellow
    },
  },
});

export default theme;
