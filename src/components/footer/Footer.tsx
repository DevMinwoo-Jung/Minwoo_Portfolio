import React from 'react'
import {styled, Theme, useTheme} from "@mui/system";
import {Typography} from "@mui/material";

const Footer = () => {
  const theme: Theme = useTheme()
  const FooterStyle = styled('div')({
    width: '100%',
    height: '50px',
    display: 'flex',
    alignItems: 'center'
  })
  const ParaStyle = styled(Typography)({
    width: '100%',
    textAlign: 'center',
    [theme.breakpoints.up('xl')]: {
      fontSize: '16px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
  })

  const nowYear = new Date().getFullYear();

  return (
    <FooterStyle>
      <ParaStyle>
        ©{nowYear}. 정민우 ALL RIGHTS RESERVED.
      </ParaStyle>
    </FooterStyle>
  )
}

export default Footer