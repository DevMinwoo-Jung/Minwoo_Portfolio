import { styled } from '@mui/system';
import React from 'react'

const About = () => {
  const AboutStyle = styled('div')({
      width: '100%',
      height: '700px',
      border: 'pink 10px solid',
      marginTop: '46px'
  })

  return (
    <AboutStyle>여기는 about!</AboutStyle>
  )
}

export default About