import React, { useRef } from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './components/header/Header';
import { ColorModeContext } from './components/darkMode/darkMode';
import Footer from './components/footer/Footer';
import { CssBaseline } from '@mui/material';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';

function App() {

  const [mode, setMode] = React.useState('light');
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

  const aboutOffsetTop = useRef()
  const skillsOffsetTop = useRef()
  const projectOffsetTop = useRef()
  const contactOffsetTop = useRef()

  const handleAccessDiv = (e) => {
    if(e.target.innerHTML === 'About') {
      aboutOffsetTop.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    } else if (e.target.innerHTML === 'Skills') {
      skillsOffsetTop.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    } else if (e.target.innerHTML === 'Project') {
      projectOffsetTop.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    } else if (e.target.innerHTML === 'Contact') {
      contactOffsetTop.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Header handleAccessDiv={handleAccessDiv}/>
            <div ref={aboutOffsetTop} onClick={handleAccessDiv}>
              <About/>
            </div>
            <div ref={skillsOffsetTop}>
              <Skills/>
            </div>
            <div  ref={projectOffsetTop}>
              <Projects/>
              </div>
            <div ref={contactOffsetTop}>
              <Contact/>
            </div>
          <Footer/>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App