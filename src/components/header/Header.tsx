import React from 'react'
import { ToggleButton } from '../darkMode/darkMode'
import { styled, Theme, useTheme } from '@mui/system';

const Header = ({handleAccessDiv}: any) => {

  const theme: Theme = useTheme()

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

  const onAccessDiv = (e:any) => {
    console.log(e.target.innerHTML)
    handleAccessDiv(e)
  }

  return (
    <HeaderStyle>
      <ContentsParaStyle onClick={onAccessDiv}>Home</ContentsParaStyle>
      <ContentsParaStyle onClick={onAccessDiv}>About</ContentsParaStyle>
      <ContentsParaStyle onClick={onAccessDiv}>Skills</ContentsParaStyle>
      <ContentsParaStyle onClick={onAccessDiv}>Project</ContentsParaStyle>
      <ContentsParaStyle onClick={onAccessDiv}>Contact</ContentsParaStyle>
      <ToggleButton/>
    </HeaderStyle>
  )
}

export default Header