import { useRef } from 'react'
import { styled } from '@mui/system'
import Project from './Project'
import { projectsInfo } from '../../data'
import Grid from '@mui/material/Grid'

type ProjectProps = {
    mode: string
}

const Projects = (props:ProjectProps) => {

    const { mode } = props
    const projectOffsetTop = useRef(null)

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

    const SectionHeader = styled('h1')(({theme}) => ({
        textAlign: 'center',
        [theme.breakpoints.up('xl')]: {
            fontSize: '7rem',
        },
        [theme.breakpoints.down('xl')]: {
            fontSize: '5rem'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem',
        },
    }))

    return (
        <ProjectStyle ref={projectOffsetTop}>
            <SectionHeader>Projects</SectionHeader>
            <ProjectsDivStyle>
                <ProjectsGrid container spacing={2}>
                    {Object.keys(projectsInfo)
                        .map((key) => projectsInfo[key])
                        .map((project) => (
                            <Grid item sm={12} md={12} xl={6}>
                                <Project mode={mode} project={project} key={Math.random()}/>
                            </Grid>
                        ))}
                </ProjectsGrid>
            </ProjectsDivStyle>
        </ProjectStyle>
    )
}

export default Projects