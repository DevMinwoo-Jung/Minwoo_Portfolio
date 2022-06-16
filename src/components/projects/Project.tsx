import React, { VFC } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { styled } from "@mui/system"
import { GoMarkGithub } from 'react-icons/go'
import { BiSlideshow } from 'react-icons/bi'
import Tooltip from '@mui/material/Tooltip'


export type ProjectProps =  {
    project: any
}

const Project:VFC<ProjectProps> = (props) => {
    const { project } = props

    const CardStyle = styled(Card)(({ theme }) => ({
        width: '45rem',
        display: 'flex',
        margin: 'auto',
        [theme.breakpoints.between('xl', 'md')]: {
            width: theme.breakpoints.values.xl
        },
        [theme.breakpoints.down('sm')]: {
            width: '25rem',
            display: 'block'
        },
    }));

    const CardMediaStyle = styled(CardMedia)(({ theme }) => ({
        width: '20rem',
        [theme.breakpoints.between('xl', 'md')]: {
            width: theme.breakpoints.values.xl
        },
        [theme.breakpoints.down('sm')]: {
            height: '20rem',
            width: '90%',
            margin: 'auto'
        },
    }));

    const DescBox = styled(Box)(({ theme }) => ({
        width: '30rem',
        height: '20rem',
        position: 'relative',
        fontSize: '16px',
        [theme.breakpoints.between('xl', 'md')]: {
            width: theme.breakpoints.values.xl
        },
        [theme.breakpoints.down('sm')]: {
            height: '23rem',
            width: '25rem',
            fontSize: '14px'
        },
    }));

    const CardContentStyle = styled('div')({
        margin: '1rem 1rem 0 1rem',
        textAlign: 'left',
        maxWidth: '650px',
        width: '95%'
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

    const CardParaStyle = styled('span')({
        fontSize: '16px'
    })

    const BoxStyle = styled(Box)({
        display: 'flex',
        alignItems: 'center',
        padding: '8px',
        bottom: '0',

    })


    return (
        <CardDiv>
            <CardStyle>
                <CardMediaStyle
                    image='imgs/icon/javascript.png'
                />
                <DescBox>
                    <CardContentStyle>
                        <h2>{project.project__title}</h2>
                        <CardParaStyle>
                            {project.project__para}<br/>
                            기여도: {project.project__contribution}
                            기간: {project.project__making__duration}<br/>
                            설명: {project.project__detail}<br/>
                            기술 스택: {project.project__stack}
                        </CardParaStyle>
                    </CardContentStyle>
                    <BoxStyle>
                        <IconsDiv>
                            <Tooltip title='Go to Github' placement="top">
                                <AtagStyle target='_blank' href={project.project__src}>
                                    <GoMarkGithub/>
                                </AtagStyle>
                            </Tooltip>
                            &nbsp;&nbsp;
                            <Tooltip title='Show Live' placement="top">
                            <AtagStyle target='_blank' href={project.project__live}>
                                <BiSlideshow />
                            </AtagStyle>
                            </Tooltip>
                        </IconsDiv>
                    </BoxStyle>
                </DescBox>
            </CardStyle>
        </CardDiv>
    )
}

export default Project