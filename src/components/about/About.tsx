import { Avatar } from '@mui/material';
import { styled } from '@mui/system';
import { Zai, emain } from '../../data';
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Me from '../../../src/icon/me.jpeg'

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

  const ParaOneDept = styled('p')({
    fontSize: '1rem',
    marginLeft: '1rem',
    margin: '0 0 0 1rem'
  })

  const CarrerDeptOne = styled('p')({
      fontSize: '1rem',
      marginRight: '0.5rem',
  })

  const CarrerTitle = styled('p')({
    fontSize: '1rem',
  })

  const CarrerIntroduceDiv = styled('div')({
    display: 'flex'
  })

  const CarrerComapny = styled('p')({
    fontSize: '1.5rem',
    fontWeight: 'bolder',
    marginTop: '0.5rem',
    marginBottom: '0',
    marginLeft: '0'
  })

  const CarrerIntroduce = styled('p')({
    fontSize: '1.2rem',
    fontWeight: 'bolder',
    marginTop: '0.5rem',
    marginBottom: '0',
    marginLeft: '0'
  })

  const CarrerPeriod = styled('p')({
    fontSize: '1rem',
    marginTop: '0.5rem',
    marginBottom: '0',
    marginLeft: '0'
  })

  const CarrerDiv = styled('div')({
    display: 'flex'
  })

  const CarrerCompanyDiv = styled('div')({
    marginRight: '2rem'
  })

  const ATagStyle = styled('a')({
    textDecoration: 'none',
    color: 'grey'
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
        <AvartarStyle src={Me}/>
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
          <CarrerIntroduceDiv>
            <CarrerCompanyDiv>
              <CarrerComapny>자이소프트</CarrerComapny>
              <ATagStyle href='https://www.zaisoft.co.kr' target='_blank'>https://www.zaisoft.co.kr/</ATagStyle>
              <CarrerIntroduce>웹 개발자</CarrerIntroduce>
              <CarrerPeriod>2022.10 ~ Now</CarrerPeriod>
            </CarrerCompanyDiv>
            <div>
            {
              Zai.map((ele) => {
                return (
                  <>
                    <CarrerDiv>
                      <CarrerTitle>{ele.project}</CarrerTitle>
                    </CarrerDiv>
                    <ParaOneDept>* {ele.duties}</ParaOneDept>
                  </>
                )
              })
            }
            </div>
          </CarrerIntroduceDiv>
          <CarrerIntroduceDiv>
            <CarrerCompanyDiv>
              <CarrerComapny>이메인텍</CarrerComapny>
              <ATagStyle href='http://www.emaintec.com/' target='_blank'>http://www.emaintec.com/</ATagStyle>
              <CarrerIntroduce>웹 개발자</CarrerIntroduce>
              <CarrerPeriod>2020.06 ~ 2021.01</CarrerPeriod>
            </CarrerCompanyDiv>
            <div>
            {
              emain.map((ele) => {
                return (
                  <>
                    <CarrerDiv>
                      <CarrerTitle>{ele.project}</CarrerTitle>
                    </CarrerDiv>
                    <ParaOneDept>* {ele.duties}</ParaOneDept>
                  </>
                )
              })
            }
            </div>
          </CarrerIntroduceDiv>
          <div>
            <CarrerTitle>Eduaction</CarrerTitle>
            <p>
              2019.09 ~ 2020.04 - Java & Paython 기반 응용 SW개발자 양성과정
            </p>
            <p >
              2012.02 ~ 2017.01 - 호서대학교 영어영문학과, 국제지역통상학과 졸업
            </p>
            <p >
              2009.03 ~ 2012.01 - 경기도 오산, 오산고등학교 졸업
            </p>
          </div>
        </EduAndCarrer>
    </About>
  )
}

export default About