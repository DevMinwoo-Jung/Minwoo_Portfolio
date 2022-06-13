import { memo, useEffect, useRef } from 'react'
import { ToggleButton } from '../darkMode/darkMode'
import { styled, Theme, useTheme } from '@mui/system';

const _Header = ({handleAccessDiv}: any ) => {

  const theme: Theme = useTheme()

  const HeaderStyle = styled('div')({
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.2rem',
    },
    [theme.breakpoints.between('lg', 'md')]: {
      fontSize: '1rem'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
      justifyContent: 'center',
    },
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
    position: 'fixed',
    zIndex: 10,
    background: 'white',
    opacity: '1',
    top:0
  })

  const ContentsParaStyle = styled('p')({
    paddingLeft: '1rem',
    cursor: 'pointer',
  })

  const scrollRef: any = useRef()
  const headerRef: any = useRef()

  const yScrollEvent = () => {
    const scroll = scrollRef.current.getBoundingClientRect()
    console.log(scroll.top)
    if(scroll.top <= -250) {
      headerRef.current.style.opacity = '0.3'
      headerRef.current.style.transition = '1s'
    }
    if(scroll.top > -250) {
      headerRef.current.style.opacity = '1'
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
    console.log(e.target.innerHTML)
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
          <ToggleButton/>
        </HeaderStyle>
      </div>
  )
}

const Header = memo(_Header)

export default Header