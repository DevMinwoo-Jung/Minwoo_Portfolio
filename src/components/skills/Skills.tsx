import { useEffect, useRef, useState } from 'react'
import { styled } from '@mui/system'
import { RefType } from '../../utils/type'
import { Slide } from '@mui/material'
import Skill from './Skill'
import { skills } from '../../data'
import Grid from '@mui/material/Grid'

const Skills = ({ skillsOffsetTop }: RefType) => {

    const SkillsStyle = styled('div')({
        width: '100%',
    })
    const [hideSkills, setHideSkills] = useState(true);
    const scrollRef: any = useRef()

    const yScrollEvent = () => {
        const scroll = scrollRef.current.getBoundingClientRect()
        setHideSkills(scroll.top >= skillsOffsetTop!.current.offsetTop - (skillsOffsetTop!.current.offsetTop / 2))
    }

    useEffect(() => {
        if (!scrollRef.current) return;
        window.addEventListener("scroll", yScrollEvent)
        return () => {
            window.removeEventListener("scroll", yScrollEvent)
        };
    });

    return (
        <SkillsStyle ref={scrollRef}>
            <Slide direction="up" in={!hideSkills}>
                <Grid container>
                    {
                        Object.keys(skills)
                            .map((key) => skills[key])
                            .map((data) => (
                                <Grid item sm={12} md={6} xl={6}>
                                    <Skill data={data} key={data.skillName} />
                                </Grid>
                            ))
                    }
                </Grid>
            </Slide>
        </SkillsStyle>
    )
}

export default Skills