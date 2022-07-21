import { memo, useEffect, useRef } from 'react'

import { styled } from '@mui/system';

const _Header = ({handleAccessDiv}: any ) => {

  const HeaderStyle = styled('div')(({theme}) => ({
    opacity: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    position: 'fixed',
    zIndex: 10,
    top:0,
    [theme.breakpoints.up('xl')]: {
      width: theme.breakpoints.values.xl,
      fontSize: '1.2rem',
    },
    [theme.breakpoints.between('lg', 'md')]: {
      width: theme.breakpoints.values.xl,
      fontSize: '1rem'
    },
    [theme.breakpoints.down('md')]: {
      width: theme.breakpoints.values.sm,
      fontSize: '0.8rem',
      justifyContent: 'center',
      textAlign: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      width: theme.breakpoints.values.xs,
      justifyContent: 'center',
      fontSize: '0.5rem',
      textAlign: 'left',
      marginTop: '1rem'
    },
  }))

  const ContentsParaStyle = styled('p')({
    paddingLeft: '0.5rem',
    cursor: 'pointer',
    width: '100%',
    paddingTop: '1rem',
    margin: '0',
    fontSize: '1rem',
  })

  const scrollRef: any = useRef()
  const headerRef: any = useRef()

  const yScrollEvent = () => {
    const scroll = scrollRef.current.getBoundingClientRect()
    console.log(scroll.top)
    if(scroll.top <= -250) {
      headerRef.current.style.opacity = '1'
      headerRef.current.style.transition = '1s'
    } else if(scroll.top > 0) {
      headerRef.current.style.opacity = '0'
      headerRef.current.style.transition = '1s'
    }
  }

  useEffect(() => {
    if (!scrollRef.current) return;
    window.addEventListener("scroll", yScrollEvent)
    return () => {
      window.removeEventListener("scroll", yScrollEvent)
    };
  }, [scrollRef]);

  const onAccessDiv = (e:any) => {
    handleAccessDiv(e)
  }

  return (
      <div ref={scrollRef}>
        <HeaderStyle ref={headerRef}>
          <ContentsParaStyle onClick={onAccessDiv}>Home</ContentsParaStyle>
          <ContentsParaStyle onClick={onAccessDiv}>About</ContentsParaStyle>
          <ContentsParaStyle onClick={onAccessDiv}>Skills</ContentsParaStyle>
          <ContentsParaStyle onClick={onAccessDiv}>Project</ContentsParaStyle>
          <ContentsParaStyle onClick={onAccessDiv}>Contact</ContentsParaStyle>
        </HeaderStyle>
      </div>
  )
}

const Header = memo(_Header)

export default Header