import { useEffect, useRef, useState } from 'react'
import { styled } from '@mui/system'
import { RefType } from '../../utils/type'
import { Slide } from '@mui/material';

const Skills = ({ skillsOffsetTop }: RefType) => {

  const SkillsStyle = styled('div')({
        width: '100%',
        height: '500px',
        border: 'purple 10px solid',
    })
  const [hideSkills, setHideSkills] = useState(true);
  const scrollRef: any = useRef()

  const yScrollEvent = () => {
    const scroll = scrollRef.current.getBoundingClientRect()
    setHideSkills(scroll.top >= skillsOffsetTop!.current.offsetTop - (skillsOffsetTop!.current.offsetTop / 2));
  };  

  useEffect(() => {
    if (!scrollRef.current) return;
    window.addEventListener("scroll", yScrollEvent)
    return () => {
      window.removeEventListener("scroll", yScrollEvent)
    };
  });


  return (
    <SkillsStyle ref={scrollRef}>
    <Slide direction="up" in={!hideSkills}><h1>hello!!</h1></Slide>
    </SkillsStyle>
  )
}

export default Skills