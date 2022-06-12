import React from 'react'
import { styled } from '@mui/system'
import Github from '../lottie/Github'
import Email from '../lottie/Email'
import Call from '../lottie/Call'

const Contact = () => {
  const ContactDiv = styled('div')({
    width: '100%',
    backgroundColor: 'white',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem'
  })
  
  const IconsDiv = styled('div')({
    fontSize: '2.5rem',
    gap: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  })

  return (
    <ContactDiv>
        <IconsDiv>
          <Github/>
          <Email/>
          <Call/>
        </IconsDiv>
    </ContactDiv>
  )
}

export default Contact