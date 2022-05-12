import React from 'react'
import { ToggleButton } from '../darkMode/darkMode'
import { styled, Theme, useTheme } from '@mui/system';

const Header = () => {
  
  let theme: Theme = useTheme()

  const HeaderStyle = styled('div')({
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.2rem',
    },
    [theme.breakpoints.between('lg', 'md')]: {
      fontSize: '1rem'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
      justifyContent: 'center',
    },
    width: '100%',
    border: '1px solid black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',

  })

  const ContentsParaStyle = styled('p')({
    paddingLeft: '1rem'
  })

  return (
    <HeaderStyle>
      <ContentsParaStyle>Home</ContentsParaStyle>
      <ContentsParaStyle>About</ContentsParaStyle>
      <ContentsParaStyle>Skills</ContentsParaStyle>
      <ContentsParaStyle>Project</ContentsParaStyle>
      <ContentsParaStyle>Contact</ContentsParaStyle>
      <ToggleButton/>
    </HeaderStyle>
  )
}

export default Header