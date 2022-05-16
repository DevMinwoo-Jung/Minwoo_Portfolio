import React from 'react'
import { styled } from '@mui/system'

const Contact = () => {
  const ContactStyle = styled('div')({
    width: '100%',
    height: '500px',
    border: 'red 10px solid'
})
  return (
    <ContactStyle>contact</ContactStyle>
  )
}

export default Contact