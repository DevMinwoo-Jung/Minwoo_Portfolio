import React, { useRef } from 'react'
import { styled } from '@mui/system'
import { useTheme } from '@mui/material/styles';
import Project from './Project'
import { projectsInfo } from '../../data'

const Projects = () => {
  const projectOffsetTop = useRef(null)
  const theme = useTheme()

  const ProjectStyle = styled('div')({
    width: '100%',
  })

  const ProjectsDivStyle = styled('div')({
    position: 'relative',
    display: 'block',

  })

  return (
    <ProjectStyle ref={projectOffsetTop}>
      <ProjectsDivStyle>
        {Object.keys(projectsInfo)
            .map((key) => projectsInfo[key])
            .map((project) => (
                <Project project={project} key={Math.random()} />
            ))}
      </ProjectsDivStyle>
    </ProjectStyle>
  )
}

export default Projects