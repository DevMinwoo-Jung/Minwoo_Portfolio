import React from 'react'
import { styled } from '@mui/system'
import { Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'

const Contact = () => {
  const ContactDiv = styled('div')({
    width: '100%',

    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white',
    fontSize: '2rem'
  })
  
  const TypographyDiv = styled('div')({
    padding: '2rem'
  })

  const TypographyStyle = styled(Typography)({
    fontSize: '3rem',
    marginBottom: '2rem'
  })
  
  const IconsDiv = styled('div')({
    fontSize: '2.5rem',
    gap: '1rem'
  })

  return (
    <ContactDiv>
        <IconsDiv>
          <GitHubIcon/>
          <PhoneAndroidIcon/>
        </IconsDiv>
    </ContactDiv>
  )
}

export default Contact