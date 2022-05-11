import React from 'react'
import { ColorModeContext } from '../darkMode/darkMode';

const Footer = () => {
  const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
  return (
    <div>Footer</div>
  )
}

export default Footer