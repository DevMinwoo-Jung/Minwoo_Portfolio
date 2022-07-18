import React, { FC } from 'react'
import { styled, Theme, useTheme } from '@mui/system'

export type skillProps = {
    data: any
}

const MainSKill:FC<skillProps> = (props) => {
    const { data } = props
    const theme: Theme = useTheme()
    const SkillsDiv = styled('div')({
        position: 'relative',
        display: 'flex',
        justifyContent: 'center'
    })
    const ImgStyle = styled('img')({
        [theme.breakpoints.up('xl')]: {
            width: '8rem',
            height: '8rem',
            margin: 'auto 3rem',
        },
        [theme.breakpoints.down('xl')]: {
            width: '5em',
            height: '5rem',
            margin: 'auto 2rem',
        },
        [theme.breakpoints.down('sm')]: {
            width: '5rem',
            height: '5rem',
            margin: 'auto 1rem',
        },
    })
    const SkillHeader = styled('p')({
        margin: '2rem'
    })
    const SkillDesc = styled('p')({
        [theme.breakpoints.up('xl')]: {
            fontSize: '16px'
        },
        [theme.breakpoints.down('xl')]: {
            fontSize: '14px'
        },
    })
    const SkillDescDiv = styled('div')(({ theme }) => ({
        whiteSpace: 'pre-line',
        [theme.breakpoints.up('xl')]: {
            width: '30rem',
        },
        [theme.breakpoints.down('xl')]: {
            width: '30rem',
        },
        [theme.breakpoints.down('sm')]: {
            width: '15rem',
        },
    }));


    return (
        <>
            <SkillsDiv key={Math.random()}>
                <ImgStyle src={data.imgSrc} alt='' />
                <SkillDescDiv>
                    <SkillHeader>{data.skillName}</SkillHeader>
                    {
                        data.skillDesc.map((element:string) =>
                            <SkillDesc key={element}>{element}</SkillDesc>
                        )
                    }
                </SkillDescDiv>
            </SkillsDiv>
        </>
    )
}

export default MainSKill