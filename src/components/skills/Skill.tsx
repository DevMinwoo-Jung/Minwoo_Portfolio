import React, { VFC } from 'react'
import { styled, Theme, useTheme } from '@mui/system'

export type skillProps = {
    data: any
}

const Skill:VFC<skillProps> = (props) => {
    const { data } = props
    console.log(data)
    const theme: Theme = useTheme()
    const SkillsDiv = styled('div')({
        position: 'relative',
        display: 'flex',
        justifyContent: 'center'
    })
    const ImgStyle = styled('img')({
        [theme.breakpoints.up('xl')]: {
            width: '120px',
            height: '120px',
            margin: '2rem',
        },
        [theme.breakpoints.down('sm')]: {
            width: '80px',
            height: '80px',
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
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px'
        },
    })
    const SkillDescDiv = styled('div')({
        display: 'block'
    })

    return (
        <>
            <SkillsDiv key={Math.random()}>
                <ImgStyle src={data.imgSrc} alt="" />
                <SkillDescDiv>
                    <SkillHeader>{data.skillName}</SkillHeader>
                    {
                        data.skillDesc.map((element:string) =>
                            <SkillDesc>{element}</SkillDesc>
                        )
                    }
                </SkillDescDiv>
            </SkillsDiv>
        </>
    )
}

export default Skill