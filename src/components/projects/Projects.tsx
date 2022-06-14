import React, {useRef} from 'react'
import {styled} from '@mui/system'
import {useTheme} from '@mui/material/styles'
import Project from './Project'
import {projectsInfo} from '../../data'
import Grid from '@mui/material/Grid'

const Projects = () => {
    const projectOffsetTop = useRef(null)
    const theme = useTheme()

    const ProjectStyle = styled('div')({
        width: '100%',
    })

    const ProjectsDivStyle = styled('div')({
        position: 'relative',
        display: 'block',
        justifyContent: 'center',
    })

    const ProjectsGrid = styled(Grid)({
        justifyContent: 'center'
    })

    return (
        <ProjectStyle ref={projectOffsetTop}>
            <ProjectsDivStyle>
                <ProjectsGrid container spacing={2}>
                    {Object.keys(projectsInfo)
                        .map((key) => projectsInfo[key])
                        .map((project) => (
                            <Grid item sm={12} md={6} xl={6}>
                                <Project project={project} key={Math.random()}/>
                            </Grid>
                        ))}
                </ProjectsGrid>
            </ProjectsDivStyle>
        </ProjectStyle>
    )
}

export default Projects