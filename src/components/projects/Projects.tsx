import React from 'react'
import { styled } from '@mui/system'

const Projects = () => {
  const ProjectStyle = styled('div')({
    width: '100%',
    height: '500px',
    border: 'black 10px solid'
})

  return (
    <ProjectStyle>Projects</ProjectStyle>
  )
}

export default Projects