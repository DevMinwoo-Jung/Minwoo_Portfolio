import { FC } from 'react'
import { styled, Theme, useTheme } from '@mui/system';

export type skillProps = {
    data: any
}

const Skill:FC<skillProps> = (props) => {
    const { data } = props
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
    const SkillHeader = styled('p')({
        margin: '2rem',
    })


    return (
        <>
            <SkillsDiv key={Math.random()}>
                <data.imgSrc width={45} height={45}/>
                <SkillHeader>{data.skillName}</SkillHeader>
            </SkillsDiv>
        </>
    )
}

export default Skill