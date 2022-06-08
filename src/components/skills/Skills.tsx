import { useEffect, useRef, useState } from 'react'
import { styled } from '@mui/system'
import { RefType } from '../../utils/type'
import { Slide } from '@mui/material'
import Skill from './Skill'
import { skills } from '../../data'

const Skills = ({ skillsOffsetTop }: RefType) => {

    const SkillsStyle = styled('div')({
        width: '100%',
        border: 'purple 10px solid',
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
                <div>
                    {
                        Object.keys(skills)
                            .map((key) => skills[key])
                            .map((data) => (
                                <Skill data={data} key={Math.random()} />
                            ))
                    }
                </div>
            </Slide>
        </SkillsStyle>
    )
}

export default Skills