import React, { VFC } from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { styled } from "@mui/system"
import { GoMarkGithub } from "react-icons/go"
import { BiSlideshow } from "react-icons/bi"


export type ProjectProps =  {
    project: any
}

const Project:VFC<ProjectProps> = (props) => {
    const theme = useTheme();
    const { project } = props

    const CardStyle = styled(Card)({
        width: '1000px',
        height: '300px',
        display: 'flex',
        margin: 'auto'
    })

    const CardMediaStyle = styled(CardMedia)({
        width: '300px'
    })

    const CardContentStyle = styled('div')({
        margin: '0 2rem',
        textAlign: 'left',
        maxWidth: '650px',
        height: '100%'
    })

    const CardDiv = styled('div')({
        width: '100%',
        margin: 'auto'
    })

    const IconsDiv = styled('div')({
        display: 'flex',
        fontSize: '2rem',
        margin: '0 2rem',
        alignItems: 'stretch',
        cursor: 'pointer'
    })

    const AtagStyle = styled('a')({
        ":-webkit-any-link": {
            color: 'black'
        }
    })

    const BoxStyle = styled(Box)({
        display: 'flex',
        alignItems: 'center',
        padding: '8px 0 0 8px',
        bottom: '0',
        position: 'absolute'
    })

    return (
        <CardDiv>
            <CardStyle>
                <CardMediaStyle
                    image='imgs/icon/javascript.png'
                />
                <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
                    <CardContentStyle>
                        <h2>{project.project__title}</h2>
                        <span>
                            {project.project__para}
                            기여도: {project.project__contribution}
                            기간: {project.project__making__duration}
                            설명: {project.project__detail}
                            기술 스택: {project.project__stack}
                        </span>
                    </CardContentStyle>
                    <BoxStyle>
                        <IconsDiv>
                            <AtagStyle target='_blank' href={project.project__src}>
                                <GoMarkGithub/>
                            </AtagStyle>
                            <AtagStyle target='_blank' href={project.project__live}>
                                <BiSlideshow />
                            </AtagStyle>
                        </IconsDiv>
                    </BoxStyle>
                </Box>
            </CardStyle>
        </CardDiv>
    )
}

export default Project