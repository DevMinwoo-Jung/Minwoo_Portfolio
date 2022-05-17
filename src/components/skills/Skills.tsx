import React, { useRef } from 'react'
import { styled } from '@mui/system'

const Skills = () => {
    const SkillsStyle = styled('div')({
        width: '100%',
        height: '500px',
        border: 'purple 10px solid'
    })
    const skillsOffsetTop = useRef(null)
  return (
    <SkillsStyle  ref={skillsOffsetTop}>Skills</SkillsStyle>
  )
}

export default Skills