import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import styled from '@mui/system/styled';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export function ToggleButton() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const BoxStyle = styled(Box)({
    top: '1rem', 
    right: '2rem', 
    position:'fixed', 
    zIndex: 11,
    [theme.breakpoints.down('sm')]: {
      marginTop: '1.5rem'
  },
  })

  return (
    <BoxStyle >
      <IconButton onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </BoxStyle>
  );
}

export default function ToggleColorMode() {
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
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <ToggleButton />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
