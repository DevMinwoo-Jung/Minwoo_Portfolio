import React, { FC } from 'react'
import { styled, Theme, useTheme } from '@mui/system';

export type skillProps = {
    data: any
}

const Skill:FC<skillProps> = (props) => {
    const { data } = props
    console.log(data)
    const theme: Theme = useTheme()
    const SkillsDiv = styled('div')({
        position: 'relative',
        display: 'block',
        margin: 'auto',
        justifyContent: 'center',
        textAlign: 'center',
        [theme.breakpoints.up('xl')]: {
            width: '10rem',
        },
        [theme.breakpoints.down('xl')]: {
            width: '10rem',
        },
        [theme.breakpoints.down('sm')]: {
            width: '10rem',
        },
    })
    const ImgStyle = styled('img')({
        margin: '1rem auto',
        [theme.breakpoints.up('xl')]: {
            width: '5rem',
            height: '5rem',
        },
        [theme.breakpoints.down('xl')]: {
            width: '4rem',
            height: '4rem',
        },
        [theme.breakpoints.down('sm')]: {
            width: '3rem',
            height: '3rem',
        },
    })
    const SkillHeader = styled('p')({
        margin: '2rem',
    })


    return (
        <>
            <SkillsDiv key={Math.random()}>
                <ImgStyle src={data.imgSrc} alt='' />
                <SkillHeader>{data.skillName}</SkillHeader>
            </SkillsDiv>
        </>
    )
}

export default Skill