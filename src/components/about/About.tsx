import { styled } from '@mui/system';
import React from 'react'

const About = () => {
  const AboutStyle = styled('div')({
      width: '100%',
      marginTop: '70px'
  })

  return (
    <AboutStyle>여기는 about!</AboutStyle>
  )
}

export default About