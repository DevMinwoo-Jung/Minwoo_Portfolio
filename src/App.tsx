import React from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './components/header/Header';
import { ColorModeContext } from './components/darkMode/darkMode';
import Contents from './components/contents/Contents';
import Footer from './components/footer/Footer';
import { CssBaseline } from '@mui/material';

function App() {

  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
          },
        },
      }),
    [mode],
  );

  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Header />
          <Contents/>
          <Footer/>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App