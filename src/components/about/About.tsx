import { Avatar } from '@mui/material';
import { styled } from '@mui/system';

const About = () => {
  const About = styled('div')({
      width: '80%',
      margin: 'auto',
      textAlign: 'center',
  })

  const AvartarStyle = styled(Avatar)(({ theme }) => ({
    margin: 'auto',
    alignItems: 'center',
    objectFit: 'contain',
    borderRadius: '99999px',
    [theme.breakpoints.up('xl')]: {
      width: '25rem',
      height: '25rem',
    },
    [theme.breakpoints.down('xl')]: {
      width: '20rem',
      height: '20rem',
    },
    [theme.breakpoints.down('sm')]: {
      width: '15rem',
      height: '15rem',
    },
  }))

  const Introduce = styled('div')({
    textAlign: 'center',
    display: 'block'
  })

  const EduAndCarrer = styled('div')({
    textAlign: 'left',
    display: 'block'
  })

  const SectionHeader = styled('h1')(({theme}) => ({
    textAlign: 'center',
    [theme.breakpoints.up('xl')]: {
        fontSize: '7rem',
      },
      [theme.breakpoints.down('xl')]: {
        fontSize: '5rem'
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
      },
}))

  return (
    <About>
        <SectionHeader>About Me</SectionHeader>
        <AvartarStyle src='imgs/me.jpeg'/>
        <h1>- Slow and steady wins the race. -</h1>
        <Introduce>
          <h4>
            저는 _ _ _ _ 을 즐기는 개발자입니다.
          </h4>
          <h4>
            * 꾸준히 노력하는 것
          </h4>
          <h4>
            * 새로운 것을 배우는 것
          </h4>
          <h4>
            * 유저의 좋은 경험을 위해 고민
          </h4>
          <h4>
            * 문제를 해결하는 것
          </h4>
          <h4>
            * 공부하여 성장하는 것
          </h4>
        </Introduce>

        <h1 >Career and Eduaction</h1>
        <EduAndCarrer >
          <p >Career</p>
          <p >2020.06 ~ 2021.01 - 이메인텍</p>
          <p >
            2017.04 ~ 2019.04 - 호서대학교 국제업무팀
          </p>
          <p >
            2017.01 ~ 2017.01 - DYB 최선어학원 인턴
          </p>
          <p >Eduaction</p>
          <p >
            2019.09 ~ 2020.04 - Java & Paython 기반 응용 SW개발자 양성과정
          </p>
          <p >
            2012.02 ~ 2017.01 - 호서대학교 영어영문학과, 국제지역통상학과 졸업
          </p>
          <p >
            2009.03 ~ 2012.01 - 경기도 오산, 오산고등학교 졸업
          </p>
        </EduAndCarrer>
    </About>
  )
}

export default About